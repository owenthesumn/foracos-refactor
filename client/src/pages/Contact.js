import React, { useState, useEffect } from 'react';

const Contact = () => {
    const [option, setOption] = useState(false);

    useEffect(() => {
        {document.body.style.overflow = "hidden"}
    }, [])

    const Suggest = () => {
        return (
            <React.Fragment>
                <div className="text-2xl sm:text-3xl half:text-4xl animate-appear">Send us an Organization to add.</div>
                <div className="h-66 w-80 sm:h-96 sm:w-112 half:h-112 half:w-192 p-5 grid grid-cols-2 grid-rows-6 gap-3 relative">
                    <input type="text" className="rounded p-2 animate-appear1 col-span-1" placeholder="Name"/>
                    <input type="email" className="rounded p-2 animate-appear2 col-span-1" placeholder="Email"/>
                    <input type="text" className="rounded p-2 animate-appear3 col-span-2" placeholder="Organization Name"/>
                    <textarea type="text" className="rounded p-2 animate-appear4 col-span-2 row-span-3" placeholder="Description"/>
                    <button className="h-8 w-16 sm:h-10 sm:w-20 half:h-12 half:w-28 absolute bottom-7 half:bottom-10 right-5 bg-white rounded text-gray-400 animate-appear5">Send</button>
                </div>
            </React.Fragment>
        );
    }

    const Comment = () => {
        return (
            <React.Fragment>
                <div className="text-2xl sm:text-3xl half:text-4xl animate-appear">Tell us how we can be better.</div>
                <div className="h-66 w-80 sm:h-96 sm:w-112 half:h-112 half:w-192 p-5 grid grid-cols-2 grid-rows-6 gap-3 relative">
                    <input type="text" className="rounded p-2 animate-appear1 col-span-1" placeholder="Name"/>
                    <input type="email" className="rounded p-2 animate-appear2 col-span-1" placeholder="Email"/>
                    <input type="text" className="rounded p-2 animate-appear3 col-span-2" placeholder="Subject"/>
                    <textarea type="text" className="rounded p-2 animate-appear4 col-span-2 row-span-3" placeholder="Comment"/>
                    <button className="h-8 w-16 sm:h-10 sm:w-20 half:h-12 half:w-28 absolute bottom-7 half:bottom-10 right-5 bg-white rounded text-gray-400 animate-appear5">Send</button>
                </div>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <main className="h-screen bg-gray-200 pt-16 sm:pt-20 flex justify-center items-center">
                <section className="h-auto w-full flex flex-col justify-between items-center">
                    <article className="w-80 sm:w-112 half:w-120 grid grid-cols-2 pb-4">
                        <div className={option ? "flex justify-center text-xs cursor-pointer border-r border-black text-gray-600 text-xs sm:text-lg half:text-xl" : "flex justify-center text-xs cursor-pointer transition-transform transform scale-110 text-black text-xs sm:text-lg half:text-xl"} onClick={() => {setOption(false)}}>How can we do better.</div>
                        <div className={option ? "flex justify-center text-xs cursor-pointer transition-transform transform scale-110 text-black text-xs sm:text-lg half:text-xl" : "flex justify-center text-xs cursor-pointer text-gray-600 border-l border-black text-xs sm:text-lg half:text-xl"} onClick={() => {setOption(true)}}>Suggest an Organization.</div>
                    </article>
                    {option ? <Suggest/> : <Comment/>}
                </section>
            </main>
        </React.Fragment>
    );
}

export default Contact;