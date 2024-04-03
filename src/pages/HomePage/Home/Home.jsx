import Banner from "../Banner/Banner";
import ClientSay from "../ClientSay/ClientSay";
import ContactForm from "../ContactForm/ContactForm";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import HomeFooter from "../HomeFooter/HomeFooter";
import OurServices from "../OurServices/OurServices";
import OurValues from "../OurValues/OurValues";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import WorkProcess from "../WorkProcess/WorkProcess";
import WorkSkill from "../WorkSkill/WorkSkill";

const Home = () => {
   return (
      <div id="home">
         <Banner />
         <OurValues />
         <OurServices />
         <WhyChooseUs />
         <FeaturedProjects />
         <WorkProcess />
         <WorkSkill />
         <ClientSay />
         <ContactForm />
         <HomeFooter />
      </div>
   );
};

export default Home;