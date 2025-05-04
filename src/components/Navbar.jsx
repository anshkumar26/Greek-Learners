import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={{ backgroundColor: "#00000" }} className="shadow-2xl bg-gray-900 fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo - unchanged */}
                <div className="flex items-center">
                    <button onClick={() => window.location.reload()}>
                        <h3 className=' text-amber-50 h-10 mt-3 cursor-pointer transition-transform hover:scale-110 will-change-transform duration-700'>GL</h3>
                    </button>
                </div>

                {/* Desktop Menu - unchanged */}
                <div className="hidden md:flex space-x-6 text-white font-medium">
                    <a href="#about" className="hover:text-blue-100 transition-transform ease-in-out hover:scale-103 will-change-transform duration-700">About Us</a>
                    <a href="#offer" className="hover:text-blue-100 transition-transform ease-in-out hover:scale-103 will-change-transform duration-700">What We Offer</a>
                    <a href="#contact" className="hover:text-blue-100 transition-transform ease-in-out hover:scale-103 will-change-transform duration-700">Contact Us</a>
                </div>

                {/* Hamburger Icon - unchanged */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <XIcon className="h-6 w-6 text-white" />
                        ) : (
                                <MenuIcon className="h-6 w-6 text-white" />
                            )}
                        </button>
                    </div>
                </div>
    
                {/* Animated Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="md:hidden overflow-hidden"
                            >
                                <div className="px-4 pb-4 space-y-2 text-white font-medium">
                                    <a href="#about" className="block hover:text-white transition-transform ease-in-out hover:scale-90 duration-800">About Us</a>
                                    <a href="#offer" className="block hover:text-white transition-transform ease-in-out hover:scale-90 duration-800">What We Offer</a>
                                    <a href="#contact" className="block hover:text-white transition-transform ease-in-out hover:scale-90 duration-800">Contact Us</a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
    );
};

export default Navbar;






// navbar-made-by-me







// import React, { useState } from 'react'
// // import logo_bg from '../assets/logo_bg.png'
// import { MenuIcon, XIcon } from '@heroicons/react/outline'

// // const ThemeContext = createContext();
// const Navbar = () => {


//     const [isOpen, setIsOpen] = useState(false);

//     return (

//         <nav style={{ backgroundColor: "#00000" }} className=" shadow-2xl bg-gray-900 fixed top-0 w-full z-50">
//             <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

//                 {/* Logo */}

//                 <div className="flex items-center">
//                     <button onClick={()=>window.location.reload()}>
//                         <h3 className='text-amber-50 h-10 mt-3 cursor-pointer 
//                         transition-transform hover:scale-150 duration-700'>GL</h3>
//                     {/* <img src={logo_bg} alt="Greek Learners" className="h-15 w-auto cursor-pointer" /> */}
//                     </button>
//                 </div>



//                 <div className="hidden md:flex space-x-6 text-white font-medium">
//                     <a href="#about" className="hover:text-white transition-transform ease-in-out hover:scale-105 duration-700 will-change-transform">About Us</a>
//                     <a href="#offer" className="hover:text-white transition-transform ease-in-out hover:scale-105 duration-800 will-change-transform">What We Offer</a>
//                     <a href="#contact" className="hover:text-white transition-transform ease-in-out hover:scale-105 duration-800 will-change-transform">Contact Us</a>
//                 </div>

//                 {/* Hamburger Icon */}

//                 <div className="md:hidden">
//                     <button className='' onClick={() => setIsOpen(!isOpen)}>
//                         {isOpen ? (
//                             <XIcon className="h-6 w-6 text-white" />
//                         ) : (
//                             <MenuIcon className="h-6 w-6 text-white" />
//                         )}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <div className="md:hidden px-4 pb-4 space-y-2 text-white font-medium">
//                     <a href="#about" className="block hover:text-white transition-transform ease-in-out hover:scale-90 duration-800">About Us</a>
//                     <a href="#offer" className="block hover:text-white transition-transform ease-in-out hover:scale-90 duration-800">What We Offer</a>
//                     <a href="#contact" className="block hover:text-white transition-transform ease-in-out hover:scale-90 duration-800">Contact Us</a>
//                 </div>
//             )}
//         </nav>
//     )
// }

// export default Navbar