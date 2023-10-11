import type { LoaderArgs} from "@remix-run/node";
import {json} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import PageHeader from "~/components/pageHeader";
import { CCClient, ContentBodyTextComponent, ContentHeadingComponent, ContentQuoteComponent, ContentSubheadingComponent } from "api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import ReactMarkdown from 'react-markdown';
import DynamicContent from "~/components/dynamicContent";


export const loader = async ({ params }: LoaderArgs) => {
  const id = decodeURIComponent(params["*"] ?? "");

  const cc = new CCClient({
    BASE:"https://admin.cambridgecreatives.org"+"/api"
  })
  const articles = await cc.article.getArticles({populate: "deep",paginationLimit:1000});

  const selectedArticle = articles.data?.filter(e => 
    e.attributes?.article_url === id || decodeURIComponent(e.attributes?.old_url?.replace("https://cambridgecreatives.org/opinions/","") ?? "") === id  )

  if (selectedArticle === undefined || selectedArticle.length === 0) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    }); 
  }

  return json(selectedArticle[0].attributes);
}
const test = () =>{
  const data = useLoaderData<typeof loader>()
  return<>
  <div className="w-screen">
    <div className="h-screen w-screen overflow-hidden bg-black grid place-content-center">
      <img className="z-10 absolute top-0 left-0 opacity-50 w-full h-full object-cover" 
      src={"https://admin.cambridgecreatives.org"+data.image_banner.data?.attributes?.url}/>
      <div className="z-20 flex flex-col max-w-3xl drop-shadow-2xl gap-2 text-white text-center p-4">
        <h1 className="mb-2">{data.title}</h1>
        <p className="font-bold text-xl italic">{data.article_filters?.data?.map(tag => tag.attributes?.tag)}</p>
        <ReactMarkdown children={data.leader ?? ""}/>

        <p className="font-bold italic">{data.author}</p>
      </div>
    </div>
    <div className="w-full max-w-2xl mx-auto flex flex-col py-16 px-5">
      <DynamicContent content={data.article_body}/>
    </div>

  </div>
</>
}

export default test;