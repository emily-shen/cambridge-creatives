import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import stylesheet from "./tailwind.css";
import NavbarComponent from "./components/navbar";
import FooterComponent from "./components/footer";
import { CCClient, Navbar } from "../api/index";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const loader = async () => {
  const cc = new CCClient({
    BASE: process.env.STRAPI_API_URL+"/api",
  });

  const response = await cc.navbar.getNavbar({ populate: "deep" });


  return json(response.data?.attributes);
}

export default function App() {
  const data = useLoaderData<Navbar>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
        <Meta />
        <Links />
      </head>
      <body>
        <NavbarComponent data={data}/>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <FooterComponent data={data}/>
      </body>
    </html>
  );
}
