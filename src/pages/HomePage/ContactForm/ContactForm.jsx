import { useEffect } from "react";
import "./contactForm.css";
import formImg from '../../../assets/homeAssets/image.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import DynamicButton from "../../../components/shared/DynamicButton/DynamicButton";

const ContactForm = () => {

   useEffect(() => {
      AOS.init();
   }, [])

   return (
      <>
         <div>
            <div className="form-con">
               <div data-aos="fade-right" data-aos-duration="1000" className="main-form">
                  <div>
                     <p>Get in Touch</p>
                     <h1>Fill the form to contact us</h1>
                  </div>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="" id="name" />
                  <label htmlFor="email">Email</label>
                  <input type="email" name="" id="email" />
                  <label htmlFor="message">Message</label>
                  <textarea name="" id="message" cols="30" rows="10"></textarea>
                  <DynamicButton text={"Submit"} gradient={"linear-gradient(to right, #40CCFC, #1AECF5)"} />
               </div>
               <div data-aos="fade-left" data-aos-duration="1000" className="side-form"><img style={{ height: '100%', width: '100%' }} src={formImg} alt="" /></div>
            </div>
         </div>
      </>
   );
};

export default ContactForm;