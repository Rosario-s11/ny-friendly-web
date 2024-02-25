import React from "react";
import Laptop from '../assest/Home1.jpg'
const Info = () => {
    return(
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
              <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
              <div className='flex flex-col justify-center'>
                  <p className='text-cyan-600 font-bold text-2xl'>"Care Harmony at Home."</p>
                  <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Serenity at Home, Expert Care."</h1>
                  <p>
                      "Welcome to our home care sanctuary, where compassion meets expertise.
                      At NY Friendly Home Care, we take pride in delivering exceptional care tailored to the -
                      unique needs of each individual.
                      Our dedicated team of compassionate professionals is committed to creating a warm and -
                      nurturing environment within the comfort of your home.
                      From skilled nursing to personal assistance, we provide a comprehensive range -
                      of services designed to enhance well-being and promote independence.
                      With a focus on dignity and respect, we strive to bring peace of mind to families, -
                      ensuring your loved ones receive the highest quality of care.
                  </p>
                  <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-cyan-500'>Book a Call Now</button>
              </div>
            </div>
        </div>
    )
}

export default Info;