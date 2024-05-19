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

                     <div className="menu-sec">
                        <div>
                           <h2>Menu</h2>
                           <Link to="#">About us</Link>
                           <Link to="#">Service</Link>
                           <Link to="#">Blogs</Link>
                           <Link to="#">Pricing</Link>
                           <Link to="#">Contact us</Link>
                        </div>
                     </div>
                     <div className="menu-sec">
                        <div>
                           <h2>Quick Links</h2>
                           <Link to="#">Privacy Policy</Link>
                           <Link to="#">Term & Conditions</Link>
                           <Link to="#">Cookie Policy</Link>
                        </div>
                     </div>

                     <div className="socialtitle">
                        <p>Follow Us</p>
                        <div className="socialicon">
                           <Link to="#"><FaFacebookF /></Link>
                           <Link to="#"><FaGoogle /></Link>
                           <Link to="#"><FaTwitter /></Link>
                           <Link to="#"><FaInstagram /></Link>
                           <Link to="#"><FaPinterestP /></Link>
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