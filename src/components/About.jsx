import React from 'react'
import books from '../assets/books.png'
import ScrollVelocity from '../designs/ScrollVelocity'
const About = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className='mt-40'>
        <h1>Hello Scholars !</h1>
      </div>
      <div id='about' className="flex justify-center items-start h-100">
        <h1
          className="shadow-2xl hover:bg-gray-100 m-5 p-20 rounded-2xl
               transition-transform ease-in-out duration-700 hover:scale-90
               hover:text-black will-change-transform flex items-center">

          <img
            src={books}
            className="h-40 mr-6 transition-transform 
      ease-in-out duration-700 
      hover:scale-110 will-change-transform"
            alt="Book"
          />
          We guide students on how to prepare effectively before applying to companies —
          through seminars and structured learning paths.
        </h1>
      </div>
      <div className='mt-30'>
      <ScrollVelocity
        texts={['Greek Learners * ', 'Launching Soon !']} 
        velocity={50} 
        className="custom-scroll-text"
      />
      </div>
      <div className='p-80'>

      </div>
    </div>
  )
}

export default About