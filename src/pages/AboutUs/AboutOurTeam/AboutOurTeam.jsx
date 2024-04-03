import { FaLinkedinIn, FaTwitter, FaPlus } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import s from "./aboutOutTeam.module.css"
import AOSanimation from "../../../components/shared/AOSanimation/AOSanimation";

const AboutOurTeam = () => {
   return (
      <>
         <div className={s.aOurTeam}>
            <div className={s.headerTitle}>
               <button>OUR TEAM</button>
               <h3>Meet Our Team</h3>
            </div>
            <AOSanimation animationType="fade-up">
               <div className={s.cardContainer}>
                  <div className={s.card}>
                     <div className={s.cardContent}>
                        <button className={s.btn1}>
                           <FaPlus />
                        </button>
                        <h4>Loraine Lee</h4>
                        <p>IT Support Specialist</p>
                        <div className={s.socialIcon}>
                           <FaFacebookF />
                           <FaLinkedinIn />
                           <FaTwitter />
                        </div>
                     </div>
                  </div>
                  <div className={s.card}>
                     <div className={s.cardContent}>
                        <button className={s.btn2}>
                           <FaPlus />
                        </button>
                        <h4>Darren Chandler</h4>
                        <p>Cloud Solutions Expert</p>
                        <div className={s.socialIcon}>
                           <FaFacebookF />
                           <FaLinkedinIn />
                           <FaTwitter />
                        </div>
                     </div>
                  </div>
                  <div className={s.card}>
                     <div className={s.cardContent}>
                        <button className={s.btn3}>
                           <FaPlus />
                        </button>
                        <h4>Michael Johnson</h4>
                        <p>Network Security Analyst</p>
                        <div className={s.socialIcon}>
                           <FaFacebookF />
                           <FaLinkedinIn />
                           <FaTwitter />
                        </div>
                     </div>
                  </div>
                  <div className={s.card}>
                     <div className={s.cardContent}>
                        <button className={s.btn4}>
                           <FaPlus />
                        </button>
                        <h4>Paula Brings</h4>
                        <p>Data Backup & Recovery Specialist</p>
                        <div className={s.socialIcon}>
                           <FaFacebookF />
                           <FaLinkedinIn />
                           <FaTwitter />
                        </div>
                     </div>
                  </div>
               </div>
            </AOSanimation>
         </div>
      </>
   );
};

export default AboutOurTeam;