import React from 'react'
import AboutUsComponent from "../Components/AboutUsComponents/AboutUsComponent"
import ContactComponent from "../Components/ContactComponents/ContactComponent"
import MapComponent from "../Components/MapComponents/MapComponents"
import NavBar from "../Components/NavBar/NavBar"

function AboutUs() {
    return(
        <div>
            <NavBar />
            <AboutUsComponent />
            <ContactComponent />
            <MapComponent />
        </div>
    )
}

export default AboutUs