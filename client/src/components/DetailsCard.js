import React from 'react';
import { BiX } from "react-icons/bi";

const DetailsCard = ({setToggleDetails, toggleDetails, mobile}) => {
    return (
        <React.Fragment>
            {mobile ? <section className={toggleDetails ? "h-screen bg-gray-300 fixed z-50 transform transition-transform" : 
        "h-screen bg-gray-300 fixed z-50 transform -translate-x-full transition-transform"}>
            <BiX className="text-white h-14 w-14 absolute top-0 right-0 cursor-pointer z-30" onClick={() => {setToggleDetails(false)}}/>
            <div className="h-28 sm:h-40 bg-black top-0 relative px-5">
                <h1 className="text-3xl sm:text-5xl text-white mb-2.5 absolute bottom-0">Org Name</h1>
            </div>
            <article className="px-1 grid grid-cols-1 divide-y divide-black">
                <div className="p-5 pt-5">
                    <span className="flex mb-2.5">
                        <h2 className="text-lg sm:text-2xl mr-1 font-bold">Categories:</h2>
                        <h2 className="text-lg sm:text-2xl">Category, Category</h2>
                    </span>
                    <h2 className="text-lg sm:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit optio unde debitis eum consequatur amet error, dolorum minima possimus eveniet at quas vel tenetur officiis iure id labore. Assumenda!</h2>
                </div>
                <div className="p-5 pt-5">
                    <h1 className="text-2xl sm:text-3xl mb-2.5">Contact and find them here:</h1>
                    <p className="text-md md:text-lg">URL</p>
                </div>
            </article>
        </section> : <section className="flex justify-center items-center fixed z-50">
                <div className="h-detailsHeight w-detailsWidth rounded-md bg-gray-300 absolute">
                    <BiX className="text-white h-20 w-20 absolute top-0 right-0 cursor-pointer z-30" onClick={() => {setToggleDetails(false)}}/>
                    <div className="h-40 bg-black bg-opacity-90 top-0 relative px-5">
                        <h1 className="text-5xl text-white mb-2.5 absolute bottom-0">Org Name</h1>
                    </div>
                    <article className="h-detailsInHeight px-1 grid grid-cols-2 divide-x divide-gray-900 divide-opacity-90 p-5">
                        <div className="p-5 pt-5">
                            <span className="flex mb-2.5">
                                <h2 className="text-2xl mr-1 font-bold">Categories:</h2>
                                <h2 className="text-2xl">Category, Category</h2>
                            </span>
                            <h2 className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit optio unde debitis eum consequatur amet error, dolorum minima possimus eveniet at quas vel tenetur officiis iure id labore. Assumenda!</h2>
                        </div>
                        <div className="p-5 pt-5">
                            <h1 className="text-3xl mb-2.5">Contact and find them here:</h1>
                            <p className="text-lg">URL</p>
                        </div>
                    </article>
                </div>
                <div className="h-screen w-screen bg-black bg-opacity-70 flex justify-center items-center" onClick={() => {setToggleDetails(false)}}>
                </div>
            </section>}
        </React.Fragment>
    );
}

export default DetailsCard;