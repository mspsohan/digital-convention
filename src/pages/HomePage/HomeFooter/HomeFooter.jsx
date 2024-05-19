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
import { Link } from 'react-router-dom';

const HomeFooter = () => {
   return (
      <div className='main-footer'>
         <div>
            <div className='sub-footer'>
               <div className='footer'>
                  <div className='logo-sec'>
                     <Link to="/"><img src={logo} alt="" /></Link>
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
                     <div style={{ border: '10px' }}>
                        <h2>Menu</h2>
                        <Link to="#">About us</Link>
                        <Link to="#">Service</Link>
                        <Link to="#">Blogs</Link>
                        <Link to="#">Pricing</Link>
                        <Link to="#">Contact us</Link>
                     </div>

                     <div>
                        <h2>Quick Links</h2>
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">Term & Conditions</Link>
                        <Link to="#">Cookie Policy</Link>
                     </div>
                  </div>
               </div>

               <hr style={{ maxWidth: '1620px', margin: 'auto', color: 'gray' }} />

               <div className='under-footer'>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                     <p>Follow us</p>
                     <div className='footer-logo-con'>
                        <Link to="https://facebook.com"><FaFacebookF /></Link>
                        <Link to="https://google.com"><FaGoogle /></Link>
                        <Link to="https://google.com"><FaTwitter /></Link>
                        <Link to="https://instagram.com"><FaInstagram /></Link>
                        <Link to="https://pinterest.com"><FaPinterestP /></Link>
                     </div>
                  </div>

                  <p>Copyright <Link to="/" style={{ color: "#FF7369", textDecoration: 'none' }}>©DigiCov.</Link> All rights reserved.</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeFooter;