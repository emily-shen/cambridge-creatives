import type { LoaderArgs} from "@remix-run/node";
import {json} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { useState } from "react";
import PageHeader from "~/components/pageHeader";
import { CCClient, Interview } from "api";
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { CheckboxGroup, useInterviewCheckbox } from "~/components/checkbox";


export const loader = async ({ request }: LoaderArgs) => {
  const cc = new CCClient({
    BASE:"https://admin.cambridgecreatives.org"+"/api"
  })
  const pageData = await cc.qAndAPage.getQAndAPage({populate: "deep"});
  const qandaData = await cc.interview.getInterviews({populate: "deep", paginationLimit:1000});
  // const qanda_list = qandaData.data;
  // qanda_list?.sort((a,b) => {
  //   return  new Date(b.attributes?.publish_date ?? 0).valueOf() - new Date(a.attributes?.publish_date ?? 0).valueOf() 
  // })

  const qandaTagData = await cc.interviewFilter.getInterviewFilters({populate: "deep"})
  let page_tags: string[] = [];
  qandaTagData.data?.forEach(tag => {
    if (tag.attributes?.tag === undefined) return;
    else {
      page_tags.push(tag.attributes?.tag)
    }
  })

  let processed_qandas: Interview[] = [];

  qandaData.data?.forEach((qanda,i) => {
    if (qanda.attributes === undefined) return;
    else processed_qandas.push(qanda.attributes)
  })
  
  processed_qandas = processed_qandas?.sort((b,a) => {
    return new Date(a.publish_date ?? 0).valueOf()  - new Date(b.publish_date ?? 0).valueOf()
  })

  return json({
    pageData: pageData.data?.attributes, 
    qandaData: processed_qandas,
    pageTags:page_tags})
};


const QandaPage = () => {

  const data = useLoaderData<typeof loader>();
  const {values:{checkboxes, filterData}, actions: {handleChange}} = useInterviewCheckbox(data.qandaData, data.pageTags)
  
  return <>
  <div className="w-screen">
    <PageHeader title={data.pageData?.page_title ?? ''} description={data.pageData?.page_description ?? ''}/>
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 py-12 px-4">
      <CheckboxGroup pageTags={data.pageTags} checkboxes={checkboxes} handleChange={handleChange}/>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterData?.map((card, index) => {
            return <a href={card?.link}
            key={index} className="max-w-lg hover:scale-[102%] transition-transform bg-white rounded-lg shadow-lg p-8 flex flex-col gap-4">
              <h3>
                {card?.interviewee}
              </h3>
              <p className="italic">{card?.occupation}</p>
              <ReactMarkdown children={card?.description ?? ""}/>
              <div className="grow grid place-content-end">
                <FontAwesomeIcon className="text-3xl text-cc-teal-dark" icon={faArrowRightLong}/>
              </div>
              
            </a>
          })}
        </div>

    </div>
  </div>


  </>
};
export default QandaPage;
