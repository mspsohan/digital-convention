import "./aboutHero.css";
import aboutBg2 from "../../../../assets/about/Aboutherobg.png";
import aboutLaptop from "../../../../assets/about/laptop-img.png";
import AOSanimation from "../../../../components/shared/AOSanimation/AOSanimation";

const AboutHero = () => {
   const divStyle1 = {
      backgroundImage: `url(${aboutBg2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "1400px",
   };
   return (
      <>
         <div style={divStyle1}>
            <div className="aboutHeroSection">
               <AOSanimation animationType="fade-right">
                  <img className="aboutHeroImg" src={aboutLaptop} alt="" />
               </AOSanimation>
               <AOSanimation animationType="fade-left">
                  <div className="aboutHeroDic">
                     <p className="heroTittleText">
                        <span className="heroTittle">DigiCove</span>
                        is a digital agency that specializes in helping businesses improve
                        their online presence.
                     </p>
                     <p className="heroSmallTitle">
                        Our team of experts has years of experience in SEO, website
                        design, and digital marketing. We are pass-ionate about helping
                        our clients succeed and we take pride in delivering high-quality
                        work.
                     </p>
                  </div>
               </AOSanimation>
            </div>
         </div>
      </>
   );
};

export default AboutHero;