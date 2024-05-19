import s from './ourServices.module.css';
import { FaArrowRight } from "react-icons/fa6";
import seo from "../../../assets/services/seo.jpg"
import ppc from "../../../assets/services/ppc.png"
import smm from "../../../assets/services/smm.jpeg"
import em from "../../../assets/services/em.jpeg"
import cm from "../../../assets/services/cm.jpeg"
import wdd from "../../../assets/services/Web-Development-Trends.jpg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const OurServices = () => {

   useEffect(() => {
      AOS.init();
   }, []);

   return (
      <>
         <div className={s.services}>
            <div className={s.servicesTitle}>
               <button>Our Sevices</button>
               <h3>What we offer for your business</h3>
            </div>
            <div className={s.cardContainer}>
               {/* 1st card */}
               <div data-aos="fade-right" className={s.card}>
                  <img src={seo} alt="" />
                  <div className={s.layer}>
                  </div>
                  <div className={s.content}>
                     <div className={s.details}>
                        <h2> 01</h2>
                        <p>Search Engine Optimization (SEO)</p>
                     </div>
                  </div>
                  <button>
                     <Link to="/services-single"><FaArrowRight className={s.arrow} /></Link>
                  </button>
               </div>
               {/* <!--  2nd card  --> */}
               <div data-aos="fade-up" className={s.card}>
                  <img src={ppc} alt="" />
                  <div className={s.layer}>
                  </div>
                  <div className={s.content}>
                     <div className={s.details}>
                        <h2> 02 </h2>
                        <p>Pay-Per-Click (PPC) Advertising</p>
                     </div>
                  </div>
                  <button>
                     <Link to="/services-single"><FaArrowRight className={s.arrow} /></Link>
                  </button>
               </div>
               {/* 3rd card */}
               <div data-aos="fade-left" className={s.card}>
                  <img src={smm} alt="" />
                  <div className={s.layer}>
                  </div>
                  <div className={s.content}>
                     <div className={s.details}>
                        <h2> 03</h2>
                        <p>Social Media Marketing</p>
                     </div>
                  </div>
                  <button>
                     <Link to="/services-single"><FaArrowRight className={s.arrow} /></Link>
                  </button>
               </div>
               {/* 4th card */}
               <div data-aos="fade-right" className={s.card}>
                  <img src={em} alt="" />
                  <div className={s.layer}>
                  </div>
                  <div className={s.content}>
                     <div className={s.details}>
                        <h2> 04</h2>
                        <p>Email <br /> Marketing</p>
                     </div>
                  </div>
                  <button>
                     <Link to="/services-single"><FaArrowRight className={s.arrow} /></Link>
                  </button>
               </div>
               {/* 5th card */}
               <div data-aos="fade-up" className={s.card}>
                  <img src={cm} alt="" />
                  <div className={s.layer}>
                  </div>
                  <div className={s.content}>
                     <div className={s.details}>
                        <h2> 05</h2>
                        <p>Content <br /> Marketing</p>
                     </div>
                  </div>
                  <button>
                     <Link to="/services-single"><FaArrowRight className={s.arrow} /></Link>
                  </button>
               </div>
               {/* 6th card */}
               <div data-aos="fade-left" className={s.card}>
                  <img src={wdd} alt="" />
                  <div className={s.layer}>
                  </div>
                  <div className={s.content}>
                     <div className={s.details}>
                        <h2> 06</h2>
                        <p>Web Design & Development</p>
                     </div>
                  </div>
                  <button>
                     <Link to="/services-single"><FaArrowRight className={s.arrow} /></Link>
                  </button>
               </div>
               {/* card end */}
            </div>
         </div>
      </>
   );
};

export default OurServices;