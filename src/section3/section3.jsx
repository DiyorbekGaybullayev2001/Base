import React from 'react'
import img8 from '../images/img8.png'

const Section3 = () => {
  return (
    <>
        <div className='max-w-[1500px] m-auto h-full mt-[50px] grid grid-cols-2 max-lg:grid-cols-1' id='Testimonial'>

            <div>
                <h1 className='text-[#1D92FF] mt-[30px] ml-[50px] text-[25px] max-sm:text-[18px]'>Lorem ipsum dolor</h1>
                <h1 className='text-[50px] ml-[50px] max-sm:text-[30px]'><span className='font-bold '>With a name like Saas,</span></h1>
                <h1 className=' text-[50px] ml-[50px] max-sm:text-[30px]'>  <span className='font-bold'>It has to</span> be good.</h1><br />

                <div className='ml-[50px] flex max-w-[400px] h-[40px] justify-between bg-slate-100 p-[10px] mt-[10px] max-lg:m-auto max-lg:mt-[10px]'>
                    <p>Lorem ipsum dolor sit amet consectetur? </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>  
                </div>

                <div className='ml-[50px] flex max-w-[400px] max-h-[40px] justify-between bg-slate-100 p-[10px] mt-[10px] max-lg:m-auto max-lg:mt-[10px]'>
                    <p>Lorem ipsum dolor sit amet consectetur? </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>  
                </div>

                <div className='ml-[50px] flex max-w-[400px] h-[40px] justify-between bg-slate-100 p-[10px] mt-[10px] max-lg:m-auto max-lg:mt-[10px]'>
                    <p>Lorem ipsum dolor sit amet consectetur? </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>  
                </div>

                <div className='ml-[50px] flex max-w-[400px] h-[40px] justify-between bg-slate-100 p-[10px] mt-[10px] max-lg:m-auto max-lg:mt-[10px]'>
                    <p>Lorem ipsum dolor sit amet consectetur? </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>  
                </div>

                <div className='ml-[50px] flex max-w-[400px] h-[40px] justify-between bg-slate-100 p-[10px] mt-[10px] max-lg:m-auto max-lg:mt-[10px]'>
                    <p>Lorem ipsum dolor sit amet consectetur? </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>  
                </div>

                <button className='bg-indigo-600 w-[180px] h-[50px] text-[20px] ml-[50px] mt-[50px] font-semibold rounded-[5px] text-[#ffffff] '>Free Trial</button>
                <button className='border-2 border-gray-500  w-[180px] h-[50px] text-[25px] mt-[50px] font-semibold rounded-[5px] text-[#4656e0] mx-[20px] '>Read More</button><br /><br />
                
            </div>

            <div className='max-lg:m-auto'>
                <img src={img8} alt="" />
            </div>

        </div>
    </>
  )
}

export default Section3
