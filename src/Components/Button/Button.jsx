import React from "react";
import { useNavigate } from "react-router";

export function Button ({text,onClick, url}){
    const navigate = useNavigate()
    const handleClick = () => {
        if(onClick){
            onClick()
        }
        if(url){
            if(url === "-1"){
                navigate(-1)
            }else{
                navigate(url)
            }
        }
    }
    
    return(
        <button 
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-3">
            {text}
        </button>
    )
}