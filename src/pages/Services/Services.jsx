import { useEffect } from "react";
import "./services.css";
import serviceBg from "../../assets/services/background.png";
import serviceBg1 from "../../assets/services/element.png";
import serIcon1 from "../../assets/services/icon.png";
import serIcon2 from "../../assets/services/icon (1).png";
import serIcon3 from "../../assets/services/icon (2).png";
import serIcon4 from "../../assets/services/icon (3).png";
import card1png from "../../assets/services/card 01.png";
import subBg from "../../assets/services/Services.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import PageBanner from "../../components/shared/PageBanner/PageBanner";

const Services = () => {
   const divStyle1 = {
      backgroundImage: `url(${serviceBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      zIndex: "-10",
   };

   const cardData = [
      {
         title: "IT Support",
         pera: "We provide 24/7 IT support to ensure your systems are always up and running smoothly.",
         img: serIcon1,
      },
      {
         title: "IT Support",
         pera: "We provide 24/7 IT support to ensure your systems are always up and running smoothly.",
         img: serIcon2,
      },
      {
         title: "IT Support",
         pera: "We provide 24/7 IT support to ensure your systems are always up and running smoothly.",
         img: serIcon3,
      },
      {
         title: "IT Support",
         pera: "We provide 24/7 IT support to ensure your systems are always up and running smoothly.",
         img: serIcon4,
      },
   ];

   const card2Data = [
      {
         title: "SEO Audits & Strategy",
      },
      {
         title: "On-page SEO Optimization",
         des: "We optimize your website's content & structure to make more search engine friendly, make your ranking higher.",
      },
      {
         title: "Link Building & Outreach",
      },
      {
         title: "SEO Audits & Strategy",
      },
      {
         title: "On-page SEO Optimization",
         des: "We optimize your website's content & structure to make more search engine friendly, make your ranking higher.",
      },
      {
         title: "Link Building & Outreach",
      },
   ];

   useEffect(() => {
      AOS.init();
   }, []);

   return (
      <>
         <div>
            <PageBanner title="Our Services" route="Services" pb="145px" />

            <div className="ser-card-con">
               {cardData.map((card, index) => (
                  <div key={index} className={`ser-card ser-card-${index + 1}`}>
                     <img
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        src={card.img}
                        alt=""
                     />
                     <h2>{card.title}</h2>
                     <p>{card.pera}</p>
                  </div>
               ))}
            </div>

            <div className="service-con" style={divStyle1}>
               <img src={serviceBg1} alt="" />
               <img src={subBg} alt="" />

               <div className="service-container">
                  <div className="service-head">
                     <p>OUR SERVICES</p>
                     <h1>Our Premium Services</h1>
                  </div>

                  <div className="card2-container">
                     {card2Data.map((card, index) => (
                        <div key={index} className={`card2 card2-${index + 1}`}>
                           <img
                              data-aos="zoom-in"
                              data-aos-duration="1000"
                              src={card1png}
                              alt=""
                           />
                           <div className={`sub-card2-${index + 1}`}>
                              <h3>
                                 SEO Audits &<br /> Strategy
                              </h3>
                              <p>{card.des}</p>
                           </div>
                           <div className={`sub-card2-sub${index + 1}`}>
                              {index === 1 || index === 4 ? (
                                 <IoIosArrowRoundBack />
                              ) : (
                                 <IoIosArrowRoundForward />
                              )}
                           </div>
                        </div>
                     ))}
                  </div>
                  <p className="pagination">
                     <MdKeyboardDoubleArrowLeft />
                     <span>1</span> <div>2</div> <div>3</div> ...9{" "}
                     <MdKeyboardDoubleArrowRight />
                  </p>
               </div>
            </div>
         </div>
      </>
   );
};

export default Services;