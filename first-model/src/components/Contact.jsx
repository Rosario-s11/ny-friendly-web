import React from "react";

const Contact = () => {
    return(
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Schedule a call to see if you qualify!</h1>
                    <p>Check our services and contact us for better assistance</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black' type='tel'
                               placeholder='Enter your cellphone'/>
                        <button
                            className='bg-cyan-500 w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-white'>Book
                            a Call
                        </button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className='text-cyan-400 font-bold'>Privacy Policy</span></p>
                </div>
            </div>
        </div>
    )
}

export default Contact