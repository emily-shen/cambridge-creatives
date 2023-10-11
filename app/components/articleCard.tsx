import React, { useState } from "react";
import { Article } from "api";
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const ArticleCard: React.FC<{card: Article, flex: boolean}> = ({card, flex}) => {
  return <>
  <a href={"/opinions/"+card?.article_url}
  key={card.article_url} className={`${flex ? "w-72 sm:w-80":"max-w-lg"} overflow-hidden hover:scale-[102%] transition-transform bg-white rounded-lg shadow-lg flex flex-col gap-2`}>
    <img className="h-36 object-cover object-center mb-4" 
    src={`https://admin.cambridgecreatives.org${card?.image_banner?.data?.attributes?.formats.small ? card?.image_banner?.data?.attributes?.formats.small.url : card?.image_banner?.data?.attributes?.url}`}/>
    <h3 className="px-6">
      {card?.title}
    </h3>
    <p className="px-6 italic text-sm font-bold">{card?.article_filters?.data?.map((a,i) => {
      return< React.Fragment key={i}>
      {a.attributes?.tag}
      </React.Fragment>
    })}</p>
    <ReactMarkdown className="text-sm px-6" children={card.leader ?? ""} />

    <p className="text-sm px-6"><span className=" font-bold">{card?.author}</span> on {card?.publish_date}</p>
    <div className="px-6 pb-8 grow grid place-content-end">
      <FontAwesomeIcon className="text-3xl text-cc-blue" icon={faArrowRightLong}/>
    </div>
    
  </a>
  </>
}

export default ArticleCard;