import React from 'react';
import OrgCard from '../components/OrgCard';
import OrgbyCategoryNav from '../components/OrgbyCategoryNav';

const OrgbyCategory = ({category, toggleCategories, setToggleCategories, setShowOrgbyCategory, mobile}) => {
    return (
        <React.Fragment>
            <OrgbyCategoryNav category={category} toggleCategories={toggleCategories} setToggleCategories={setToggleCategories} setShowOrgbyCategory={setShowOrgbyCategory} mobile={mobile}/>
            <section className="h-screen w-screen fixed z-30 bg-gray-300 overscroll-auto pt-16 overflow-auto">
                <div className="h-screen w-full grid grid-cols-2 phone2:grid-cols-3 tablet:grid-cols-4 half:grid-cols-5 3quart:grid-cols-4 full:grid-cols-5 auto-rows-auto bg-gray-300 p-2">
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                    <OrgCard/>
                </div>
            </section>
        </React.Fragment>
    );
}

export default OrgbyCategory;