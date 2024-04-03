import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import s from "./DynamicButton.module.css"
const DynamicButton = ({ text, gradient, textColor, onClick, route, padding }) => {
   const buttonStyle = {
      background: gradient || "linear-gradient(to right, #ff7e5f, #feb47b)",
      color: textColor || "white",
      padding: padding || "15px 30px",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "semibold",
      margin: "5px",
   };
   return (
      <>
         <Link className={s.dynamicBtn} to={route}>
            <button style={buttonStyle} onClick={onClick}>
               {text}

               <FaArrowRightLong className={s.dynamicBtnIcon} />
            </button>
         </Link>
      </>
   );
};

export default DynamicButton;