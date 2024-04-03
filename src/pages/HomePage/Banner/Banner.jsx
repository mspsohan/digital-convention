import AOSanimation from "../../../components/shared/AOSanimation/AOSanimation";
import "./banner.css"
import arrow from '../../../assets/homeAssets/Vector.png'
import logo1 from '../../../assets/homeAssets/Logo 01.png'
import logo2 from '../../../assets/homeAssets/Logo 02.png'
import logo3 from '../../../assets/homeAssets/Logo 03.png'
import logo4 from '../../../assets/homeAssets/Logo 04.png'
import logo5 from '../../../assets/homeAssets/Logo 1.png'
import logo6 from '../../../assets/homeAssets/Logo 2.png'
import laptop from '../../../assets/homeAssets/Mockup.png'

const Banner = () => {
   return (
      <>
         <div>
            <div className='banner'>
               <AOSanimation animationType="fade-right" duration={1000} delay={300} className="blogCard" >
                  <div className='banner-sidebar'>
                     <h1>Grow Your Business with Digital Marketing from DigiCove</h1>
                     <p>We help businesses reach their full potential online<br /> through effective digital marketing strategies</p>
                     <button className="banner-btn">Get a Free SEO Audit <img src={arrow} alt="" /></button>
                  </div>
               </AOSanimation>
               <div className='logo-container'>
                  <img src={logo1} alt="logo" />
                  <img src={logo2} alt="logo" />
                  <img src={logo3} alt="logo" />
                  <img src={logo4} alt="logo" />
                  <img src={logo5} alt="logo" />
                  <img src={logo6} alt="logo" />
               </div>
            </div>
            <div className='under-banner'>
               <div className='sub-banner-contant'>
                  <AOSanimation animationType="fade-right" duration={1000} delay={300} className="blogCard" >
                     <img src={laptop} alt="" />
                  </AOSanimation>
                  <AOSanimation animationType="fade-left" duration={1000} delay={300} className="blogCard" >
                     <div className='sub-banner-card-contant'>
                        <div className='sub-banner-card'>
                           <h1>200+</h1>
                           <p>successful digital<br /> marketing campaigns</p>
                        </div>
                        <div className='sub-banner-card-2'>
                           <h1>90%</h1>
                           <p>client retention rate</p>
                        </div>
                        <div className='sub-banner-card-3'>
                           <h1>50%</h1>
                           <p>average increase in<br /> website traffic</p>
                        </div>
                        <div className='sub-banner-card-4'>
                           <h1>25%</h1>
                           <p>average increase in<br /> website traffic</p>
                        </div>
                     </div>
                  </AOSanimation>
               </div>
            </div>
         </div>
      </>
   );
};

export default Banner;