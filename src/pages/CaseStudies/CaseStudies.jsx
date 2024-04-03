import s from "./caseStudies.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import AOSanimation from "../../components/shared/AOSanimation/AOSanimation";
import PageBanner from "../../components/shared/PageBanner/PageBanner";
const CaseStudies = () => {
   const cardData = [
      {
         client: "Verona Style",
         year: "2021",
         services: "Search Engine Optimization",
      },
      {
         client: "Cover Blossom Field",
         year: "2023",
         services: "PPC Advertising",
      },
      {
         client: "Sunrise Solutions",
         year: "2022",
         services: "Content Marketing",
      },
      {
         client: "Candy Accessories",
         year: "2022",
         services: "Social Media Marketing",
      },
      {
         client: "Verona Style",
         year: "2021",
         services: "Search Engine Optimization",
      },
      {
         client: "Cover Blossom Field",
         year: "2023",
         services: "PPC Advertising",
      },
      {
         client: "Sunrise Solutions",
         year: "2022",
         services: "Content Marketing",
      },
      {
         client: "Candy Accessories",
         year: "2022",
         services: "Social Media Marketing",
      },
   ];
   return (
      <>
         <div>
            <PageBanner title="Case Studies" route="Case Studies" pb="145px" />
            <div className={s.featuredProjects}>
               <div className={s.cardContainer}>
                  {cardData.map((card) => (
                     <AOSanimation animationType="fade" duration={1000} delay={300}>
                        <div className={s.card}>
                           <div className="iconDiv">
                              <div className={s.path}>
                                 <div className={s.content}>
                                    <div className={s.featureContent}>
                                       <div className={s.details1}>
                                          <h6>'</h6>
                                          <h6>Client</h6>
                                          <p>{card.client}</p>
                                          <h6>Year</h6>
                                          <p>{card.year}</p>
                                       </div>

                                       <div className={s.details2}>
                                          <h6>'</h6>
                                          <h6>Services</h6>
                                          <h5>{card.services}</h5>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              <button className={s.pathButton}>
                                 <AOSanimation animationType="fade-right" duration={1000} delay={300}>
                                    <FaArrowRight className={s.arrow} />
                                 </AOSanimation>{" "}
                              </button>
                           </div>
                        </div>
                     </AOSanimation>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
};

export default CaseStudies;