import React from "react";

function MiniCards({
    title,
    svg1,
    title1,
    text1,
    svg2,
    title2,
    text2,
    svg3,
    title3,
    text3,
    svg4,
    title4, 
    text4
}) {
    return (
        <>
            <h2 className="text-center font-bold text-3xl mt-4">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 md:gap-y-16 cursor-default">

              <div className="bg-white shadow-lg rounded p-4 flex items-center flex-col justify-center ">
              {svg1}
              <h4 className="font-bold text-xl">{title1}</h4>
              <span className="text-center">{text1}</span>
              </div>

              <div className="bg-white shadow-lg rounded p-4 flex items-center flex-col justify-center ">
                {svg2}
              <h4 className="font-bold text-xl">{title2}</h4>
              <span className="text-center">{text2}</span>
              </div>

              <div className="bg-white shadow-md rounded p-4 flex items-center flex-col justify-center ">
                {svg3}
                <h4 className="font-bold text-xl">{title3}</h4>
                <span className="text-center">{text3}</span>
              </div>

              <div className="bg-white shadow-lg rounded p-4 flex items-center flex-col justify-center">
                {svg4}
              <h4 className="font-bold text-xl">{title4}</h4>
              <span className="text-center">{text4}</span>
              </div>
            </div>
        </>
    )
}

export { MiniCards }