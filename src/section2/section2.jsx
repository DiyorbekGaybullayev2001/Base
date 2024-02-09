import React from 'react'
import img7 from '../images/img7.png'

const Section2 = () => {
  return (
    <>
        <div className='max-w-[1500px] m-auto h-full mt-[100px] grid grid-cols-2 max-lg:grid-cols-1' id='Features'>

            <div className='max-lg:m-auto'>
                <img src={img7} alt="img7" />
            </div>
            
            <div>
                <h1 className='text-[#1D92FF] mt-[30px] ml-[50px] text-[25px] max-md:text-[20px]'>Lorem ipsum dolor</h1>
                <h1 className='text-[50px] ml-[50px] max-md:text-[40px] max-sm:text-[30px]'><span className='font-bold '>Two</span> Saas are better</h1>
                <h1 className='font-bold text-[50px] ml-[50px] max-md:text-[40px]'>Than one.</h1><br />
                <p className='ml-[50px] text-[20px] max-sm:text-[18px]'>One of the most fundamental ways to go about that is </p>
                <p className='ml-[50px] text-[20px] max-sm:text-[18px]'>To create a memorable <span className='font-bold'>E-Commerce</span> slogan.</p><br />

                <p className='ml-[50px] flex justify-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[#1D92FF] mt-[15px]">
                        <path  strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                <label className='ml-[10px] text-[20px] max-sm:text-[17px]'>Lorem ipsum dolor sit amet, consectetur adipiscing  elit,  sed do eiusmod tempor incididunt.</label>
                </p>
                    <br />
                <p className='ml-[50px] flex justify-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[#1D92FF] mt-[15px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                    </svg>
                <label className='ml-[10px] text-[20px] max-sm:text-[17px]'>Lorem ipsum dolor sit amet, consectetur adipiscing  elit,  sed do eiusmod tempor incididunt.</label>
                </p>
                    <br />      
                <p className='ml-[50px] flex justify-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[#1D92FF] mt-[5px]">
                        <path  strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                <label className='ml-[10px] text-[20px] max-sm:text-[17px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</label>
                </p>
                    <br />

            </div>
        </div>
    </>
  )
}

export default Section2
