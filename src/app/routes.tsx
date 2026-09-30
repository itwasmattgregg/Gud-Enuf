import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Manifesto } from "./components/Manifesto";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "manifesto", Component: Manifesto },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
