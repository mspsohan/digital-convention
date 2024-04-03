import s from "./aboutWorkSkill.module.css"
import loader1 from '../../../assets/homeAssets/loader.png'
import loader2 from '../../../assets/homeAssets/loader (1).png'
import loader3 from '../../../assets/homeAssets/loader (2).png'
import image4 from "../../../assets/about/workmobile.png"
import AOSanimation from "../../../components/shared/AOSanimation/AOSanimation"

const AboutWorkSkill = () => {
   return (
      <>
         <div className={s.aWorkSkill}>
            <div className={s.headerTitle}>
               <button>WORK SKILLS</button>
               <h3>Pay for Qualitified Traffic</h3>
            </div>
            <div className={s.bgCard}>
               <div className={s.cardContainer}>
                  <AOSanimation animationType="fade-right">
                     <div className={s.contentContainer}>
                        <div className={s.card}>
                           <img src={loader1} alt="" />
                           <div>
                              <h5>On-page optimization</h5>
                              <p>The ability to optimize website content, meta tags, images, and other elements to improve search engine rankings.</p>
                           </div>
                        </div>
                        <div className={s.card}>
                           <img src={loader2} alt="" />
                           <div>
                              <h5>Technical SEO</h5>
                              <p>The ability to identify and fix technical issues on a website that may hinder search engine crawlers from indexing and ranking.</p>
                           </div>
                        </div>
                        <div className={s.card}>
                           <img src={loader3} alt="" />
                           <div>
                              <h5>SEO Analysis</h5>
                              <p>The ability to track website traffic and engagement metrics, analyze data, and generate reports to guide SEO strategies.</p>
                           </div>
                        </div>
                     </div>
                  </AOSanimation>
                  <AOSanimation animationType="fade-left">
                     <div>
                        <img src={image4} alt="" className={s.mobileImage} />
                     </div>
                  </AOSanimation>
               </div>
            </div>
         </div>
      </>
   );
};

export default AboutWorkSkill;