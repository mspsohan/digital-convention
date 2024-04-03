import { FaStar } from 'react-icons/fa6';
import s from './aboutTestimonials.module.css';
import AOSanimation from '../../../components/shared/AOSanimation/AOSanimation';

const testData = [{ id: 1 }, { id: 2 }]

const AboutTestimonials = () => {
   return (
      <>
         <div className={s.aTestimonials}>
            <AOSanimation animationType='fade-right'>
               <div className={s.headerTitle}>
                  <button>Testimonials</button>
                  <h3>What Our Clients Say</h3>
               </div>
            </AOSanimation>
            <div className={s.overflow}>
               <div className={s.cardContainer}>
                  {
                     testData.map((data, index) => (
                        <div key={data.id} className={s.testContent} style={index === 1 ? { opacity: '0.5', background: "linear-gradient(90deg, rgb(132, 130, 137), rgb(111, 109, 118) 100%)" } : {}}>
                           <div></div>
                           <div className={s.cardContent}>
                              <p>
                                 <FaStar className={s.testRating} />
                                 <FaStar className={s.testRating} />
                                 <FaStar className={s.testRating} />
                                 <FaStar className={s.testRating} />
                                 <FaStar className={s.testRating} />
                              </p>
                              <h6 className={s.testText}>"DigiCove helped us improve our online visibility and we saw a significant increase in website traffic. They are great to work with and I highly recommend their services."</h6>
                              <div>
                                 <h5 className={s.testAuthor}>Johannes Times</h5>
                                 <p className={s.testCompany}>CEO of REx Company</p>
                              </div>
                           </div>
                        </div>
                     ))
                  }
               </div>
            </div>
         </div >
      </>
   );
};

export default AboutTestimonials;