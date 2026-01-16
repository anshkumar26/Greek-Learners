import React from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
const App = () => {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    // </BrowserRouter>
  )
}

export default App

// import React, { useState, useEffect } from 'react';
// import { Routes, Route } from "react-router-dom";
// import Login from './components/login';
// import Signup from './components/signup';
// import { BookOpen, Users, Award, TrendingUp, Calendar, Mail, Phone, FileText, CreditCard } from 'lucide-react';

// export default function LearningLandingPage() {
//   const [scrollY, setScrollY] = useState(0);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     query: '',
//     resume: null
//   });

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const courses = [
//     {
//       title: "Essentials of Leadership",
//       description: "Learn the fundamentals of effective leadership and develop your managerial skills. This course equips you with the necessary tools for success.",
//       icon: "👥",
//       color: "from-pink-400 to-orange-400",
//       delay: "0"
//     },
//     {
//       title: "Management Mastery",
//       description: "Learn the fundamentals of effective leadership and develop your managerial skills. This course equips you with the necessary tools for success.",
//       icon: "📊",
//       color: "from-green-400 to-teal-400",
//       delay: "200"
//     },
//     {
//       title: "Strategic Planning",
//       description: "Learn the fundamentals of effective leadership and develop your managerial skills. This course equips you with the necessary tools for success.",
//       icon: "🎯",
//       color: "from-blue-400 to-purple-400",
//       delay: "400"
//     },
//     {
//       title: "Digital Marketing",
//       description: "Master modern marketing strategies and digital tools to grow your business presence online effectively.",
//       icon: "📱",
//       color: "from-yellow-400 to-red-400",
//       delay: "600"
//     }
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
//   };

//   const handleSubmit = () => {
//     if (!formData.name || !formData.email || !formData.contact || !formData.query) {
//       alert('Please fill in all required fields');
//       return;
//     }
//     alert('Booking submitted! In a real application, this would process payment and send data to your server.');
//     console.log('Form data:', formData);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="text-2xl font-bold tracking-tight">GREEK LEARNERS</div>
//           <div className="hidden md:flex space-x-8">
//             <a href="#home" className="hover:text-green-400 transition">Home</a>
//             <a href="#about" className="hover:text-green-400 transition">About</a>
//             {/* <a href="#courses" className="hover:text-green-400 transition">Courses</a> */}
//             {/* <a href="#teachers" className="hover:text-green-400 transition">Teachers</a> */}
//             <a href="#booking" className="hover:text-green-400 transition">Contact US</a>
//           </div>
//           <button className="bg-green-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-green-300 transition">
//             Login/SignUp
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
//         <div 
//           className="absolute inset-0 opacity-30"
//           style={{
//             backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
//             transform: `translateY(${scrollY * 0.5}px)`
//           }}
//         />
        
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
//           <div className="space-y-6">
//             <h1 className="text-6xl md:text-7xl font-bold leading-tight">
//               Keep Learning<br/>On Track
//             </h1>
//             <p className="text-xl text-gray-400">
//               Get Quick Placement Tips with 1:1 Support, <br/>BOOK YOUR SESSION NOW!
//             </p>
//             <button className="bg-green-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-300 transition transform hover:scale-105">
//               Start Now
//             </button>
//           </div>

//           <div className="relative">
//             <div className="relative w-full aspect-square">
//               {/* Floating orb */}
//               <div 
//                 className="absolute inset-0 flex items-center justify-center"
//                 style={{
//                   transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px)`
//                 }}
//               >
//                 <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-3xl animate-pulse" />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-64 h-64 rounded-full border-4 border-cyan-400/30 flex items-center justify-center">
//                     <div className="w-32 h-32 rounded-full bg-cyan-400/50 backdrop-blur-sm flex items-center justify-center">
//                       <div className="w-16 h-16 rounded-full bg-cyan-300" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Stats badge */}
//               <div className="absolute bottom-0 right-0 bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700">
//                 <div className="text-5xl font-bold text-green-400">500+</div>
//                 <div className="text-sm text-gray-400 mt-2">Total users completed the training</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Courses Section */}
//       <section id="courses" className="py-24 px-6 bg-gray-800/50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold mb-4">Featured Courses</h2>
//             <p className="text-xl text-gray-400">Explore our comprehensive learning programs</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {courses.map((course, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 border border-gray-700 hover:border-green-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-400/20"
//                 style={{
//                   animation: `fadeInUp 0.6s ease-out ${course.delay}ms both`
//                 }}
//               >
//                 <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
//                   {course.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">{course.title}</h3>
//                 <p className="text-gray-400 text-sm mb-4">{course.description}</p>
//                 <button className="text-green-400 font-semibold hover:text-green-300 transition flex items-center">
//                   Explore <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-24 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               { icon: Users, value: "1000+", label: "Active Students" },
//               { icon: BookOpen, value: "200+", label: "Courses" },
//               { icon: Award, value: "98%", label: "Success Rate" },
//               { icon: TrendingUp, value: "4.8/5", label: "Rating" }
//             ].map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-400/10 mb-4 group-hover:bg-green-400/20 transition">
//                   <stat.icon className="w-10 h-10 text-green-400" />
//                 </div>
//                 <div className="text-4xl font-bold mb-2">{stat.value}</div>
//                 <div className="text-gray-400">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Booking Section */}
//       <section id="booking" className="py-24 px-6 bg-gray-800/50">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-5xl font-bold mb-4">Book Your Session</h2>
//             <p className="text-xl text-gray-400">Take the next step in your learning journey</p>
//           </div>

//           <div className="bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700 space-y-6">
//             {/* Name */}
//             <div>
//               <label className="block text-sm font-semibold mb-2 flex items-center">
//                 <Users className="w-4 h-4 mr-2 text-green-400" />
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400 transition"
//                 placeholder="Enter your full name"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-semibold mb-2 flex items-center">
//                 <Mail className="w-4 h-4 mr-2 text-green-400" />
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400 transition"
//                 placeholder="your.email@example.com"
//               />
//             </div>

//             {/* Contact */}
//             <div>
//               <label className="block text-sm font-semibold mb-2 flex items-center">
//                 <Phone className="w-4 h-4 mr-2 text-green-400" />
//                 Contact Number
//               </label>
//               <input
//                 type="tel"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleInputChange}
//                 className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400 transition"
//                 placeholder="+1 (555) 000-0000"
//               />
//             </div>

//             {/* Query */}
//             <div>
//               <label className="block text-sm font-semibold mb-2 flex items-center">
//                 <FileText className="w-4 h-4 mr-2 text-green-400" />
//                 Your Query
//               </label>
//               <textarea
//                 name="query"
//                 value={formData.query}
//                 onChange={handleInputChange}
//                 rows="4"
//                 className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400 transition resize-none"
//                 placeholder="Tell us about your learning goals..."
//               />
//             </div>

//             {/* Resume Upload */}
//             <div>
//               <label className="block text-sm font-semibold mb-2 flex items-center">
//                 <FileText className="w-4 h-4 mr-2 text-green-400" />
//                 Upload Resume
//               </label>
//               <div className="relative">
//                 <input
//                   type="file"
//                   onChange={handleFileChange}
//                   accept=".pdf,.doc,.docx"
//                   className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-green-400 file:text-gray-900 file:font-semibold hover:file:bg-green-300 file:cursor-pointer"
//                 />
//               </div>
//               <p className="text-xs text-gray-500 mt-2">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
//             </div>

//             {/* Payment Integration */}
//             <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
//               <label className="text-sm font-semibold mb-4 flex items-center">
//                 <CreditCard className="w-4 h-4 mr-2 text-green-400" />
//                 Book Session with Payment
//               </label>
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-gray-400">Session Fee:</span>
//                   <span className="text-2xl font-bold">$99.00</span>
//                 </div>
//                 <div className="text-xs text-gray-500">
//                   * Payment will be processed securely through our payment gateway
//                 </div>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               onClick={handleSubmit}
//               className="w-full bg-green-400 text-gray-900 py-4 rounded-xl font-bold text-lg hover:bg-green-300 transition transform hover:scale-105 flex items-center justify-center space-x-2"
//             >
//               {/* <Calendar className="w-5 h-5" /> */}
//               {/* <span>Book Now & Pay</span> */}
//               <span>Submit</span>
//             </button>

//             <p className="text-center text-xs text-gray-500">
//               By booking, you agree to our Terms of Service and Privacy Policy
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
//         <div className="max-w-7xl mx-auto text-center text-gray-400">
//           <p className="mb-4">© 2024 LearnMe. All rights reserved.</p>
//           <div className="flex justify-center space-x-6">
//             <a href="#" className="hover:text-green-400 transition">Privacy Policy</a>
//             <a href="#" className="hover:text-green-400 transition">Terms of Service</a>
//             <a href="#" className="hover:text-green-400 transition">Contact Us</a>
//           </div>
//         </div>
//       </footer>

//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }