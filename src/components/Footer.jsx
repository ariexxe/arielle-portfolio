import React from 'react'
import { FaFacebook, FaFacebookMessenger, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                <div className='flex-1 mb-4 md:mb-0'>
                <h3 className='text-2xl font-bold mb-2'>Arielle</h3>
                <p className='text-gray-400'>Web Designer and Front-End Developer, specializing in web and design.
                </p>
                </div>
            <div className='flex-1 w-full'>
                <form className='flex items-center justify-center'>
                    <input 
                    type='email' 
                    placeholder='Your Email'
                    className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                    focus:outline-none focus:border-pink-400'/>
                    <button 
                    type='submit'
                    className='bg-gradient-to-r from-pink-700 to-blue-500 text-white px-4 
                    py-2 rounded-r-lg '>
                        Subscribe
                    </button>
                </form>
                </div>
            </div>

            <div className='border-t border-gray-600 pt-4 flex flex-col
            justify-between items-center'>
                <p className='text-gray-400 mb-4'>
                    &copy; {new Date().getFullYear()} Arielle. All rights reserved.
                </p>

                <p className='text-gray-400 mb-4'>
                Designed and Developed by Arielle.
                </p>

                <div className='flex space-x-8 my-4 md:my-0'>
                    <a href='https://www.facebook.com/princess.manatiga' className='text-gray-400 hover:text-white'>
                        <FaFacebook />
                    </a> 
                    <a href='https://www.linkedin.com/in/princessarielle-perez-049a89360/' className='text-gray-400 hover:text-white'>
                        <FaLinkedin />
                    </a>
                    <a href='https://www.instagram.com/arie_xxe/' className='text-gray-400 hover:text-white'>
                        <FaInstagram />
                    </a>
                    <a href='https://github.com/ariexxe' className='text-gray-400 hover:text-white'>
                        <FaGithub />
                    </a>
                </div>
                <div className='flex space-x-4'>
                    <a href='#' className='text-gray-400 hover:text-white'>
                        Privacy
                    </a>
                    <a href='#' className='text-gray-400 hover:text-white'>
                        Terms of Service
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
