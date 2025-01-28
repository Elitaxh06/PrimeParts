import React from "react";
import "@github/relative-time-element"

function DateTime({prop}) {
    return (
        <p>
            <relative-time 
              lang="es" 
              tense="future"
              format={prop}
              id="dynamic2"
              datetime="2025-03-10T00:00:00.000Z"
              // title="Mar 10, 2024, 1:00 AM CST"
            >
            Jan 28, 2025
            </relative-time>
        </p>
    )
}

export { DateTime}