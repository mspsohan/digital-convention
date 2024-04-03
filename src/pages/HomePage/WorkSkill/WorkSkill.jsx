import { useEffect } from 'react'
import './workSkill.css'
import loader1 from '../../../assets/homeAssets/loader.png'
import loader2 from '../../../assets/homeAssets/loader (1).png'
import loader3 from '../../../assets/homeAssets/loader (2).png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const WorkSkill = () => {

   useEffect(() => {
      AOS.init();
   }, [])

   return (
      <>
         <div className='skill-con'>
            <div className='sub-skill'>
               <p>WORK SKILLS</p>
               <h1>Pay for Qualified Traffic</h1>
               <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum magna quis quam molestie, vel gravida purus semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</span>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='loader-con'>
               <div>
                  <img src={loader1} alt="" />
                  <h3>Search Engine <br /> Marketing (SEM)</h3>
               </div>
               <div>
                  <img src={loader2} alt="" />
                  <h3>Social Media <br /> Marketing (SMM)</h3>
               </div>
               <div>
                  <img src={loader3} alt="" />
                  <h3>Conversion Rate <br /> Optimization (CRO)</h3>
               </div>
            </div>
         </div>
      </>
   );
};

export default WorkSkill;