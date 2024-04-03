import s from "./ourValues.module.css"
import icon1 from "../../../assets/values/Icon1.png"
import icon2 from "../../../assets/values/Icon2.png"
import icon3 from "../../../assets/values/Icon3.png"
import icon4 from "../../../assets/values/Icon4.png"
import rectangle1 from "../../../assets/values/Ellipse1.png"
import rectangle2 from "../../../assets/values/Ellipse2.png"
import rectangle3 from "../../../assets/values/Ellipse3.png"
import rectangle4 from "../../../assets/values/Ellipse4.png"
import AOSanimation from "../../../components/shared/AOSanimation/AOSanimation"

const OurValues = () => {
   return (
      <>
         <div className={s.value}>
            <AOSanimation animationType="fade-right">
               <div>
                  <button>Our Values</button>
                  <h3>How we run our business</h3>
               </div>
            </AOSanimation>
            <AOSanimation animationType="fade-up">
               <div className={s.cardContainer}>
                  <div className={s.valueCard}>
                     <img src={icon2} alt="" className={s.cardIcon} />
                     <h4>Result-Driven</h4>
                     <p>We are focused on delivering results for our clients and helping them achieve their goals.</p>
                     <img src={rectangle1} alt="" className={s.rectangle} />
                     <div className={`${s.borderLine} ${s.borderLine1}`}></div>
                  </div>
                  <div className={s.valueCard}>
                     <img src={icon1} alt="" className={s.cardIcon} />
                     <h4>Innovation</h4>
                     <p>We are focused on delivering results for our clients and helping them achieve their goals.</p>
                     <img src={rectangle2} alt="" className={s.rectangle} />
                     <div className={`${s.borderLine} ${s.borderLine2}`}></div>
                  </div>
                  <div className={s.valueCard}>
                     <img src={icon3} alt="" className={s.cardIcon} />
                     <h4>Collaboration</h4>
                     <p>We are focused on delivering results for our clients and helping them achieve their goals.</p>
                     <img src={rectangle3} alt="" className={s.rectangle} />
                     <div className={`${s.borderLine} ${s.borderLine3}`}></div>
                  </div>
                  <div className={s.valueCard}>
                     <img src={icon4} alt="" className={s.cardIcon} />
                     <h4>Transparency</h4>
                     <p>We are focused on delivering results for our clients and helping them achieve their goals.</p>
                     <img src={rectangle4} alt="" className={s.rectangle} />
                     <div className={`${s.borderLine} ${s.borderLine4}`}></div>
                  </div>
               </div>
            </AOSanimation>
         </div >
      </>
   );
};

export default OurValues;