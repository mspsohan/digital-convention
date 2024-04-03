import './homeFooter.css'
import logo from '../../../assets/homeAssets/Logo.png'
import { MdLocationOn } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import DynamicButton from '../../../components/shared/DynamicButton/DynamicButton';

const HomeFooter = () => {
   return (
      <>
         <div className='main-footer'>
            <div>
               <div className='sub-footer'>
                  <div className='footer'>
                     <div className='logo-sec'>
                        <img src={logo} alt="" />
                        <p><MdLocationOn /> 123 Anywhere St., Any City, 12345 Any State</p>
                        <p><IoMdCall />123-456-7890</p>
                        <p><IoMail />support@digicove.com</p>
                     </div>

                     <div className='email-sec'>
                        <h2>Subscribe to Our Newsletter</h2>
                        <p>Stay up-to-date with the latest trends in digital marketing and receive exclusive tips and insights by subscribing to our newsletter.</p>
                        <div className='input-con'>
                           <input placeholder='Enter your email' type="text" name="" id="" />
                           <DynamicButton text={'Subscribe'}></DynamicButton>
                        </div>
                     </div>

                     <div className='menu-sec'>
                        <div>
                           <h2>Menu</h2>
                           <p>About us</p>
                           <p>Service</p>
                           <p>Blogs</p>
                           <p>Pricing</p>
                           <p>Contact us</p>
                        </div>

                        <div>
                           <h2>Quick Links</h2>
                           <p>Privacy Policy</p>
                           <p>Term & Conditions</p>
                           <p>Cookie Policy</p>
                        </div>
                     </div>
                  </div>
                  <hr style={{ maxWidth: '1620px', margin: 'auto', color: 'gray' }} />
                  <div className='under-footer'>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <p>Follow us</p>
                        <div className='footer-logo-con'>
                           <span><FaFacebookF /></span>
                           <span><FaGoogle /></span>
                           <span><FaTwitter /></span>
                           <span><FaInstagram /></span>
                           <span><FaPinterestP /></span>
                        </div>
                     </div>

                     <p>Copyright <span style={{ color: "#FF7369" }}>©wpthemebooster.</span> All rights reserved.</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeFooter;