import s from './whychooseus.module.css'
import vector1 from '../../../assets/whyChooseUs/vector1.png'
import vector2 from '../../../assets/whyChooseUs/vector2.png'
import vector3 from '../../../assets/whyChooseUs/vector3.png'
import whyChooseUs from '../../../assets/whyChooseUs/seo3.png'
import AOSanimation from '../../../components/shared/AOSanimation/AOSanimation'

const WhyChooseUs = () => {
   return (
      <>
         <div>
            <div className={s.whyChooseUs}>
               <AOSanimation animationType='fade-right'>
                  <div className={s.content}>
                     <button>Why Choose Us</button>
                     <h3>Save Time and Effort with DigiCove</h3>
                     <div className={s.cardContainer}>
                        {/* 1st */}
                        <div className={s.card}>
                           <img src={vector1} alt="" />
                           <div>
                              <h4>Experience and Expertise</h4>
                              <p>We have years of experience and a team of experts in SEO services who are dedicated to providing you with top-notch service.</p>
                           </div>
                        </div>
                        {/* 2nd */}
                        <div className={s.card}>
                           <img src={vector2} alt="" />
                           <div>
                              <h4>Customized Solutions</h4>
                              <p>We understand that every client is unique, which is why we offer customized solutions tailored to your specific needs.</p>
                           </div>
                        </div>
                        {/* 3rd */}
                        <div className={s.card}>
                           <img src={vector3} alt="" />
                           <div>
                              <h4>Trust and Reliability</h4>
                              <p>We understand that every client is unique, which is why we offer customized solutions tailored to your specific needs.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </AOSanimation>
               <AOSanimation animationType='fade-left'>
                  <div className={s.image}>
                     <img src={whyChooseUs} alt="" />
                  </div>
               </AOSanimation>
            </div>
         </div>
      </>
   );
};

export default WhyChooseUs;