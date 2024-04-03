import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaArrowRight, FaGoogle, FaInstagram, FaLocationPin, FaMessage, FaPhone, FaPinterestP, FaTwitter } from "react-icons/fa6";
import logo from "../../../assets/homeAssets/Logo.png";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
   const location = useLocation()
   return (
      <>
         <div style={location.pathname === "/" ? { display: "none" } : { display: "block" }} className="footerMainDiv">
            {/* newsletter section */}
            <div className="newsletterMain">
               <div className="newslettercontent">
                  <h3 className="letterbox box1">Subscribe to Our Newsletter</h3>
                  <div className="letterbox box2">
                     <p>
                        Stay up-to-date with the latest trends in digital marketing and
                        receive exclusive tips and insights by subscribing to our
                        newsletter.
                     </p>
                     <div className="textinput">
                        <div className="input">
                           <input type="text" name="" id="" className="inputfield" placeholder="Enter your email" />
                        </div>
                        <button className="subbutton">
                           Subscribe <FaArrowRight className="rightarrow" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            {/* main footer section */}
            <div className="digiCovMain">
               <div>
                  <div className="footercontent">
                     <div className="logosection">
                        <img src={logo} alt="" />
                        <div>
                           <p>
                              <FaLocationPin /> 123 Anywhere St., Any City, 12345 Any State
                           </p>
                           <p>
                              <FaPhone /> 123-456-7890
                           </p>
                           <p>
                              <FaMessage /> support@digicove.com
                           </p>
                        </div>
                     </div>
                     <div className="linksection">
                        <ul className="">
                           <li className="linktitle">Menu</li>
                           <li>
                              <a href="#">About Us</a>
                           </li>
                           <li>
                              <a href="#">Services</a>
                           </li>
                           <li>
                              <a href="#">Blog</a>
                           </li>
                           <li>
                              <a href="#">Pricing</a>
                           </li>
                           <li>
                              <a href="#">Contact Us</a>
                           </li>
                        </ul>
                     </div>
                     <div className="linksection">
                        <ul className="">
                           <li className="linktitle">Quick Links</li>
                           <li>
                              <a href="#">Privacy Policy</a>
                           </li>
                           <li>
                              <a href="#">Terms & Conditions</a>
                           </li>
                           <li>
                              <a href="#">Cookie Policy</a>
                           </li>
                        </ul>
                     </div>
                     <div className="socialtitle">
                        <p>Follow Us</p>
                        <div className="socialicon">
                           <a href="#">
                              <FaFacebookF />
                           </a>
                           <a href="#">
                              <FaGoogle />
                           </a>
                           <a href="#">
                              <FaTwitter />
                           </a>
                           <a href="#">
                              <FaInstagram />
                           </a>
                           <a href="#">
                              <FaPinterestP />
                           </a>
                        </div>
                        <p className="copyright">
                           Copyright <Link to="/">@DigiCove.</Link> All Rights Reserved.{" "}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Footer;