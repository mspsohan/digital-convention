import s from './aboutWorkProcess.module.css';
import icon1 from '../../../assets/about/icon1.png'
import icon2 from '../../../assets/about/icon2.png'
import icon3 from '../../../assets/about/icon3.png'
import icon4 from '../../../assets/about/icon4.png'
import line from '../../../assets/about/aWorkProcess.png'
import AOSanimation from '../../../components/shared/AOSanimation/AOSanimation';

const AboutWorkProcess = () => {
   return (
      <>
         <div className={s.aboutWorkProcess}>
            <div className={s.processTitle}>
               <button>WORK PROCESS</button>
               <h3>How to Get Started</h3>
            </div>
            <AOSanimation animationType='fade-up'>
               <div className={s.cardContainer}>
                  {/* 1st */}
                  <div className={s.card}>
                     <img src={icon1} alt="" className={s.image1} />
                     <h3>Strategy</h3>
                     <p>Based on the insights gathered, we develop a comprehensive SEO strategy tailored to your business's unique
                        needs and objectives.</p>
                  </div>
                  {/* 2nd */}
                  <div className={s.card}>
                     <img src={icon2} alt="" />
                     <h3>Implementation</h3>
                     <p>Digicove’s team of experts
                        executes the plan, leveraging the latest technology and tools to deliver measurable results.</p>
                  </div>
                  {/* 3rd */}
                  <div className={s.card}>
                     <img src={icon3} alt="" />
                     <h3>Analysis</h3>
                     <p>We conduct in-depth analysis &
                        track every key performance indicators to evaluate the effectiveness of digicove’s strategies.</p>
                  </div>
                  {/* 4th */}
                  <div className={s.card}>
                     <img src={icon4} alt="" />
                     <h3>Reporting</h3>
                     <p>We provide regular, transparent
                        reports that detail the results achieved and the impact of our efforts on your business's bottom line.</p>
                  </div>
                  <img src={line} alt="" className={s.lineImage} />
               </div>
            </AOSanimation>
         </div>
      </>
   );
};

export default AboutWorkProcess;