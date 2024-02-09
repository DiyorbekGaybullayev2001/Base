import React from 'react'

const Section6 = () => {
  return (
    <>
        <div className='max-w-[1200px] m-auto h-[200px] mt-[80px] bg-[#e1e3ec73] rounded-t-[20px] relative max-lg:m-auto max-lg:h-[350px]' >
            
            <div className='grid grid-cols-2 max-w-full h-[200px] bg-[#1b2863] rounded-[20px] absolute top-[20px] left-[20px] max-lg:grid-cols-1 max-lg:h-[350px] max-lg:m-auto'>
                <div className='p-[10px]'>
                    <br /><br />
                    <h1 className='font-bold text-[30px] text-white  max-sm:text-[23px]'>Lorem ipsum dolor sit amet.</h1><br />
                    <p className='text-[#ececec]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptate? Lorem ipsum dolor sit amet.</p>
                </div>

                <div className='flex m-auto'>
                    <div className='m-auto border rounded-[40px] flex p-[5px] w-full h-[70px]'>
                        <input className='w-[320px] h-[60px] rounded-[40px] px-[10px] outline-none text-[20px] bg-[#1b2863] text-white max-sm:w-[250px] max-sm:h-[50px]' type="text" placeholder='Enter Email Address'/>
                        <btn className='bg-white w-[80px] h-[50px] rounded-[25px] m-auto max-sm:w-[70px]' >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 m-auto mt-[8px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </btn>
                    </div>
                </div>

            </div>

            
        </div>
    </>
  )
}

export default Section6
