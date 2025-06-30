import { Camera } from "lucide-react";
const Button=({children,onClickHandler,colorVariant="primary",disabled=false})=>{
    const baseStyle='px-4 py-2 rounded-lg font-medium'
    const variants={
        "primary":"bg-blue-600 text-white hover:bg-blue-700",
        "secondary":"bg-gray-300 text-gray-800 hover:bg-gray-400 ",
        "success":"bg-green-500 text-green-900 hover:text-white hover:bg-green-700 ",
        "danger":"bg-red-600 text-white hover:bg-red-700"
    }
    return(
        <button 
            onClick={onClickHandler}
            className={`${baseStyle} ${variants[colorVariant]}`}>
            
            {children}
        </button>

    );
}
export default Button;