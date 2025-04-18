import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/*---- Left side ----*/}
            <div>
                <h1 className="text-xl font-bold text-[#5f6fff] cursor-pointer tracking-wide">
                    <span className="bg-gradient-to-r from-[#5f6fff] to-[#3a47d5] text-transparent bg-clip-text">Med
                    <span className="text-black">Pluse</span>
                    </span>
                </h1>
                <br />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            {/*---- center side ----*/}
            <div> 
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/*---- Right side ----*/}
            <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 8238137691</li>
                    <li>MedPluse@gmail.com</li>
                </ul>
            </div>


        </div>
        <div>
            {/*---- Copyright Text ----*/}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ MedPluse - All Right Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer