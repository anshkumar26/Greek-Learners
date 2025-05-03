import React, { useState } from 'react'
import logo_bg from '../assets/logo_bg.png'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={{ backgroundColor: "#A9CD9E" }} className=" shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

                {/* Logo */}

                <div className="flex items-center ">
                    <button onClick={()=>window.location.reload()}>
                    <img src={logo_bg} alt="Greek Learners" className="h-15 w-auto cursor-pointer" />
                    </button>
                </div>

                {/* Desktop Menu */}

                <div className="hidden md:flex space-x-6 text-blue-900 font-medium">
                    <a href="#about" className="hover:text-white transition-transform ease-in-out hover:scale-105 duration-800 will-change-transform">About Us</a>
                    <a href="#offer" className="hover:text-white transition-transform ease-in-out hover:scale-105 duration-800 will-change-transform">What We Offer</a>
                    <a href="#contact" className="hover:text-white transition-transform ease-in-out hover:scale-105 duration-800 will-change-transform">Contact Us</a>
                </div>

                {/* Hamburger Icon */}

                <div className="md:hidden">
                    <button className='' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <XIcon className="h-6 w-6 text-blue-900" />
                        ) : (
                            <MenuIcon className="h-6 w-6 text-blue-900" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 text-blue-900 font-medium">
                    <a href="#about" className="block hover:text-white transition-transform ease-in-out hover:scale-90 duration-800">About Us</a>
                    <a href="#offer" className="block hover:text-white transition-transform ease-in-out hover:scale-90 duration-800">What We Offer</a>
                    <a href="#contact" className="block hover:text-white transition-transform ease-in-out hover:scale-90 duration-800">Contact Us</a>
                </div>
            )}
        </nav>
    )
}

export default Navbar



//     <div className="bg-stone-50 shadow-md">
//     <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
//       <div className="flex items-center space-x-2">
//         <img src={logo_name} alt="Greek Learners" className="h-10 w-auto" />
//       </div>
//       <div className="flex space-x-6 text-blue-900 font-medium">
//         <a href="#about" className="hover:text-green-700 transition">About Us</a>
//         <a href="#offer" className="hover:text-green-700 transition">What We Offer</a>
//         <a href="#contact" className="hover:text-green-700 transition">Contact Us</a>
//       </div>
//     </div>
//   </div>




// mycode->
// <div className='mt-0 flex'>
//     <div className='bg-stone-50'>
//         <div className='bg-stone-50 w-30'>
//             <img src={logo_name} alt='Greek Learners'></img>
//         </div>
//         <div className=''>
//             About Us
//         </div>
//         <div className=''>
//             What We Offer
//         </div>
//         <div className=''>
//             Contact US
//         </div>
//     </div>
// </div>