import React from 'react';
import OrgCard from '../components/OrgCard';
import OrgbyCategoryNav from '../components/OrgbyCategoryNav';

const OrgbyCategory = ({category, toggleCategories, setToggleCategories, setShowOrgbyCategory, mobile}) => {
    return (
        <React.Fragment>
            <OrgbyCategoryNav category={category} toggleCategories={toggleCategories} setToggleCategories={setToggleCategories} setShowOrgbyCategory={setShowOrgbyCategory} mobile={mobile}/>
            <section className="h-screen w-screen fixed z-30 bg-gray-300 overscroll-auto pt-20 overflow-auto">
                <div className="h-screen w-full grid md:grid-cols-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-auto bg-gray-300 p-2">
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