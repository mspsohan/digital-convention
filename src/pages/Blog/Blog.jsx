import { MdKeyboardArrowRight } from "react-icons/md";
import "./blog.css";
import PageBanner from "../../components/shared/PageBanner/PageBanner";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {

   useEffect(() => {
      AOS.init();
   }, []);

   const blogCards = [
      {
         blogImg: "https://i.ibb.co/CK9Kbmy/image.png",
         title: "Johanna Davis",
         header: "The Benefits of Cloud Computing for Small Businesses",
      },
      {
         blogImg: "https://i.ibb.co/CK9Kbmy/image.png",
         title: "Sara Kendrick",
         header: "Top Cybersecurity Threats and How to Protect Your Business",
      },
      {
         blogImg: "https://i.ibb.co/CK9Kbmy/image.png",
         title: "Tyson Fritz",
         header: "How Data Backup & Recovery Can Save Your Business",
      },
      {
         blogImg: "https://i.ibb.co/CK9Kbmy/image.png",
         title: "Johanna Davis",
         header: "The Benefits of Cloud Computing for Small Businesses",
      },
      {
         blogImg: "https://i.ibb.co/CK9Kbmy/image.png",
         title: "Sara Kendrick",
         header: "Top Cybersecurity Threats and How to Protect Your Business",
      },
      {
         blogImg: "https://i.ibb.co/CK9Kbmy/image.png",
         title: "Tyson Fritz",
         header: "How Data Backup & Recovery Can Save Your Business",
      },
      {
         blogImg: "https://i.ibb.co/CK9Kbmy/image.png",
         title: "Johanna Davis",
         header: "The Benefits of Cloud Computing for Small Businesses",
      },
      {
         blogImg: "https://i.ibb.co/CK9Kbmy/image.png",
         title: "Sara Kendrick",
         header: "Top Cybersecurity Threats and How to Protect Your Business",
      },
      {
         blogImg: "https://i.ibb.co/CK9Kbmy/image.png",
         title: "Tyson Fritz",
         header: "How Data Backup & Recovery Can Save Your Business",
      },
   ];
   return (
      <>
         <div>
            <PageBanner route="Blogs" title="Blogs" pb="145px" />
            {/* blog section  */}
            <div className="blogMainDiv">
               {blogCards.map((blogInfo, index) => (
                  <div data-aos="fade-up" key={index} className="blogCard">
                     <img
                        className="blogCardImg"
                        src={blogInfo.blogImg}
                        alt="blogImage"
                     />
                     <div className="blogCardInfo">
                        <p className="blogCardTitle">
                           By <span> {blogInfo.title}</span>
                        </p>
                        <p className="blogCardBigTitle">{blogInfo.header}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export default Blog;