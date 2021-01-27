import React from 'react';
import { OrgCardContext } from '../App';

const OrgCard = () => {
    return (
        <OrgCardContext.Consumer>
            {showDetails => {
                return (
                    <section className="max-w-card p-1 flex justify-center items-center cursor-pointer">
                        <div className="w-full bg-gray-100 m-1 half:m-1.5 full:m-2 shadow rounded relative transform transition-transform hover:scale-105" style={{paddingTop: "75%"}} onClick={() => {showDetails(true)}}>
                            <span className="absolute bottom-0 h-25p w-full bg-gray-300"></span>
                        </div>
                    </section>
                    // <section className="p-1 flex justify-center items-center cursor-pointer">
                    //     <div className="h-18 w-34 sm:h-28 sm:w-44 half:h-42 half:w-66 full:h-56 full:w-88 bg-gray-100 m-1 half:m-1.5 full:m-2 shadow rounded relative transform transition-transform hover:scale-105" onClick={() => {showDetails(true)}}>
                    //         <span className="absolute bottom-0 h-25p w-full bg-gray-300"></span>
                    //     </div>
                    // </section>
                );
            }}
        </OrgCardContext.Consumer>
    );
}

export default OrgCard;