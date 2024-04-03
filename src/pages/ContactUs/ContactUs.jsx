import "./contactUs.css";
import contractMethodsIcon1 from "../../assets/contractUs/conIncon1.png";
import contractMethodsIcon2 from "../../assets/contractUs/conIncon2.png";
import contractMethodsIcon3 from "../../assets/contractUs/conIncon3.png";
import AOSanimation from "../../components/shared/AOSanimation/AOSanimation";
import PageBanner from "../../components/shared/PageBanner/PageBanner";
import ContactUsForm from "./ContactUsForm/ContactUsForm";

const ContactUs = () => {

   // Data for the cards
   const cardsData = [
      {
         animationName: "zoom-in",
         // animationNameForText: "fade-up",
         icon: contractMethodsIcon1,
         title: "Send Us Mail",
         emails: ["digicove.care@email.com", "info.digicove@email.com"],
      },
      {
         animationName: "zoom-in",
         icon: contractMethodsIcon2,
         title: "Call Us Anytime",
         emails: ["(+987) 654 321 228 11 ", "info.digicove@email.com"],
      },
      {
         animationName: "zoom-in",
         icon: contractMethodsIcon3,
         title: "Visit Our Office",
         emails: ["Untes States of America", "info.digicove@email.com"],
      },
   ];
   return (
      <>
         <div>
            <PageBanner title="Contact Us" route="Contact Us" pb="145px" />
            {/* 3 card section */}
            <div className="contractMethodCardMain">
               {/* Mapping over the cardsData array */}
               {cardsData.map((card, index) => (
                  <div key={index} className="contractMethodCard">
                     <AOSanimation animationType={card.animationName} duration={1000} delay={300} >
                        <img src={card.icon} alt={`Icon ${index}`} />
                     </AOSanimation>
                     <div>
                        <h1>{card.title}</h1>
                        {/* Mapping over the emails array */}
                        {card.emails.map((email, index) => (
                           <p key={index}>{email}</p>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
            {/* contract form */}
            <AOSanimation animationType={"fade-up"} duration={1000} delay={300}>
               <ContactUsForm />
            </AOSanimation>
         </div>
      </>
   );
};

export default ContactUs;