import React, { useEffect, useState } from 'react';
import OrgSlider from '../components/OrgSlider';
import mainIMG from '../images/volunteer.png'

const Home = ({setToggleDetails, toggleDetails}) => {

    useEffect(() => {
        {document.body.style.overflowX = "hidden"};
        {document.body.style.overflowY = "auto"};
    },[])

    useEffect(() => {
        if (toggleDetails) {
            {document.body.style.overflow = "hidden"}
        } else {
            {document.body.style.overflowY = "auto"}
        }
    }, [toggleDetails])

    return (
        <main className="h-full w-screen bg-gray-200 z-30">
            <section className="h-auto w-auto pt-16 sm:pt-20 lg:pt-0 mb-2 flex justify-center items-center font-medium relative">
                <img src={mainIMG}/>
                <span className="absolute text-3xl md:text-5xl lg:text-7xl text-white">
                    Help a cause today.
                </span>
                <p className="text-xs md:text-lg absolute bottom-1 right-1 sm:bottom-5 sm:right-5 text-navigation text-white">Photo by Joel Muniz</p>
            </section>
            <section>
                <OrgSlider setToggleDetails={setToggleDetails}/>
                <OrgSlider setToggleDetails={setToggleDetails}/>
                <OrgSlider setToggleDetails={setToggleDetails}/>
                <OrgSlider setToggleDetails={setToggleDetails}/>
                <OrgSlider setToggleDetails={setToggleDetails}/>
                <OrgSlider setToggleDetails={setToggleDetails}/>
                <OrgSlider setToggleDetails={setToggleDetails}/>
                <OrgSlider setToggleDetails={setToggleDetails}/>
                <OrgSlider setToggleDetails={setToggleDetails}/>
                <OrgSlider setToggleDetails={setToggleDetails}/>
            </section>
        </main>
    );
}

export default Home;