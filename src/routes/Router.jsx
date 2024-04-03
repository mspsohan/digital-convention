import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage/Home/Home";
import About from "../pages/AboutUs/About/About";
import Pages from "../pages/Pages/Pages";
import Blog from "../pages/Blog/Blog";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import CaseSingle from "../pages/CaseSingle/CaseSingle";
import CaseStudies from "../pages/CaseStudies/CaseStudies";
import ContactUs from "../pages/ContactUs/ContactUs";
import FAQ from "../pages/FAQ/FAQ";
import NotFound from "../pages/NotFound/NotFound";
import PriceTable from "../pages/PriceTable/PriceTable";
import Services from "../pages/Services/Services";
import ServicesDetails from "../pages/ServicesDetails/ServicesDetails";
import OurTeam from "../pages/OurTeam/OurTeam";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <div>Error...</div>,
      children: [
         { index: true, element: <Home /> },
         { path: "/about-us", element: <About /> },
         { path: "/pages", element: <Pages /> },
         { path: "/blogs", element: <Blog /> },
         { path: "/blogDetails", element: <BlogDetails /> },
         { path: "/case-studies", element: <CaseStudies /> },
         { path: "/case-studies-single", element: <CaseSingle /> },
         { path: "/contact", element: <ContactUs /> },
         { path: "/faq", element: <FAQ /> },
         { path: "*", element: <NotFound /> },
         { path: "/priceTable", element: <PriceTable /> },
         { path: "/services", element: <Services /> },
         { path: "/services-single", element: <ServicesDetails /> },
         { path: "/team", element: <OurTeam /> },
      ]
   }
])

export default router;