import React from "react";
function ButtonMoreInfo({text}) {
  return (
    <div className="text-center mt-2">     
        <button className="bg-slate-100 text-black border rounded-lg border-black w-40 hover:bg-slate-200">{text}</button>
    </div>
  );
}        

export {ButtonMoreInfo};