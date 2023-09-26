import type { LoaderArgs} from "@remix-run/node";
import {json} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { useState } from "react";
import PageHeader from "~/components/pageHeader";
import { CCClient, Article } from "api";
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { CheckboxGroup, useCheckbox } from "~/components/checkbox";
import ArticleCard from "~/components/articleCard";

export const loader = async ({ request }: LoaderArgs) => {
  const cc = new CCClient({
    BASE:"http://127.0.0.1:1337/api"
  })
  const pageData = await cc.opinionsPage.getOpinionsPage({populate: "deep"});

  let page_tags: string[] = [];
  pageData.data?.attributes?.article_filters?.data?.forEach(tag => {
    if (tag.attributes?.tag === undefined) return;
    else {
      page_tags.push(tag.attributes?.tag)
    }})
    
  let articles = await cc.article.getArticles({populate: "deep", paginationLimit:1000});
  let processed_articles: Article[] = [];



  articles.data?.map((article,i) => {
    if (article.attributes === undefined) return;
    else {
      let article_tags = article.attributes?.article_filters?.data?.map(tag => tag.attributes?.tag)
      let overlap = page_tags?.filter(value => article_tags?.includes(value));
      if (overlap?.length){
        processed_articles.push(article.attributes)
      }
    }
  })
  
  processed_articles = processed_articles?.sort((b,a) => {
    return new Date(a.publish_date ?? 0).valueOf()  - new Date(b.publish_date ?? 0).valueOf()
  })


  return json({pageData: pageData.data?.attributes, 
    articles: processed_articles,
  pageTags:page_tags})
  };
  

const OpinionsPage = () => {

  const data = useLoaderData<typeof loader>();
  const {values:{checkboxes, filterData}, actions: {handleChange}} = useCheckbox(data.articles, data.pageTags)
  
  return <>
  <div className="w-screen">
    <PageHeader title={data.pageData?.page_title ?? ''} description={data.pageData?.page_description ?? ''}/>
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 py-12 px-4">
    <CheckboxGroup pageTags={data.pageTags} checkboxes={checkboxes} handleChange={handleChange} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterData?.map((card, index) => {
            return <ArticleCard flex={false} card={card}/>
          })}
        </div>

    </div>

  </div>


  </>
};
export default OpinionsPage;
