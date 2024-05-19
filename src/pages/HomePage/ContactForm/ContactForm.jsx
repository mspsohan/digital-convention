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
            <textarea name="" id="message" cols="0" rows="5"></textarea>
            <DynamicButton text={"Submit"} gradient={"linear-gradient(to right, #40CCFC, #1AECF5)"} />
         </div>
         <div data-aos="fade-left" data-aos-duration="1000" className="side-form">
            <div className="z-10 relative h-full max-md:min-h-[350px]" style={{ height: "100%", width: '100%' }}>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.782705162153!2d89.16998757558775!3d23.544937478811104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fee5dfb6ab292b%3A0x714cc79d538236a4!2sPaira%20Chottor!5e1!3m2!1sen!2sbd!4v1715955490817!5m2!1sen!2sbd" width="" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ height: "100%", width: '100%' }}></iframe>
            </div>
         </div>
      </div>
   );
};

export default ContactForm;