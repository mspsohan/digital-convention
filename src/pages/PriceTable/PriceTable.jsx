import "./priceTable.css";
import priceCardBgImg1 from "../../assets/pricingTable/pricingCard1.png";
import priceCardBgImg2 from "../../assets/pricingTable/pricingCard2.png";
import priceCardBgImg3 from "../../assets/pricingTable/pricingCard3.png";
import priceCardIcon1 from "../../assets/pricingTable/featursIcon1.png";
import priceCardIcon2 from "../../assets/pricingTable/featursIcon2.png";
import priceCardIcon3 from "../../assets/pricingTable/featursIcon3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import AOSanimation from "../../components/shared/AOSanimation/AOSanimation";
import PageBanner from "../../components/shared/PageBanner/PageBanner";

const PriceTable = () => {
   const pricingCardsData = [
      {
         packageImg: priceCardBgImg1,
         animationName: "fade-right",

         name: "BASIC",
         icon: priceCardIcon1,
         price: 999,
         features: [
            "Search Engine Optimization",
            "Social Media Management",
            "Email Marketing",
            "Monthly Reporting",
            "PPC Advertising",
         ],
      },
      {
         packageImg: priceCardBgImg2,
         animationName: "fade-up",
         name: "ADVANCED",
         icon: priceCardIcon2,
         price: 1999,
         features: [
            "PPC Advertising",
            "Social Media Management",
            "Email Marketing",
            "Monthly Reporting",
            "Search Engine Optimization",
         ],
      },
      {
         packageImg: priceCardBgImg3,
         animationName: "fade-left",
         name: "PREMIUM",
         icon: priceCardIcon3,
         price: 2999,
         features: [
            "Email Marketing",
            "Monthly Reporting",
            "Web Design & Development",
            "Search Engine Optimization",
            "Social Media Management",
         ],
      },
   ];

   return (
      <>
         <div>
            <PageBanner title="Pricing Table" route="Price Table" pb="145px" />

            {/* ----- */}
            <div className="faqGradientBtnMain">
               {" "}
               <p className="faqGradientBtn">PRICE TABLES</p>
            </div>
            <p className="faqTitleTwo">Our Pricing</p>

            {/* ------ */}

            <div className="threePricingCardsMainDiv">
               {pricingCardsData.map((card, index) => (
                  <AOSanimation
                     animationType={card.animationName}
                     duration={1000}
                     delay={300}
                  >
                     <div
                        key={index}
                        className={`priceCardMain priceCardMain${index + 1} card`}
                     >
                        <img
                           className="priceCardBgImg"
                           src={card.packageImg}
                           alt={`Background ${card.name}`}
                        />
                        <p className="priceCardPackagesName">{card.name}</p>
                        <p className="priceCardPackagesPriceMain">
                           <span className="priceCardPackagesPriceIcon">$</span>{" "}
                           {card.price}
                           <samp className="priceCardPackagesMonth">/month</samp>
                        </p>

                        <div className="packageFeaturesMain">
                           {card.features.map((feature, index) => (
                              <div key={index} className="packageFeature">
                                 <img
                                    className="packageFeatureIcon"
                                    src={card.icon}
                                    alt={`Icon ${feature}`}
                                 />
                                 <p className="packageFeatureText">{feature}</p>
                              </div>
                           ))}

                           <button className={`pricingCardBtn pricingCardBtn${index + 1}`}>
                              <div>
                                 Choose this Package
                                 <FaArrowRightLong className="dynamicBtnIcon" />
                              </div>
                           </button>
                        </div>
                     </div>
                  </AOSanimation>
               ))}
            </div>
         </div>
      </>
   );
};

export default PriceTable;