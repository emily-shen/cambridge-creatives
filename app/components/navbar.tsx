import { Link, useLocation } from "@remix-run/react";
import { Navbar } from "api";
import { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import type  {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import { faTwitter, faLinkedin, faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons'

interface INavbar {
  data: Navbar
}


const NavbarComponent: React.FC<INavbar> = ({ data }) => {
  const icons: {[key:string]: IconDefinition} = {
    twitter: faTwitter,
    linkedin: faLinkedin,
    instagram: faInstagram,
    youtube: faYoutube,
    facebook: faFacebook
  };

  const formatLink = (key: string, link: string) => {
    if (key == "email") {
      return "mailto:" + link
    } else {
      return link
    }
  }
  let route = useLocation().pathname;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const handleWindow = () => {
      const position = window.scrollY;
      const width = window.innerWidth;
      setScrollPosition(position);
      setWindowWidth(width);
  };
  useEffect(() => {
      window.addEventListener('scroll', handleWindow, { passive: true });
      window.addEventListener('resize', handleWindow, { passive: true });
      setScrollPosition(window.scrollY)
      setWindowWidth(window.innerWidth)
      return () => {
          window.removeEventListener('scroll', handleWindow);
          window.removeEventListener('resize', handleWindow);
      };
  }, []);
  useEffect(() => {
    if(windowWidth > 1024) {
      setMenu(false)
    }
  }, [windowWidth])

  const [menuOpen, setMenu] = useState(false)
  const pattern = /^\/opinions\/[a-z_-]+/
  return <>

    <div className={
    `${menuOpen ? 'max-h-80 py-4 items-start' : 'max-h-14 items-center'} transition-all ease-out duration-300
    ${ pattern.test(route) ? "bg-black" : "bg-cc-teal"}  text-white z-30 lg:items-center
    grid grid-cols-[9rem_1fr_2rem] lg:grid-cols-[9rem_1fr] 
    w-full lg:h-14 fixed top-0 px-4`}>

      <Link to={"/"}>
        <p className={` tracking-[4px] font-bold leading-[1.1]  ${ pattern.test(route) ? "text-cc-blue-contrast" : "text-cc-blue"}`}>CAMBRIDGE<br/>CREATIVES</p>
      </Link>

      <div className={`${menuOpen ? "visible h-full" : "invisible h-14"} lg:visible
       flex flex-col lg:flex-row lg:justify-between lg:h-full`}>
        <div >
          <ul className="lg:flex h-full">
            {
              data.navbar_links?.map((link, index) => <Fragment key={index}>
                <li className="font-bold hover:underline underline-offset-8 transition place-self-center">
                  <Link className="uppercase tracking-widest block w-fit pb-4 lg:py-0 lg:px-4" to={link.link ?? "/"}>
                    {link.display_text}
                  </Link>
                </li>
              </Fragment>)
            }
          </ul>
        </div>
        <div className="w-48 justify-self-end">
          <ul className="grid grid-cols-5 h-full">
          {
              Object.entries(icons ?? {}).map(([name, icon], i) => 
                  <li key={i} className="transition hover:scale-125 lg:place-self-center">
                    <Link to={formatLink(name, data[name].toString())}>
                      <FontAwesomeIcon icon={icons[name]} size="lg"/>
                    </Link>
                  </li>
              )
          }

          </ul>
        </div>
      </div>
      <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="xl" onClick={ () => setMenu(!menuOpen)} className="visible lg:hidden"/>
    </div>
  </>;
}

export default NavbarComponent;