import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'
const Footer = () => {
    return(
        <div className='max-w-[1240px] bg-black mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-amber-200'>NY Friendly Home Care</h1>
                <p className='py-4'>"Empowering lives with compassionate home care services. Your well-being is our priority,
                    providing comfort and support where you call home."</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>All of our services</h6>
                    <ul>
                        <li className='py-2 text-sm'>Home</li>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Contact</li>
                        <li className='py-2 text-sm'>Services</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Our Goals</h6>
                    <ul>
                        <li className='py-2 text-sm'>Missions</li>
                        <li className='py-2 text-sm'>Innovations</li>
                        <li className='py-2 text-sm'>Growth</li>
                        <li className='py-2 text-sm'>Career development</li>
                        <li className='py-2 text-sm'>Reviews</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Caregivers</li>
                        <li className='py-2 text-sm'>Connections</li>
                        <li className='py-2 text-sm'>Our Mission</li>
                        <li className='py-2 text-sm'>Questions</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;