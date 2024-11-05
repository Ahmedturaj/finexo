import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";
import WhyUs from "../pages/WhyUs/WhyUs";
import Team from "../pages/Team/Team";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/whyUs",
        element: <WhyUs />,
      },
      {
        path: "/team",
        element: <Team />,
      },
    ],
  },
]);