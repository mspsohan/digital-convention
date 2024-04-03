import "./pages.css"
import DynamicButton from "../../components/shared/DynamicButton/DynamicButton";

const Pages = () => {
   const routes = [
      { path: "/" },
      { path: "/about-us" },
      { path: "/services" },
      { path: "/services-single" },
      { path: "/case-studies" },
      { path: "/case-studies-single" },
      { path: "/blogs" },
      { path: "/blogDetails" },
      { path: "/team" },
      { path: "/contact" },
      { path: "/priceTable" },
      { path: "*" },
      { path: "/faq" },
      { path: "/pages" },
   ];
   return (
      <>
         <div className="allRoutes">
            {routes.map((route) => (
               <DynamicButton text={route.path} textColor="white" route={route.path} />
            ))}
         </div>
      </>
   );
};

export default Pages;