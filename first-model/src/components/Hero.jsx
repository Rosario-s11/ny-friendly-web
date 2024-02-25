import React from "react";
import Typed from "react-typed";

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-yellow-300 text-xl font-bold p-2'>"Nurturing Homes, Trusted Care."</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>"Where Care Meets Comfort."</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-3xl sm:text-2xl text-xl font-bold py-3'>Bringing Care to Your</p>
                    <Typed
                        className= 'md:text-3xl sm:text-2xl text-xl font-bold md:pl-2 pl-2'
                        strings={['Home', 'Loved ones', 'Dearest', 'Doorsetp']} typeSpeed={200} backSpeed={225} loop />
                </div>
                <p className='md:text-2xl text-xl font-bold text-amber-200'>
                    "Elevating home care with compassion, comfort, and a personal touch, because your well-being is our top priority."</p>
                <button className='bg-cyan-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Book Your Call</button>
            </div>
        </div>
    )
}

export default Hero;