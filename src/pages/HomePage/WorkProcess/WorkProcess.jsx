import { useEffect } from 'react'
import './workProcess.css'
import workLogo1 from '../../../assets/homeAssets/Icon.png'
import workLogo2 from '../../../assets/homeAssets/Icon (1).png'
import workLogo3 from '../../../assets/homeAssets/Icon (2).png'
import workLogo4 from '../../../assets/homeAssets/Icon (3).png'
import workImg from '../../../assets/homeAssets/image.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const WorkProcess = () => {
   const workData = [
      {
         title: 'Strategy',
         des: "Based on the insights gathered, we develop a comprehensive digital marketing strategy tailored to your business's unique needs and objectives.",
         icon: workLogo1,
      },
      {
         title: 'Implementation',
         des: "Our team of experts executes the plan, leveraging the latest technology and tools to deliver measurable results.",
         icon: workLogo2,
      },
      {
         title: 'Analysis',
         des: "We conduct in-depth analysis and track key performance indicators to evaluate the effectiveness of our strategies and adjust them as needed.",
         icon: workLogo3,
      },
      {
         title: 'Reporting',
         des: "We provide regular, transparent reports that detail the results achieved and the impact of our efforts on your business's bottom line.",
         icon: workLogo4,
      },
   ]

   useEffect(() => {
      AOS.init();
   }, [])

   return (
      <>
         <div className='main-work-con'>
            <div className='work-con'>
               <div data-aos="fade-right" data-aos-duration="1000" className="work-left">
                  <p>WORK PROCESS</p>
                  <h1>How to Get Started</h1>
                  <div><img style={{ height: '100%', width: '100%' }} src={workImg} alt="" /></div>
               </div>
               <div data-aos="fade-left" data-aos-duration="1000" className="work-right">
                  <div className='sub-work-right'>
                  </div>
                  {
                     workData.map((data, index) => {
                        return (
                           <div key={index} className={`work-card work-card-${index}`}>
                              <h2>{data.title}</h2>
                              <p>{data.des}</p>
                              <img src={data.icon} alt="" />
                           </div>
                        )
                     })
                  }
               </div>
            </div>
         </div>
      </>
   );
};

export default WorkProcess;