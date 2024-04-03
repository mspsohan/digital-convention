import PageBanner from "../../../components/shared/PageBanner/PageBanner";
import AboutHero from "./AboutHero/AboutHero";
import AboutOurTeam from "../AboutOurTeam/AboutOurTeam";
import AboutTestimonials from "../AboutTestimonials/AboutTestimonials";
import AboutWhyChooseUs from "../AboutWhyChooseUs/AboutWhyChooseUs";
import AboutWorkProcess from "../AboutWorkProcess/AboutWorkProcess";
import AboutWorkSkill from "../AboutWorkSkill/AboutWorkSkill";

const About = () => {
   return (
      <>
         <PageBanner title="About Company" route="About" pb="140px" />
         <AboutHero />
         <AboutWhyChooseUs />
         <AboutWorkProcess />
         <AboutTestimonials />
         <AboutWorkSkill />
         <AboutOurTeam />
      </>
   );
};

export default About;