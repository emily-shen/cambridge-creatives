import type { LoaderArgs} from "@remix-run/node";
import {json} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { useState } from "react";
import PageHeader from "~/components/pageHeader";
import { CCClient, CommitteeCommitteeListComponent, ContentHeadingComponent, ContentQuoteComponent, ContentSubheadingComponent } from "api";
export const loader = async ({ request }: LoaderArgs) => {
  const cc = new CCClient({
    BASE:"http://127.0.0.1:1337/api"
  })
  const aboutData = await cc.aboutPage.getAboutPage({populate: "deep"});

  return json(aboutData.data?.attributes);
};


const AboutPage = () => {

  const data = useLoaderData<typeof loader>();

  return <>
  <div className="w-screen p">
    <PageHeader title={data.page_title ?? ''} description={data.page_description ?? ''}/>
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      {data.content?.map((component, index) => {
        switch (component.__component){
          case "content.heading": {
            const c_data = component as ContentHeadingComponent;
            return <h2 className="mb-4" key={index}>
              {c_data.heading}
            </h2>
          }
          case "content.subheading": {
            const c_data = component as ContentSubheadingComponent;
            return <h3 className="mb-4" key={index}>
              {c_data.subheading}
            </h3>
          }
          case "content.quote": {
            const c_data = component as ContentQuoteComponent;
            return <div className="mb-12 border-l-[6px] border-cc-teal px-4 "key={index}>
              <p className="text-lg italic">
                "{c_data.quote}"
              </p>
              <p className="text-right">{c_data.attribution}</p>
            </div>
          }
          case "committee.committee-list": {
            const c_data = component as CommitteeCommitteeListComponent;
            if (c_data.committee_members?.data?.at(0)?.attributes?.past_committee){
              return <div className="mb-12 flex flex-col">
                {c_data.committee_members?.data?.map((member, i) => {
                  return <React.Fragment key={`${index}_${i}`}>
                    <p className="mb-3"><span className="font-bold">{member.attributes?.role}:</span> {member.attributes?.name} {member.attributes?.pronouns}</p>
                  </React.Fragment>
                })}
              </div>
            } else {
              return <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {c_data.committee_members?.data?.map((member, i) => {
                  return <div className="max-w-lg hover:scale-[102%] transition-transform bg-white rounded-lg shadow-lg p-8 flex flex-col gap-4 text-center" key={`${index}_${i}`}>
                      <img className="w-36 h-36 object-cover rounded-full mx-auto" 
                      src={`http://127.0.0.1:1337${member.attributes?.photo?.data?.attributes?.formats.small ? member.attributes?.photo?.data?.attributes?.formats.small.url:member.attributes?.photo?.data?.attributes?.url}`}/>
                    <div>
                      <p className="font-bold text-lg">{member.attributes?.name} <span>{member.attributes?.pronouns}</span></p>
                      <p>{member.attributes?.role}</p>
                    </div>
                    <p className="text-left text-sm font-normal">{member.attributes?.bio}</p>
                  </div>
                })}
                </div>
            }


          }}
      })}
    </div>
  </div>


  </>
};
export default AboutPage;
