import { useState } from "react";
import "./faq.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import PageBanner from "../../components/shared/PageBanner/PageBanner";

const FAQ = () => {
   const items = [
      {
         title: "Q1. What kinds of service i can expect from you?",
         content:
            "Our business consulting programs helps to break the performance of your business down into customers and product groups so you know exactly which customers or product groups are working.",
      },
      {
         title: "Q2. What is the payment method in it?",
         content:
            "Content 2 Our business consulting programs helps to break the performance of your business down into customers and product groups so you know exactly which customers or product groups are working.",
      },
      {
         title: "Q3. What is your contact address to reach you?",
         content:
            "Content 3 Our business consulting programs helps to break the performance of your business down into customers and product groups so you know exactly which customers or product groups are working.",
      },
   ];

   const [activeIndex, setActiveIndex] = useState(null);

   const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
   };
   return (
      <>
         <PageBanner title="Frequently Asked Questions" route="FAQ" pb="145px" />
         <div>
            <div className="faqGradientBtnMain">
               <p className="faqGradientBtn">FAQ</p>
            </div>
            <p className="faqTitleTwo">Frequently Asked Questions</p>
            <div className="accordion">
               {items.map((item, index) => (
                  <div key={index} className="accordion-item">
                     <div className={`accordion-title ${activeIndex === index ? "active" : ""} `} onClick={() => handleClick(index)} >
                        <p className="faqTitleText">{item.title}</p>
                        <MdOutlineArrowBackIos className={`faqArrowIcon  ${activeIndex === index ? "active" : ""}`} />
                     </div>
                     <div className={`accordion-content ${activeIndex === index ? "active" : ""}`}>
                        {item.content}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export default FAQ;