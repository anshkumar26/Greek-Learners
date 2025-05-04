import React from 'react'
import books from '../assets/books.png'
import ScrollVelocity from '../designs/ScrollVelocity'
import CircularGallery from '../designs/CircularGallery'
import code from '../assets/code.png'
import javascript from '../assets/javascript.png'
const About = () => {
  return (

    // Card-components
    <div className='w-full overflow-hidden bg-zinc-100'>
      <div
        id='card'
        className='flex flex-wrap justify-center items-start gap-10 mt-30 p-20'
      >
        <div className='flex flex-col '>
        <p className='mt-5 mb-2 font-bold text-gray-900'>
          Join Us - 1:1 Mentorship - Launching
      </p>
      <h1 
          className='font-bold text-blue-500 text-4xl transition-transform ease-in-out hover:scale-115 will-change-transform duration-700'
          style={{ textShadow: '0 20px 20px rgba(59, 130, 246, 0.5)' }}>
          GREEK LEARNER
      </h1>
        </div>
      <p>Get the solution of each and every doubt, We provide career guidance, personalized roadmaps, Interactive 1:1 sessions with working professionals and lot more !!</p>




      <div className='mt-30'>
        <ScrollVelocity
        // src={code}
          texts={['Get the solution of each and every doubt, We provide career guidance, personalized roadmaps, Interactive 1:1 sessions with working professionals and lot more !! ',]} //', 'Launching Soon !
          velocity={220}
          className="custom-scroll-text"
        />
      </div>



        {/* First Card */}
        <div className='bg-zinc-200 rounded-2xl w-full sm:w-[45%] md:w-[40%] lg:w-[30%] transition-transform ease-in-out duration-700 hover:scale-95 shadow-2xl'>

          <div className='flex justify-center'>
            <img
              src='https://stemlen.com/static/media/Connecting.c4069b81e25e74473da0.png'
              alt='Connect'
            />
          </div>
        </div>

        {/* Second Card */}
        <div className='bg-zinc-200 rounded-2xl w-full sm:w-[45%] md:w-[40%] lg:w-[30%] transition-transform ease-in-out duration-700 hover:scale-95 will-change-transform shadow-2xl'>
          <h1 className='mt-10 p-10 font-bold text-gray-900'>
            Get Job Ready - With Best Career Advice by working Professionals
          </h1>
          <div className='flex justify-center'>
            <img
              src='https://stemlen.com/static/media/Connecting.c4069b81e25e74473da0.png'
              alt='Connect'
            />
          </div>
        </div>
      </div>




      <div className='mt-20' style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} />
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