import React from "react";
import { NavLink } from "react-router";
function ButtonMoreInfo({text}) {
  return (
    <div className="text-center">     
        <button className="bg-slate-100 text-black border rounded-lg border-slate-300 w-40 hover:bg-slate-200">{text}</button>
    </div>
  );
}        

export {ButtonMoreInfo};