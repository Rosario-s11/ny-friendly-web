import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Navbar = () => {
    const[nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-white'>New York Friendly Home Care</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
                <li className='p-4'>Careers</li>
                <li className='p-4'>Reviews</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-transparent ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-yellow-300 m-4'>New York Friendly Home Care</h1>

                <ul className='pt-4 uppercase'>
                    <li className='p-4 border-b border-r-gray-600'>Home</li>
                    <li className='p-4 border-b border-r-gray-600'>About</li>
                    <li className='p-4 border-b border-r-gray-600'>Contact</li>
                    <li className='p-4 border-b border-r-gray-600'>Careers</li>
                    <li className='p-4'>Reviews</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;