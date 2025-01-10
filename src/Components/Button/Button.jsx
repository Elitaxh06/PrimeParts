import React from "react";
import { useNavigate } from "react-router";

export function Button ({text,onClick, url}){
    const navigate = useNavigate()
    const handleClick = () => {
        if(onClick){
            onClick()
        }
        if(url){
            navigate(url)
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