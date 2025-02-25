import  React, { useState } from "react"
import "./FormInput.css"
React;
const FormInput =(props) =>{
    const [focused,setFocused] = useState(false);
    const { label, errorMessage,onChange, id , ...inputProps} = props;
    const handleFocus =(e)=>{
        setFocused(true);
    };

    return(
        <>

        <div className="formInput dark:text-white">
            <label htmlFor="formInput" className="font-bold">{label}</label>
            <input {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={()=>inputProps.name === "confirmPassword" && setFocused(true)}
            focused={focused.toString()}  />
            <span className="text-red-400">{errorMessage}</span>
        </div>

        </>
    )
}
export default FormInput;