import { MdKeyboardArrowRight } from "react-icons/md";
import aboutBg1 from "../../../assets/about/bg.png";
import { Link } from "react-router-dom";
import s from "./pageBanner.module.css"

const PageBanner = ({ title, route, pb, }) => {
   const divStyle = {
      backgroundImage: `url(${aboutBg1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      paddingBottom: `${pb}` || "120px"
   };
   const titleStyle = {
      // maxWidth:"70%",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      // fontSize: "60px",
      fontWeight: '700',
      margin: "0 auto",
      paddingTop: '80px',
      color: 'white'
   }
   const linkStyle = {
      textDecoration: "none",
      color: "white"
   };

   const bannerRoutes = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      color: 'white',
      fontSize: "24px",
      fontWeight: '600',
   }

   const activeMenu = {
      color: '#31b7e5',
      textDecoration: "none",
   }

   return (
      <>
         <div style={divStyle} className={s.pageBanner}>
            <h2 style={titleStyle}>
               {title}
            </h2>
            <div style={bannerRoutes}>
               <Link to="/" style={linkStyle}>Home</Link>
               <MdKeyboardArrowRight />
               <Link to="/pages" style={linkStyle}>Pages</Link>
               <MdKeyboardArrowRight style={activeMenu} />
               <Link to="#" style={activeMenu} >{route}</Link>
            </div>
         </div>
      </>
   );
};

export default PageBanner;