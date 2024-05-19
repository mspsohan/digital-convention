import s from "./featuredProjects.module.css"
import { FaArrowRight } from 'react-icons/fa6';
import seo from "../../../assets/caseStudy/seo.jpg"
import ppc from "../../../assets/caseStudy/ppc.jpg"
import cm from "../../../assets/caseStudy/content_marketing.jpg"
import smm from "../../../assets/caseStudy/smm.jpg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
   useEffect(() => {
      AOS.init();
   }, []);

   const cardData = [
      {
         id: 1,
         client: 'Verona Style',
         year: '2021',
         services: 'Search Engine Optimization',
         img: seo
      },
      {
         id: 2,
         client: 'Cover Blossom Field',
         year: '2023',
         services: 'PPC Advertising',
         img: ppc
      },
      {
         id: 3,
         client: 'Sunrise Solutions',
         year: '2022',
         services: 'Content Marketing',
         img: cm
      },
      {
         id: 4,
         client: 'Candy Accessories',
         year: '2022',
         services: 'Social Media Marketing',
         img: smm
      },
   ];

   return (
      <>
         <div className={s.featuredProjects}>
            <div className={s.featuredTitle}>
               <button>FEATURED PROJECTS</button>
               <h3>Our Case Studies</h3>
            </div>
            <div className={s.cardContainer}>
               {cardData.map((card, index) => (
                  <div data-aos={index === 0 || index === 2 ? "fade-right" : "fade-left"} className={s.card} key={card.id}>
                     <div className={s.iconDiv}>
                        <img src={card.img} alt="" />
                        <div className={s.path}>
                           <div className={s.layer}></div>
                           <div className={s.content}>
                              <div className={s.featureContent}>
                                 <div className={s.details1}>
                                    <h6>{""}</h6>
                                    <h6>Client</h6>
                                    <p>{card.client}</p>
                                    <h6>Year</h6>
                                    <p>{card.year}</p>
                                 </div>
                                 <div className={s.details2}>
                                    <h6>{""}</h6>
                                    <h6>Services</h6>
                                    <h5>{card.services}</h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <button className={s.pathButton}>
                           <Link to="/case-studies-single">
                              <FaArrowRight className={s.arrow} />
                           </Link>
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export default FeaturedProjects;