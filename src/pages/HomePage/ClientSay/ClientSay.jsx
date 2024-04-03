import { useRef } from 'react'
import './clientSay.css'
import quotePng1 from '../../../assets/homeAssets/quote.png'
import quotePng2 from '../../../assets/homeAssets/quote (1).png'

import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import AOSanimation from '../../../components/shared/AOSanimation/AOSanimation';

const ClientSay = () => {
   const splideRef = useRef();

   // Function to navigate to the next slide
   const handleNext = () => {
      splideRef.current.splide.go('>');
   };

   // Function to navigate to the previous slide
   const handlePrev = () => {
      splideRef.current.splide.go('<');
   }
   return (
      <>
         <div className='client-con'>
            <div className='sub-client-con'>
               <div id='client-head'>
                  <AOSanimation animationType="fade-right">
                     <div>
                        <p>TESTIMONIALS</p>
                        <h1>What Our Clients Say</h1>
                     </div>
                  </AOSanimation>
                  <AOSanimation animationType="fade-left">
                     <div id='slide-button'>
                        <button onClick={handlePrev}><IoIosArrowRoundBack /></button>
                        <button onClick={handleNext}><IoIosArrowRoundForward /></button>
                     </div>
                  </AOSanimation>
               </div>
               <AOSanimation animationType="fade-up-left">
                  <div className='client-card-container'>
                     <Splide ref={splideRef}
                        options={{
                           rewind: true,
                           gap: '5rem',
                           perPage: 1,
                           arrows: false,
                           breakpoints: {
                              1830: {
                                 gap: '1rem',
                                 padding: '2rem',
                              },
                              700: {
                                 gap: '0rem',
                                 padding: '1rem',
                              },
                           },
                        }}
                     >
                        <SplideSlide>
                           <div className='slide-card'>
                              <img src={quotePng1} alt="" />
                              <p>DigiCove has helped us achieve significant growth through their digital marketing expertise. Their team is highly skilled, responsive, and a pleasure to work with.</p>
                              <h4>Sarah Lee</h4>
                              <p id='othor'>Marketing Director at Verona Style</p>
                           </div>
                        </SplideSlide>
                        <SplideSlide>
                           <div className='slide-card'>
                              <img src={quotePng2} alt="" />
                              <p>DigiCove has helped us achieve significant growth through their digital marketing expertise. Their team is highly skilled, responsive, and a pleasure to work with.</p>
                              <h4>John Smith</h4>
                              <p id='othor'>CEO of Cover Blossom Field</p>
                           </div>
                        </SplideSlide>
                        <SplideSlide>
                           <div className='slide-card'>
                              <img src={quotePng1} alt="" />
                              <p>DigiCove has helped us achieve significant growth through their digital marketing expertise. Their team is highly skilled, responsive, and a pleasure to work with.</p>
                              <h4>Sarah Lee</h4>
                              <p id='othor'>Marketing Director at Verona Style</p>
                           </div>
                        </SplideSlide>
                        <SplideSlide>
                           <div className='slide-card'>
                              <img src={quotePng2} alt="" />
                              <p>DigiCove has helped us achieve significant growth through their digital marketing expertise. Their team is highly skilled, responsive, and a pleasure to work with.</p>
                              <h4>John Smith</h4>
                              <p id='othor'>CEO of Cover Blossom Field</p>
                           </div>
                        </SplideSlide>
                     </Splide>
                  </div>
               </AOSanimation>
            </div>
         </div>
      </>
   );
};

export default ClientSay;