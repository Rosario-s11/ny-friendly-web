import React from "react";
import First from '../assest/service1.png'
import Second from '../assest/service2.jpg'
import Third from '../assest/service3.jpg'
const Services = () => {
    return(
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={First} alt='/'/>
                    <h2 className='text-2xl font-bold text-center py-8'>24/7 Live-in/ Hourly Services.</h2>
                    <p className='text-center text-4xl font-bold'>Call to qualify</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>All types of Care Services</p>
                        <p className='py-2 border-b mx-8'>Hospital to Home Services</p>
                        <p className='py-2 border-b mx-8'>Disability Services</p>
                    </div>
                    <button
                        className='bg-cyan-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Contact
                        Us Now
                    </button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Second} alt='/'/>
                    <h2 className='text-2xl font-bold text-center py-8'>Medicaid Consulting</h2>
                    <p className='text-center text-4xl font-bold'>Call to qualify</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Assistance With all Applications</p>
                        <p className='py-2 border-b mx-8'>Medicaid re-certifications</p>
                        <p className='py-2 border-b mx-8'>Asset Transfer</p>
                    </div>
                    <button
                        className='bg-cyan-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Contact
                        Us Now
                    </button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-200'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Third} alt='/'/>
                    <h2 className='text-2xl font-bold text-center py-8'>Care Services</h2>
                    <p className='text-center text-4xl font-bold'>Call to qualify</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Cancer Care</p>
                        <p className='py-2 border-b mx-8'>Alzheimer Care</p>
                        <p className='py-2 border-b mx-8'>Parkinson Care</p>
                    </div>
                    <button
                        className='bg-cyan-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Contact
                        Us Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Services;
