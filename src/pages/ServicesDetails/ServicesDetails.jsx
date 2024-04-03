import "./servicesDetails.css";
import arrowFill from "../../assets/serviceDetails/icon.png";
import comaPng from "../../assets/serviceDetails/Vector.png";
import comaPng2 from "../../assets/serviceDetails/Vector (1).png";
import mainImg from "../../assets/serviceDetails/Main Image.png";
import underImg from "../../assets/serviceDetails/Image placeholder.png";
import videoImg from "../../assets/serviceDetails/Video.png";
import PageBanner from "../../components/shared/PageBanner/PageBanner";

const ServicesDetails = () => {
   const menuData = [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Marketing",
      "Email Marketing",
      "Content Marketing",
      "Web Design & Development",
      "Link Building & Outreach",
      "SEO Audits & Strategy",
   ];
   return (
      <>
         <div>
            <PageBanner title="Pay-Per-Click (PPC) Advertising" route="Service Single" pb="145px" />

            <div className="main-div1-con">
               <div className="div1-con">
                  <div className="div1-left">
                     <img src={mainImg} alt="" />
                  </div>
                  <div className="div1-right">
                     {menuData.map((item, index) => (
                        <p style={{ fontWeight: "700" }} key={index}>
                           {item}
                        </p>
                     ))}
                  </div>
               </div>

               <div className="under-div1-con">
                  <h1>Pay-Per-Click (PPC) Advertising</h1>
                  <p>
                     Our business consulting programs helps to break the performance of
                     your business down into customers and product groups so you know
                     exactly which customers or product groups are working and which ones
                     aren’t you can make the changes needed to get the best results out
                     of your business. Our business consulting programs helps to break
                     the performance of your business.
                  </p>
                  <h2>
                     Over the last 35 Years we made an impact that creates strong
                     Business
                  </h2>
                  <p>
                     Our business consulting programs helps to break the performance of
                     your business down into customers and product groups so you know
                     exactly which customers or product groups are working and which ones
                     aren’t you can make the changes needed to get the best results out
                     of your business. Our business consulting programs helps to break
                     the performance of your business.
                  </p>
               </div>

               <div className="service-option-con">
                  <h2>Service Options</h2>
                  <p>
                     At Digicove our culture comes to life through three core values:
                  </p>
                  <span>
                     <img src={arrowFill} alt="" />
                     We seize opportunities to innovate and grow
                  </span>
                  <span>
                     <img src={arrowFill} alt="" />
                     We are one firm with a shared sense of purpose
                  </span>
                  <span>
                     <img src={arrowFill} alt="" />
                     We care about each other and the world around us
                  </span>
               </div>

               <div className="under-service-op">
                  <div className="under-ser-div1">
                     <div>
                        <img src={underImg} alt="" />
                     </div>
                     <div>
                        <img src={underImg} alt="" />
                     </div>
                  </div>
                  <p>
                     Our business consulting programs helps to break the performance of
                     your business down into customers and product groups so you know
                     exactly which customers or product groups are working and which ones
                     aren’t you can make the changes needed to get the best results out
                     of your business. Our business consulting programs helps to break
                     the performance of your business.
                  </p>
               </div>

               <div className="under-ser-div2">
                  <img src={videoImg} alt="" />
               </div>
               <div className="under-ser-div3">
                  <p>
                     Our business consulting programs helps to break the performance of
                     your business down into customers and product groups so you know
                     exactly which customers or product groups are working and which ones
                     aren’t you can make the changes needed to get the best results out
                     of your business. Our business consulting programs helps to break
                     the performance of your business.
                  </p>
                  <p>
                     Our business consulting programs helps to break the performance of
                     your business down into customers and product groups so you know
                     exactly which customers or product groups are working and which ones
                     aren’t you can make the changes needed to get the best results out
                     of your business. Our business consulting programs helps to break
                     the performance of your business.
                  </p>
               </div>

               <div className="clientSay-con">
                  <div className="client-head">
                     <p>TESTIMONIALS</p>
                     <h1>What Our Clients Say</h1>
                  </div>

                  <div className="client-card-con">
                     <div className="client-card-left">
                        <img src={comaPng} alt="" />
                        <p>
                           DigiCove's IT services have been exceptional! Their proactive
                           approach, personalized service, and commitment to cybersecurity
                           have been a game-changer for our business. Their knowledgeable
                           team has helped us optimize our IT infrastructure.
                        </p>
                        <div className="left-client-name">
                           <div></div>
                           <h5>Jackson Matthews</h5>
                           <h6>CEO of TechSolutions Pro</h6>
                        </div>
                     </div>
                     <div className="client-card-right">
                        <img src={comaPng2} alt="" />
                        <p>
                           DigiCove's IT services have been exceptional! Their proactive
                           approach, personalized service, and commitment to cybersecurity
                           have been a game-changer for our business. Their knowledgeable
                           team has helped us optimize our IT infrastructure.
                        </p>
                        <div className="right-client-name">
                           <div></div>
                           <h5>Jackson Matthews</h5>
                           <h6>CEO of TechSolutions Pro</h6>
                        </div>
                     </div>
                  </div>

                  <div className="pagination-2">
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ServicesDetails;