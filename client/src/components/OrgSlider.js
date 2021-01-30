import React, { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import OrgCard from './OrgCard'

const OrgSlider = ({setToggleDetails}) => {
    function SampleNextArrow(props) {
        const { style, onClick } = props;
        return (            
        <span className="flex items-center justify-center absolute top-0 bottom-0 -right-10 tablet:-right-20 3quart:-right-30 full:-right-40 z-10">
            <BiChevronRight className="m-1 my-auto h-10 w-10 tablet:h-30 tablet:w-30 full:h-40 full:w-40 text-gray-300 transform hover:scale-110 cursor-pointer" style={{ ...style, color: "black"}} onClick={onClick}/>
        </span>
        );
    }

    function SamplePrevArrow(props) {
        const { style, onClick } = props;
        return (
            <span className="flex items-center justify-center absolute top-0 bottom-0 -left-10 tablet:-left-20 3quart:-left-30 full:-left-40 z-10">
                <BiChevronLeft className="m-1 my-auto h-10 w-10 tablet:h-30 tablet:w-30 full:h-40 full:w-40 text-gray-300 transform hover:scale-110 cursor-pointer" style={{ ...style, color: "black"}} onClick={onClick}/>
            </span>
        );
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow/>,
        responsive: [
            {
                breakpoint: 1850,
                settings: {
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    prevArrow: <SamplePrevArrow/>,
                    nextArrow: <SampleNextArrow/>,
            }
            },
            {
                breakpoint: 1850,
                settings: {
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    prevArrow: <SamplePrevArrow/>,
                    nextArrow: <SampleNextArrow/>,
            }
            },
            {
                breakpoint: 1280,
                settings: {
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    prevArrow: <SamplePrevArrow/>,
                    nextArrow: <SampleNextArrow/>,
            }
            },
            {
                breakpoint: 1024,
                settings: {
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    prevArrow: <SamplePrevArrow/>,
                    nextArrow: <SampleNextArrow/>,
            }
            },
            {
                breakpoint: 769,
                settings: {
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    prevArrow: <SamplePrevArrow/>,
                    nextArrow: <SampleNextArrow/>,
            }
            },
            {
                breakpoint: 420,
                settings: {
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    prevArrow: <SamplePrevArrow/>,
                    nextArrow: <SampleNextArrow/>,
            }
            },
            {
                breakpoint: 400,
                settings: {
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    prevArrow: <SamplePrevArrow/>,
                    nextArrow: <SampleNextArrow/>,
            }
            },
        ]
    };

    return (
        <React.Fragment>
            <section className="w-auto flex flex-col items-center z-10">
                <article>
                    <div className="flex justify-center -mb-2">
                        <span className="w-headerMobile phone1:w-headerMobile1 phone2:w-headerQuarter smallDesktop:w-headerPhone sm:w-headerTablet tablet:w-headerHalf 3quart:w-header3Quart full:w-slider90 screen:w-header text-xl sm:text-3xl 3quart:text-4xl full:text-5xl">
                            Priority
                        </span>
                    </div>
                    <div className="w-sliderMobile phone1:w-sliderMobile1 phone2:w-sliderQuarter smallDesktop:w-sliderPhone sm:w-sliderTablet tablet:w-sliderHalf 3quart:w-slider3Quart full:w-slider90 screen:w-slider mx-auto">
                        <Slider className="sm:p-2 z-10" {...settings}>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                        </Slider>
                    </div>
                </article>
            </section>
        </React.Fragment>
    );
}

export default OrgSlider;