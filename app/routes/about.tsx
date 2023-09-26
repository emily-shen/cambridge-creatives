import type { LoaderArgs} from "@remix-run/node";
import {json} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { useState } from "react";
import PageHeader from "~/components/pageHeader";
import { CCClient, CommitteeCommitteeListComponent, ContentHeadingComponent, ContentQuoteComponent, ContentSubheadingComponent } from "api";
import DynamicContent from "~/components/dynamicContent";

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
      <DynamicContent content={data.content ?? []}/>
    </div>
  </div>
  </>
};
export default AboutPage;
