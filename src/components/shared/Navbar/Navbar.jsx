import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import NavLogo from "../../../assets/navbarIcon/Icon.png";
import DynamicButton from "../DynamicButton/DynamicButton";
import s from "./navbar.module.css"

const navLinksData = [
   { text: "Home", route: "/" },
   { text: "Pages", route: "/pages" },
   { text: "Services", route: "/services" },
   { text: "Contact", route: "/contact" },
   { text: "Elements", route: "/elements" },
   { text: "Blogs", route: "/blogs" },
];

const Navbar = () => {
   const [showModal, setShowModal] = useState(false);

   const toggleModal = () => {
      setShowModal(!showModal);
   };
   return (
      <>
         <div className={s.navbarMainDiv}>
            <Link className={s.navLogoMain} to="/">
               <img src={NavLogo} alt="Navbar Logo" />
               <p className={s.navLogoText}>DigiCove</p>
            </Link>
            {/* ------ */}
            <div className={s.navLinksMain}>
               {navLinksData.map((link, index) => (
                  <NavLink key={index} to={link.route} className={s.navLinks} activeClassName="activeNavLink" >
                     <p className={s.navLinksText}>{link.text}</p>
                     <IoIosArrowDown className={s.downIcon} />
                  </NavLink>
               ))}
               <DynamicButton text="Contact" route="contact" textColor="white" />
            </div>
            <RiMenu3Fill className={s.responsiveMenuIcon} onClick={toggleModal} />
            {showModal && (
               <div className={`${s.navLinksMainModal} ${s.responsiveMenuIcon}`} onClick={toggleModal}>
                  {navLinksData.map((link, index) => (
                     <NavLink key={index} to={link.route} className={s.navLinks} activeClassName="activeNavLink">
                        <p className={s.navLinksText}>{link.text}</p>
                        <IoIosArrowDown className={s.downIcon} />
                     </NavLink>
                  ))}
                  <DynamicButton text="Contact" route="contact" textColor="white" />
               </div>
            )}
         </div>
      </>
   );
};

export default Navbar;