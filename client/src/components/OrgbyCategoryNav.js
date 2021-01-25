import React from 'react';
import { BiChevronDown, BiChevronLeft } from "react-icons/bi";

const OrgbyCategoryNav = ({toggleCategories, setToggleCategories, category, setShowOrgbyCategory, mobile}) => {
    return (
        <React.Fragment>
            {mobile ? <div className="h-15 w-screen bg-black text-gray-50 flex display-center items-center px-2 z-40 fixed">
                <BiChevronLeft className="h-12 w-12 cursor-pointer" onClick={() => {setShowOrgbyCategory(false)}}/>
                <span className="flex items-center cursor-pointer" onClick={() => {setToggleCategories(!toggleCategories)}}>
                    <h1 className="text-2xl underline">
                        {category}
                    </h1>
                </span>
            </div> : <div className="h-20 w-screen bg-black text-gray-50 flex display-center items-center px-2 z-40 fixed">
                <BiChevronLeft className="h-15 w-16 cursor-pointer" onClick={() => {setShowOrgbyCategory(false)}}/>
                <span className="flex items-center cursor-pointer" onClick={() => {setToggleCategories(!toggleCategories)}}>
                    <h1 className="text-3xl">
                        {category}
                    </h1>
                    <BiChevronDown className="h-10 w-10"/>
                </span>
            </div>}
        </React.Fragment>
    );
}

export default OrgbyCategoryNav;