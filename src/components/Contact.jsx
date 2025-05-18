import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-black text-white py-20' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          
          <div className='flex-1'>
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-blue-500 mb-4'>Let's Talk </h3>
            <p>I'm open to discuss Web Design projects or other opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-pink-700 mr-2'></FaEnvelope>
                <a href='mailto:youremail.@example.com' className='text-white hover:underline'>
                princessarielleperez@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-pink-700 mr-2'></FaPhone>
                <span>
                    +63 921 523 3990
                </span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-pink-700 mr-2'></FaMapMarkedAlt>
                <span>
                    5A Cenalcle Drive Sanville Subdivision, Culiat, <br></br>Quezon City, Philippines, 1128
                </span>
            </div>
          </div>

          <div className='flex-1 w-full'>
            <form className='flex-1 w-full'>
                <div>
                    <lable htmlFor="name" className='block mb-2'>Your Name</lable>
                    <input type='text'
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-pink-700'
                    placeholder='Enter your Name'/>
                </div>

                <div>
                    <lable htmlFor="email" className='block mb-2'>Email</lable>
                    <input type='text'
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-pink-700'
                    placeholder='Enter your Email'/>
                </div>

                <div>
                    <lable htmlFor="message" className='block mb-2'>Message</lable>
                    <textarea type='text'
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-pink-700'
                    rows='5'
                    placeholder='Enter your Message'/>
                </div>
                <button type='submit'
                className='mt-4 bg-gradient-to-r from-pink-700 to-blue-500 text-white px-4 py-2 rounded-full hover:bg-gradient-to-l'>
                    Send Message    
                </button>
            </form>
          </div>
        </div>
        </div>
      </div>

  )
}

export default Contact
