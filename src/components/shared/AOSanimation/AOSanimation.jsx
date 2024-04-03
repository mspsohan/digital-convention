import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSanimation = ({
   children,
   animationType = "fade",
   duration = 2000,
   delay = 100,
}) => {

   useEffect(() => {
      AOS.init({ duration, delay });
   }, [duration, delay]);

   return (
      <>
         <div data-aos={animationType}>{children}</div>
      </>
   );
};

export default AOSanimation;