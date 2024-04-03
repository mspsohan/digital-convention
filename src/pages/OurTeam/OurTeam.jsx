import PageBanner from "../../components/shared/PageBanner/PageBanner";
import { FaLinkedinIn, FaTwitter, FaPlus } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import s from "./ourTeam.module.css";

const teamMembers = [
   {
      name: "Sohan Perves",
      description: "Hello World",
      socialIcons: [
         <FaFacebookF key="fb" />,
         <FaLinkedinIn key="li" />,
         <FaTwitter key="tw" />,
      ],
   },
   {
      name: "Another Team Member",
      description: "Hello World",
      socialIcons: [
         <FaFacebookF key="fb" />,
         <FaLinkedinIn key="li" />,
         <FaTwitter key="tw" />,
      ],
   },
   {
      name: "Another Team Member",
      description: "Hello World",
      socialIcons: [
         <FaFacebookF key="fb" />,
         <FaLinkedinIn key="li" />,
         <FaTwitter key="tw" />,
      ],
   },
   {
      name: "Sohan Perves",
      description: "Hello World",
      socialIcons: [
         <FaFacebookF key="fb" />,
         <FaLinkedinIn key="li" />,
         <FaTwitter key="tw" />,
      ],
   },
   {
      name: "Another Team Member",
      description: "Hello World",
      socialIcons: [
         <FaFacebookF key="fb" />,
         <FaLinkedinIn key="li" />,
         <FaTwitter key="tw" />,
      ],
   },
   {
      name: "Another Team Member",
      description: "Hello World",
      socialIcons: [
         <FaFacebookF key="fb" />,
         <FaLinkedinIn key="li" />,
         <FaTwitter key="tw" />,
      ],
   },
   {
      name: "Sohan Perves",
      description: "Hello World",
      socialIcons: [
         <FaFacebookF key="fb" />,
         <FaLinkedinIn key="li" />,
         <FaTwitter key="tw" />,
      ],
   },
   {
      name: "Another Team Member",
      description: "Hello World",
      socialIcons: [
         <FaFacebookF key="fb" />,
         <FaLinkedinIn key="li" />,
         <FaTwitter key="tw" />,
      ],
   },
   {
      name: "Another Team Member",
      description: "Hello World",
      socialIcons: [
         <FaFacebookF key="fb" />,
         <FaLinkedinIn key="li" />,
         <FaTwitter key="tw" />,
      ],
   },
   {
      name: "Sohan Perves",
      description: "Hello World",
      socialIcons: [
         <FaFacebookF key="fb" />,
         <FaLinkedinIn key="li" />,
         <FaTwitter key="tw" />,
      ],
   },
   {
      name: "Another Team Member",
      description: "Hello World",
      socialIcons: [
         <FaFacebookF key="fb" />,
         <FaLinkedinIn key="li" />,
         <FaTwitter key="tw" />,
      ],
   },
   {
      name: "Another Team Member",
      description: "Hello World",
      socialIcons: [
         <FaFacebookF key="fb" />,
         <FaLinkedinIn key="li" />,
         <FaTwitter key="tw" />,
      ],
   },

   // Add more team members as needed
];

const OurTeam = () => {
   return (
      <>
         <div>
            <PageBanner title="Our Team" route="Our Team" pb="145px" />

            <div className={s.aOurTeam}>
               <div className={s.headerTitle}>
                  <button>OUR TEAM</button>
                  <h3>Meet Our Team</h3>
               </div>

               {/* ------------ */}
               <div className={s.cardContainer}>
                  {teamMembers.map((member, index) => (
                     <div className={s.card} key={index} style={{ backgroundImage: `url('../../../../media/team/teamCardBg.png')`, }} >
                        <div className={s.cardContent}>
                           <button className={s.btn1}>
                              <FaPlus />
                           </button>
                           <h4>{member.name}</h4>
                           <p>{member.description}</p>
                           <div className={s.socialIcon}>{member.socialIcons}</div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
};

export default OurTeam;