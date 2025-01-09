import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar"
import { Welcome } from "./Welcome"
import { Pluses } from "./Pluses"
import { FeaturedProducts } from "./FeaturedProducts";
import { CallToAction } from "./CallToAction";
function Home () {
    return(
        <main>
            <Navbar />
            <Welcome />
            <Pluses />
            <FeaturedProducts />
            <CallToAction />
        </main>
    )
}

export { Home }