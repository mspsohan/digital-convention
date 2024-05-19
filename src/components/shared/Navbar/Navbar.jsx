import { useState } from "react";
import "./navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import NavLogo from "../../../assets/navbarIcon/Icon.png";
import NavLogoHome from "../../../assets/navbarIcon/Iconblue.png";
import { IoIosArrowDown } from "react-icons/io";
import DynamicButton from "../DynamicButton/DynamicButton";
import { RiMenu3Fill } from "react-icons/ri";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import AOSAnimation from "../AOSanimation/AOSanimation";

const navLinksData = [
   { text: "Home", route: "/" },
   { text: "Pages", route: "/pages" },
   { text: "Services", route: "/services" },
   { text: "Elements", route: "/elements" },
   { text: "Blogs", route: "/blogs" },
];

const Navbar = () => {
   const [showModal, setShowModal] = useState(false);

   const toggleModal = () => {
      setShowModal(!showModal);
   };

   const location = useLocation();

   return (
      <nav className="navbar">
         <div className="navbarMainDiv"
            style={location.pathname === "/" ?
               { color: "white", position: "absolute", zIndex: 90, left: 0, right: 0 }
               : {}}>
            <AOSAnimation animationType="fade-right" duration={1000} delay={300} className="blogCard" >
               <Link className="navLogoMain" to="/"> {location.pathname === "/" ? (<img src={NavLogoHome} alt="Navbar Logo" />) : (<img src={NavLogo} alt="Navbar Logo" />)}
                  <p className="navLogoText" style={location.pathname === "/" ? { color: "white" } : {}} > DigiCove </p>
               </Link>
            </AOSAnimation>

            {/* ------ */}
            <div className="navLinksMain">
               {
                  navLinksData.map((link, index) => (
                     <AOSAnimation animationType="fade-left" duration={1000} delay={300} className="blogCard" >
                        <NavLink key={index} to={link.route} activeClassName="activeNavLink" style={location.pathname === "/" ? { color: "white" } : {}} className={({ isActive, isPending }) => isPending ? "pending NavLink" : isActive ? "active NavLink" : "navLinks NavLink"} >
                           <div className={location.pathname === "/" ? "navLinksTextHome" : "navLinksText"}> {link.text} <IoIosArrowDown /></div>
                           <div id="underline"></div>
                        </NavLink>
                     </AOSAnimation>
                  ))
               }

               {
                  location.pathname === "/" ? (
                     <div className="navIcons">
                        <button style={location.pathname === "/" ? { color: "white" } : {}} >
                           <FaMagnifyingGlass className="searchbar" />
                        </button>
                        <button style={location.pathname === "/" ? { color: "white" } : {}} >
                           <IoMenu className="menubar" />
                        </button>
                     </div>
                  ) : (
                     <DynamicButton text="Get in Touch" />
                  )
               }
            </div>
            <RiMenu3Fill className={` responsiveMenuIcon`} onClick={toggleModal} />
            {
               showModal && (
                  <div className="navLinksMainModal responsiveMenuIcon" onClick={toggleModal} >
                     {navLinksData.map((link, index) =>
                        <NavLink key={index} to={link.route} className="navLinks" activeClassName="activeNavLink" >
                           <p className="navLinksText">{link.text}</p>
                           <IoIosArrowDown />
                        </NavLink>
                     )}
                     <DynamicButton text="Get in Touch" textColor="white" />
                  </div>
               )
            }
         </div>
      </nav>
   );
};

export default Navbar;
