import type { LoaderArgs,} from "@remix-run/node";
import {json} from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import React, { Fragment, useState } from "react";
import { CCClient, Navbar } from "api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone  } from '@fortawesome/free-solid-svg-icons'
import type  {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import { faTwitter, faLinkedin, faInstagram, faYoutube, faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'


interface IFooter {
  data: Navbar
}
interface FSubtitleProps {
  text: string
}
const FooterLink = ({ children }: { children: React.ReactNode }) => {
  return <>
    <p className="text-white text-md sm:text-xl mb-4 hover:border-l-4 hover:border-cc-teal-contrast hover:pl-3 transition-all">
      {children}
    </p>
  </>
}

const FooterSubtitle = (props: FSubtitleProps) => {
  return <>
    <p className=" text-cc-teal-contrast mb-1 font-bold">
      {props.text}
    </p>
  </>
}


const FooterComponent: React.FC<IFooter> = ({ data }) => {
  const icons: {[key:string]: IconDefinition} = {
    twitter: faTwitter,
    linkedin: faLinkedin,
    instagram: faInstagram,
    youtube: faYoutube,
  };


  return <>
  <div className="bg-cc-blue w-full">
    <div className="w-full px-6 sm:mx-auto sm:w-11/12 lg:w-9/12 xl:w-7/12 max-w-8xl  py-16 md:py-24">
      <div className="w-full flex flex-col md:flex-row border-b border-slate-400 pb-8">

        <div className="w-full md:w-6/12">
          <FooterSubtitle text="Contact"/>
          <h3 className="text-3xl mt-2 my-6 text-white">Get in touch</h3>
          <FooterLink>
            <a href={"mailto:"+data.email}>
              <FontAwesomeIcon icon={faEnvelope}/>&nbsp;&nbsp;
              <span className="text-slate-300">{data.email}</span>
            </a> 
          </FooterLink>
          <FooterLink>
            <a href={data.facebook}>
              <FontAwesomeIcon icon={faFacebookMessenger}/>&nbsp;&nbsp;
              <span className="text-slate-300">@cambridgecreativesclub</span>
            </a> 
          </FooterLink>

          <div className="mt-5 mb-8 md:mb-0">
            <ul className="flex gap-6">
            {
                Object.entries(icons ?? {}).map(([name, icon], i) => 
                    <li key={i}className="text-white transition hover:scale-125 lg:place-self-center">
                      <Link to={data[name]}>
                        <FontAwesomeIcon icon={icon} size="lg"/>
                      </Link>
                    </li>
                  
                )
          }

</ul>

          </div>
        </div>

        <div className="md:w-6/12">
          <FooterSubtitle text="Discover"/>
          <h3 className="text-3xl mt-2 my-6 text-white">Browse content</h3>
          <div className="w-full grid grid-cols-2 max-w-sm">
            {
              data.navbar_links?.map((link, index) => <React.Fragment key={index}>
                <FooterLink>
                  <Link className="" to={link.link ?? "/"}>
                    {link.display_text}
                  </Link>
                </FooterLink>
              </React.Fragment>)
            }
          </div>
        </div>


      </div>

      <div className="w-full flex flex-wrap sm:flex-nowrap mt-8 gap-8">
        <div className="w-7/12 inline-block">
          <FooterSubtitle text="Copyright"/>
          <p className="my-2 text-white">© Copyright {new Date().getFullYear()} Cambridge Creatives</p>
        </div>
        <div className="md:w-7/12 inline-block md:text-right">
          <FooterSubtitle text="Site design by"/>
          <p className="my-2 text-white">Emily Shen</p>
        </div>
      </div>

    </div>

  </div>
  </>;

};

export default FooterComponent;