import "./contactUsForm.css";
import { FaArrowRightLong } from "react-icons/fa6";

const ContactUsForm = () => {
   return (
      <>
         <div className="contractFromSection">
            <div className="form-con2">
               <div className="main-form2">
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
                  <button className={` pricingCardBtn4`}>
                     <div>
                        Choose this Package <FaArrowRightLong className="dynamicBtnIcon" />
                     </div>
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

export default ContactUsForm;