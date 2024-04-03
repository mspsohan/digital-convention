import "./notFound.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import PageBanner from "../../components/shared/PageBanner/PageBanner";

const NotFound = () => {
   return (
      <>
         <PageBanner title="404 Error" route="404" pb="145px" />
         <div>
            {/* ----------- */}
            <div className="notFound404Main">
               <p className="notFound404">404</p>
               <p className="notFoundSecondTitle">PAGE NOT FOUND</p>\
               <div className="notFoundSecondTextMain">
                  <p className="notFoundSecondText">
                     Oops! The page you are looking for does not exist. It might have
                     been moved or deleted.
                  </p>
               </div>
               <div className="searchBoxMain">
                  <p className="searchText">Search Here...</p>
                  <div>
                     <IoSearchOutline className="searchIcon" />
                  </div>
               </div>
               <div className="goBackToHomeBtnMain">
                  <Link className="goBackToHomeBtn">Go Back Home</Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default NotFound;