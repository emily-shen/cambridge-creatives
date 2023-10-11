import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { CCClient, ContentImageComponent, CommitteeCommitteeListComponent, ContentBodyTextComponent, ContentHeadingComponent, ContentQuoteComponent, ContentSubheadingComponent } from "api";

const DynamicContent: React.FC<{content: 
  Array<(ContentBodyTextComponent | ContentHeadingComponent | 
    ContentImageComponent | ContentQuoteComponent | 
    ContentSubheadingComponent | CommitteeCommitteeListComponent)>}> = ({content}) => {
  return <>

      {content.map((component, index) => {
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
            return <div className="mb-8 border-l-[6px] border-cc-teal px-4 "key={index}>
              <p className="text-lg italic mb-4">
                "{c_data.quote}"
              </p>
              <p>- {c_data.attribution}</p>
            </div>
          }
          case "content.body-text": {
            const c_data = component as ContentBodyTextComponent;
            return <React.Fragment key={index}>
              <ReactMarkdown className="mb-8 prose-strong:font-bold prose-li:ml-6 prose-ul:list-disc prose-ol:list-decimal prose-a:text-cc-blue-contrast prose-a:font-bold prose-a:underline text-lg flex flex-col gap-5 leading-relaxed" children={c_data.text ?? ""}/>
            </React.Fragment>

          }
          case "content.image": {
            const c_data = component as ContentImageComponent;
            return <div className="mb-8" key={index}>
              <img className="rounded-sm w-full mb-2" src={`https://admin.cambridgecreatives.org${c_data.image?.data?.attributes?.url}`}/>
              <p className="text-sm">{c_data.caption}</p>
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
              return <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {c_data.committee_members?.data?.map((member, i) => {
                  return <div className="max-w-lg hover:scale-[102%] transition-transform bg-white rounded-lg shadow-lg p-8 flex flex-col gap-4 text-center" key={`${index}_${i}`}>
                      <img className="w-36 h-36 object-cover rounded-full mx-auto" 
                      src={`https://admin.cambridgecreatives.org${member.attributes?.photo?.data?.attributes?.formats.small ? member.attributes?.photo?.data?.attributes?.formats.small.url:member.attributes?.photo?.data?.attributes?.url}`}/>
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
    </>
}

export default DynamicContent;