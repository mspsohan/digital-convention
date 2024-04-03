import WhyChooseUs from '../../HomePage/WhyChooseUs/WhyChooseUs';
import s from './aboutWhyChooseUs.module.css'

const AboutWhyChooseUs = () => {
   return (
      <>
         <div className={s.chooseUs}>
            <WhyChooseUs />
            <div className={s.metrics}>
               <h3>100% <br /> <span className={s.metricsText}>client satisfaction</span></h3>
               <h3>200+ <br /> <span className={s.metricsText}>SEO campaigns</span></h3>
               <h3>50% <br /> <span className={s.metricsText}>organic Trafic</span></h3>
               <h3>24/7 <br /> <span className={s.metricsText}>customer suppport</span></h3>
            </div>
         </div>
      </>
   );
};

export default AboutWhyChooseUs;