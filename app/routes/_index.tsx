import type { LoaderArgs} from "@remix-run/node";
import {json} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { useState } from "react";
import { CCClient,Article } from "api";
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import ArticleCard from "~/components/articleCard";


export const loader = async ({ request }: LoaderArgs) => {
  const cc = new CCClient({
    BASE:"http://127.0.0.1:1337/api"
  })
  const homepageData = await cc.homepage.getHomepage({populate: "deep"});

  return json({homepage:homepageData.data?.attributes});
};


const IndexRoute = () => {

  const data = useLoaderData<typeof loader>();
  const article_cards : Article[] = []
  data.homepage?.homepage_articles?.forEach(article =>{
    if (article.article?.data?.attributes === undefined) return;
    else{
      article_cards.push(article.article?.data?.attributes)
    }})

  return <>
  <div className="w-screen text-center">
    <div className="max-h-[100vh] h-fit w-screen overflow-hidden">
      <video autoPlay muted loop className="object-cover h-full w-full">
        <source  src={"http://127.0.0.1:1337"+data.homepage?.hero?.data?.attributes?.url}></source>
      </video>
    </div>
    <div className="my-8 px-4">
    <div className="flex flex-col place-items-center max-w-5xl py-16 mx-auto border-b border-stone-300">
      <h1>{data.homepage?.qanda_title}</h1>
      <p className="text-xl">{data.homepage?.qanda_description}</p>
      <div className="flex flex-row flex-wrap gap-6 mt-6 justify-center">
          {data.homepage?.homepage_qandas?.map((card, index) => {
            return <a href={card?.interview?.data?.attributes?.link}
            key={index} className="w-80 hover:scale-[102%] transition-transform bg-white rounded-lg shadow-lg p-8 flex flex-col gap-4">
              <h3>
                {card?.interview?.data?.attributes?.interviewee}
              </h3>
              <p className="italic">{card?.interview?.data?.attributes?.occupation}</p>
              <ReactMarkdown children={card?.interview?.data?.attributes?.description ?? ""}/>
              <div className="grow grid place-content-end">
                <FontAwesomeIcon className="text-3xl text-cc-teal-dark" icon={faArrowRightLong}/>
              </div>
              
            </a>
          })}
        </div>
    </div>

    <div className="flex flex-col place-items-center max-w-5xl py-16 mx-auto border-b border-stone-300">
      
      <h1>{data.homepage?.article_title}</h1>
      <p className="text-xl">{data.homepage?.article_description}</p>
      <div className="flex flex-row flex-wrap gap-6 mt-6 justify-center">
        {article_cards.map( card => 
          <ArticleCard flex={true} card={card}/>
          )}

          {/* {data.homepage?.homepage_articles?.map((card, index) => {
            return <a href={"/opinions/"+card.article?.data?.attributes?.article_url}
            key={index} className="w-80 overflow-hidden hover:scale-[102%] transition-transform bg-white rounded-lg shadow-lg flex flex-col gap-2">
              <img className="h-36 object-cover object-center mb-4" 
              src={`http://127.0.0.1:1337${card?.image_banner?.data?.attributes?.formats.small ? card.article?.data?.attributes?.image_banner?.data?.attributes?.formats.small.url : card.article?.data?.attributes?.image_banner?.data?.attributes?.url}`}/>
              <h3 className="px-6">
                {card.article?.data?.attributes?.title}
              </h3>
              <p className="px-6 italic text-sm font-bold">{card.article?.data?.attributes?.article_filters?.data?.map(a => {
                return<>
                {a.attributes?.tag}
                </>
              })}</p>
              <ReactMarkdown className="text-sm px-6" children={card.article?.data?.attributes?.leader ?? ""} />

              <p className="text-sm px-6"><span className=" font-bold">{card.article?.data?.attributes?.author}</span> on {card.article?.data?.attributes?.publish_date}</p>
              <div className="px-6 pb-8 grow grid place-content-end">
                <FontAwesomeIcon className="text-3xl text-cc-blue" icon={faArrowRightLong}/>
              </div>
              
            </a>
          })} */}
        </div>
    </div>

    <div className="flex flex-col place-items-center max-w-5xl py-16 mx-auto ">
      <h1>Events</h1>
      <p className="text-xl">{data.homepage?.event_description}</p>
    </div>
    </div>
  </div>


  </>
};
export default IndexRoute;
