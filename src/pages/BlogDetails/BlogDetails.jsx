import s from "./blogDetails.module.css";
import blogSingleBanner from "../../assets/blog/blogSingleBanner.png";
import arrowFill from "../../assets/serviceDetails/icon.png";
import singleblog2 from "../../assets/caseStudy/singleCasePic2.png";
import playImg from "../../assets/serviceDetails/Play Button.png";
import authorImage from "../../assets/blog/authorImage.png";
import commenterImg from "../../assets/blog/commenterPic.png";
import { FaArrowRightLong, FaDribbble, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import PageBanner from "../../components/shared/PageBanner/PageBanner";

const BlogDetails = () => {
   return (
      <>
         {/* page banner */}
         <PageBanner title="The Benefits of Cloud Computing for Small Businesses" route="Single Blog" pb="120px" />
         {/* --blog section started-- */}
         <div className={s.singleBlogContainer}>
            <img className={s.singleBlogBannerImg} src={blogSingleBanner} alt="" />
            <div className={s.blogInfo}>
               <p className={s.bdate}>NOVEMBER 11, 20222</p>
               <p className={s.bauthor}>
                  <span>By</span>Tyson Fritz{" "}
               </p>
            </div>
            {/* Blog Content Container */}
            <div className={s.contentContainer}>
               {/* Text Container */}
               <div className={s.contentBox1}>
                  <h1>Search Engine Optimization For Streamline Solutions</h1>
                  <p>
                     Our business consulting programs helps to break the performance of
                     your business down into customers and product groups so you know
                     exactly which customers or product groups are working and which
                     ones aren’t you can make the changes needed to get the best
                     results out of your business. Our business consulting programs
                     helps to break the performance of your business down into
                     customers and product groups so you know exactly which customers
                     or product groups are working and which ones aren’t you can make
                     the changes needed to get the best results out of your business.
                  </p>
                  <h2>
                     Over the last 35 Years we made an impact that is strong & we have
                     long way to go.{" "}
                  </h2>
                  <p>
                     Our business consulting programs helps to break the performance of
                     your business down into customers and product groups so you know
                     exactly which customers or product groups are working and which
                     ones aren’t you can make the changes needed to get the best
                     results out of your business. Our business consulting programs
                     helps to break the performance of your business down into
                     customers and product groups so you know exactly which customers
                     or product groups are working and which ones aren’t you can make
                     the changes needed to get the best results out of your business.
                  </p>
               </div>

               {/* company values */}
               <div className={s.headerTitle}>
                  <h2>DigiCove Values</h2>
                  <p> At Digicove our culture comes to life through three core values:</p>
                  <span>
                     <img src={arrowFill} alt="" />  We seize opportunities to innovate and grow
                  </span>
                  <span>
                     <img src={arrowFill} alt="" /> We are one firm with a shared sense of purpose
                  </span>
                  <span>
                     <img src={arrowFill} alt="" /> We care about each other and the world around us
                  </span>
               </div>

               {/* blog image and content */}
               <div className={s.contentBox2}>
                  <div className={s.subImageSection}>
                     <div>
                        <img src={singleblog2} alt="" />
                     </div>
                     <div>
                        <img src={singleblog2} alt="" />
                     </div>
                  </div>
                  <p>
                     Our business consulting programs helps to break the performance of
                     your business down into customers and product groups so you know
                     exactly which customers or product groups are working and which
                     ones aren’t you can make the changes needed to get the best
                     results out of your business. Our business consulting programs
                     helps to break the performance of your business down into
                     customers and product groups so you know exactly which customers
                     or product groups
                  </p>
                  <p>
                     Our business consulting programs helps to break the performance of
                     your business down into customers and product groups so you know
                     exactly which customers or product groups are working and which
                     ones aren’t you can make the changes needed to get the best
                     results out of your business.{" "}
                  </p>
               </div>

               {/* Blog Video */}
               <div className={s.videoContainer}>
                  <img src={playImg} alt="" />
               </div>

               {/* Text Secton */}
               <div className={s.contentBox3}>
                  <p>
                     Our business consulting programs helps to break the performance of
                     your business down into customers and product groups so you know
                     exactly which customers or product groups are working and which
                     ones aren’t you can make the changes needed to get the best
                     results out of your business. Our business consulting programs
                     helps to break the performance of your business down into
                     customers and product groups so you know exactly which customers
                     or product groups
                  </p>
                  <p>
                     Our business consulting programs helps to break the performance of
                     your business down into customers and product groups so you know
                     exactly which customers or product groups are working and which
                     ones aren’t you can make the changes needed to get the best
                     results out of your business.{" "}
                  </p>
               </div>

               {/* Socical share container */}
               <div className={s.shareContainer}>
                  <h5>Share:</h5>
                  <div className={s.socialIcon}>
                     <a href="#" className={s.icon1}> FACEBOOK </a>
                     <a href="#" className={s.icon2}> TWITTER </a>
                     <a href="#" className={s.icon3}> PINTEREST </a>
                     <a href="#" className={s.icon4}> GOOGLE+ </a>
                     <a href="#" className={s.icon5}> INSTAGRAM </a>
                  </div>
               </div>

               {/* Author Information */}
               <div className={s.authorContainer}>
                  <div className={s.authorImage}>
                     <img src={authorImage} alt="" />
                  </div>
                  <div className={s.authorContent}>
                     <h3>Tyson Fritz</h3>
                     <p>
                        By thinking on behalf of our clients every day we anticipate
                        what they want provide what they need & build lasting
                        relationships.
                     </p>
                     <div className={s.authorSocial}>
                        <a href="#"> <FaFacebookF /> </a>
                        <a href="#"> <FaTwitter /> </a>
                        <a href="#"> <FaDribbble /> </a>
                        <a href="#"> <ImInstagram /> </a>
                     </div>
                  </div>
               </div>
               {/* Comment Section */}
               <div className={s.commentContainer}>
                  <div className={s.headerTitle}>
                     <h2>Comments</h2>
                  </div>
                  <div className={s.allComments}>
                     <div className={s.commentsDiv1}>
                        <div className={s.commenterImg}>
                           <img src={commenterImg} alt="" />
                        </div>
                        <div className={s.comment}>
                           <div className={s.commenter}>
                              <h3>Mellisa Doe</h3>
                              <h6>OCTOBER 11, 2023</h6>
                           </div>
                           <p>
                              As the world continues to fight COVID-19 some property
                              owners are searching for way they can improve the security
                              of their buildings.
                           </p>
                           <button>REPLY</button>
                        </div>
                     </div>
                     <div className={s.commentsDiv2}>
                        <div className={s.commenterImg}>
                           <img src={commenterImg} alt="" />
                        </div>
                        <div className={s.comment}>
                           <div className={s.commenter}>
                              <h3>Tyson Fritz</h3>
                              <h6>OCTOBER 11, 2023</h6>
                           </div>
                           <p>
                              By automating your doors this removes need for people
                              touching handles or surfaces. Both of the above options.
                           </p>
                           <button>REPLY</button>
                        </div>
                     </div>
                     <div className={s.commentsDiv1}>
                        <div className={s.commenterImg}>
                           <img src={commenterImg} alt="" />
                        </div>
                        <div className={s.comment}>
                           <div className={s.commenter}>
                              <h3>Mellisa Doe</h3>
                              <h6>OCTOBER 11, 2023</h6>
                           </div>
                           <p>
                              As the world continues to fight COVID-19 some property
                              owners are searching for way they can improve the security
                              of their buildings.
                           </p>
                           <button>REPLY</button>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Comment Form */}
               <div className={s.commentForm}>
                  <div className={s.headerTitle}>
                     <h2>Make a Comment</h2>
                     <p> Your email adress will not be published. Required field are marked *</p>
                  </div>
                  <form>
                     <div className={s.commentFields}>
                        <input type="text" name="" id="" placeholder="Name*" />
                        <input type="email" name="" id="" placeholder="E-mail Address*" />
                        <textarea name="" id="" cols="" rows="" placeholder="Text*" ></textarea>
                     </div>
                     <button type="submit" className={s.submitBtn}>
                        Make Comment  <FaArrowRightLong className="dynamicBtnIcon" />
                     </button>
                     {/* <DynamicButton text="Make Comment" gradient="" padding="20px 40px" /> */}
                  </form>
               </div>
            </div>
         </div>
      </>
   );
};

export default BlogDetails;