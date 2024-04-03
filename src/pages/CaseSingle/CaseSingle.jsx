import s from "./caseSignle.module.css";
import {
   FaArrowLeft,
   FaArrowRight,
   FaFacebookF,
   FaInstagram,
   FaPinterestP,
   FaStar,
   FaTwitter,
   FaYoutube,
} from "react-icons/fa6";
import arrowFill from "../../assets/serviceDetails/icon.png";
import { useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import singleCasePic from "../../assets/caseStudy/singleCasePic.png";
import singleCasePic2 from "../../assets/caseStudy/singleCasePic2.png";
import PageBanner from "../../components/shared/PageBanner/PageBanner";

const CaseSingle = () => {
   const items = [
      {
         title: "Floor Plan Descriptions",
         content:
            "Our business consulting programs helps to break the performance of your business down into customers and product groups so you know exactly which customers or product groups are working and which ones aren’t you can make the changes needed to get the best results out of your business. Our business consulting programs helps to break the performance of your business down into customers and product groups so you know exactly which customers or product groups",
      },
      {
         title: "Construction Technology Used",
         content:
            "Our business consulting programs helps to break the performance of your business down into customers and product groups so you know exactly which customers or product groups are working and which ones aren’t you can make the changes needed to get the best results out of your business. Our business consulting programs helps to break the performance of your business down into customers and product groups so you know exactly which customers or product groups",
      },
      {
         title: "Thoughts Behind the projects",
         content:
            "Our business consulting programs helps to break the performance of your business down into customers and product groups so you know exactly which customers or product groups are working and which ones aren’t you can make the changes needed to get the best results out of your business. Our business consulting programs helps to break the performance of your business down into customers and product groups so you know exactly which customers or product groups",
      },
   ];

   const [activeIndex, setActiveIndex] = useState(null);

   const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
   };
   return (
      <>
         <PageBanner
            title="The Benefits of Cloud Computing for Small Businesses"
            route="Case Studies Single"
            pb="120px"
         />
         {/* Banner */}
         <div className={s.caseSingle}>
            {/* Main Content Start */}
            <div className={s.imageContainer}>
               <div className={s.image}>
                  <img src={singleCasePic} alt="" />
               </div>
               <div className={s.imageContent}>
                  <h4>Project Information</h4>
                  <div className={s.clientInfo}>
                     <p className={s.clientText}>
                        Client Name <span>Stream Solutions</span>
                     </p>
                     <hr />
                     <p className={s.clientText}>
                        Location <span>Utah Valley, USA</span>
                     </p>
                     <hr />
                     <p className={s.clientText}>
                        Problem<span>Sink Installation</span>
                     </p>
                     <hr />
                     <p className={s.clientText}>
                        Time <span>2023</span>
                     </p>
                     <hr />
                     <p className={s.clientText}>
                        Client Rating{" "}
                        <span>
                           <FaStar className={s.testRating} />
                           <FaStar className={s.testRating} />
                           <FaStar className={s.testRating} />
                           <FaStar className={s.testRating} />
                           <FaStar className={s.testRating} />
                        </span>
                     </p>
                     <hr />
                  </div>
               </div>
            </div>

            {/* Text Container */}
            <div className={s.underDiv1Con}>
               <h1>Search Engine Optimization For Streamline Solutions</h1>
               <p>
                  Our business consulting programs helps to break the performance of
                  your business down into customers and product groups so you know
                  exactly which customers or product groups are working and which ones
                  aren’t you can make the changes needed to get the best results out
                  of your business. Our business consulting programs helps to break
                  the performance of your business down into customers and product
                  groups so you know exactly which customers or product groups are
                  working and which ones aren’t you can make the changes needed to get
                  the best results out of your business.
               </p>
               <h2>
                  Over the last 35 Years we made an impact that is strong & we have
                  long way to go.{" "}
               </h2>
               <p>
                  Our business consulting programs helps to break the performance of
                  your business down into customers and product groups so you know
                  exactly which customers or product groups are working and which ones
                  aren’t you can make the changes needed to get the best results out
                  of your business. Our business consulting programs helps to break
                  the performance of your business down into customers and product
                  groups so you know exactly which customers or product groups are
                  working and which ones aren’t you can make the changes needed to get
                  the best results out of your business.
               </p>
            </div>

            <div className={s.serviceOptionCon}>
               <h2>DigiCove Values</h2>
               <p>
                  At Digicove our culture comes to life through three core values:
               </p>
               <span>
                  <img src={arrowFill} alt="" />
                  We seize opportunities to innovate and grow
               </span>
               <span>
                  <img src={arrowFill} alt="" />
                  We are one firm with a shared sense of purpose
               </span>
               <span>
                  <img src={arrowFill} alt="" />
                  We care about each other and the world around us
               </span>
            </div>

            <div className={s.underServiceOp}>
               <div className={s.underSerDiv1}>
                  <div>
                     <img src={singleCasePic2} alt="" />
                  </div>
                  <div>
                     <img src={singleCasePic2} alt="" />
                  </div>
               </div>
               <p>
                  Our business consulting programs helps to break the performance of
                  your business down into customers and product groups so you know
                  exactly which customers or product groups are working and which ones
                  aren’t you can make the changes needed to get the best results out
                  of your business. Our business consulting programs helps to break
                  the performance of your business down into customers and product
                  groups so you know exactly which customers or product groups
               </p>
               <p>
                  Our business consulting programs helps to break the performance of
                  your business down into customers and product groups so you know
                  exactly which customers or product groups are working and which ones
                  aren’t you can make the changes needed to get the best results out
                  of your business.{" "}
               </p>
            </div>

            {/* faq sec */}
            <div className={s.serviceOptionCon}>
               <h2>Service Steps</h2>
            </div>
            <div className={s.accordion}>
               {items.map((item, index) => (
                  <div key={index} className={s.accordionitem}>
                     <div
                        className={`${s.accordiontitle} ${activeIndex === index ? `${s.active}` : ""
                           } `}
                        onClick={() => handleClick(index)}
                     >
                        <p className={s.faqTitleText}>{item.title}</p>
                        <MdOutlineArrowBackIos
                           className={`${s.faqArrowIcon}  ${activeIndex === index ? `${s.active}` : ""
                              }`}
                        />
                     </div>
                     <div
                        className={`${s.accordioncontent} ${activeIndex === index ? `${s.active}` : ""
                           }`}
                     >
                        {item.content}
                     </div>
                  </div>
               ))}
            </div>
            {/* Text Secton */}
            <div className={s.underSerDiv3}>
               <p>
                  Our business consulting programs helps to break the performance of
                  your business down into customers and product groups so you know
                  exactly which customers or product groups are working and which ones
                  aren’t you can make the changes needed to get the best results out
                  of your business. Our business consulting programs helps to break
                  the performance of your business down into customers and product
                  groups so you know exactly which customers or product groups
               </p>
               <p>
                  Our business consulting programs helps to break the performance of
                  your business down into customers and product groups so you know
                  exactly which customers or product groups are working and which ones
                  aren’t you can make the changes needed to get the best results out
                  of your business.{" "}
               </p>
            </div>

            {/* testimonial secton */}
            <div className={s.serviceOptionCon}>
               <h2>Clients Feedback</h2>
            </div>
            <div className={s.overflow}>
               <div className={s.cardContainer}>
                  <div className={s.testContent}>
                     <div></div>
                     <div className={s.cardContent}>
                        <p>
                           <FaStar className={s.testRating} />
                           <FaStar className={s.testRating} />
                           <FaStar className={s.testRating} />
                           <FaStar className={s.testRating} />
                           <FaStar className={s.testRating} />
                        </p>
                        <h6 className={s.testText}>
                           "DigiCove helped us improve our online visibility and we saw a
                           significant increase in website traffic. They are great to
                           work with and I highly recommend their services. Our business
                           consulting programs helps to break the performance of your
                           business down into customers and product groups so you know
                           exactly which customers or product groups"
                        </h6>
                        <div>
                           <h5 className={s.testAuthor}>Johannes Times</h5>
                           <p className={s.testCompany}>CEO of REx Company</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* testimonial section end */}

            {/* Socical share container */}
            <div className={s.shareContainer}>
               <h5>Share :</h5>
               <div className={s.socialIcon}>
                  <a href="#" className={s.icon1}>
                     <FaFacebookF />
                  </a>
                  <a href="#" className={s.icon2}>
                     <FaTwitter />
                  </a>
                  <a href="#" className={s.icon3}>
                     <FaInstagram />
                  </a>
                  <a href="#" className={s.icon4}>
                     <FaYoutube />
                  </a>
                  <a href="#" className={s.icon5}>
                     <FaPinterestP />
                  </a>
               </div>
            </div>
            <hr />
            <div className={s.prevNext}>
               <button>
                  {" "}
                  <FaArrowLeft />
                  Previous Project
               </button>
               <button>
                  <FaArrowRight />
                  Next Project
               </button>
            </div>
         </div>
      </>
   );
};

export default CaseSingle;