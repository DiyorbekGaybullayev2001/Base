import React, { useState } from 'react'
import logo from '../images/logo.png'
import img1 from '../images/img1.png'

const Header = () => {

    const [bar, setbar] = useState(false)

    function menus() {
        if(bar){
            setbar(false)
        }
        else{
            setbar(true)
        }
    }

  return (
    <>
        <header className='bg-indigo-950  w-full h-full relative'>
            <br />
            <nav className='m-auto max-w-[1500px] px-[30px] h-[70px] flex justify-between text-center leading-[60px]' >
                <img src={logo} alt="logo" className='w-[160px] h-[60px]'/>
                <ul className='2xl:flex xl:flex lg:flex md:hidden sm:hidden max-sm:hidden'>
                    <li><a href="#" className='text-[#bbbbbb] text-[25px] m-[20px] '>Home</a></li>
                    <li><a href="#Features" className='text-[#bbbbbb] text-[25px] m-[20px] '>Features</a></li>
                    <li><a href="#Testimonial" className='text-[#bbbbbb] text-[25px] m-[20px] '>Testimonial</a></li>
                    <li><a href="#Pricing" className='text-[#bbbbbb] text-[25px] m-[20px] '>Pricing</a></li>
                    <li><a href="#CTA" className='text-[#bbbbbb] text-[25px] m-[20px] '>CTA</a></li>
                </ul>
                <button className='bg-[#dbdbdb] w-[150px] h-[60px] text-[22px] font-semibold rounded-[10px] text-[#4656e0] max-sm:hidden'>Try Demo</button>


                <button onClick={menus} className='max-2xl:hidden max-lg:block 2xl:hidden'>
                    {
                        !bar ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                       </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    }
                    

                    

                </button>
            </nav>

            {
                bar && <div className='menubar  border w-[300px] h-[900px] absolute right-[5px] bg-[#141a41]'>
                <ul className='block m-[10px]'>
                        <li className='mt-[50px]'><a href="#" className='text-[#bbbbbb] text-[25px] m-[50px] '>Home</a></li>
                        <li className='mt-[20px]'><a href="#Features" className='text-[#bbbbbb] text-[25px] m-[50px] '>Features</a></li>
                        <li className='mt-[20px]'><a href="#Testimonial" className='text-[#bbbbbb] text-[25px] m-[50px] '>Testimonial</a></li>
                        <li className='mt-[20px]'><a href="#Pricing" className='text-[#bbbbbb] text-[25px] m-[50px] '>Pricing</a></li>
                        <li className='mt-[20px]'><a href="#CTA" className='text-[#bbbbbb] text-[25px] m-[50px] '>CTA</a></li>
                    </ul>
                    <button className='bg-[#dbdbdb] w-[150px] h-[60px] text-[22px] font-semibold rounded-[10px] text-[#4656e0] m-[40px]'>Try Demo</button>
                </div>
            }

            
            <div className=' justify-between m-auto max-w-[1500px] h-full grid grid-cols-2 max-lg:grid-cols-1'>

                <div className='max-lg:m-auto max-sm:m-auto'>
                    <h1 className='text-[#1D92FF] mt-[150px] text-[30px] max-lg:mt-[40px] max-md:text-[20px]'>Lorem ipsum dolor</h1>
                    <h1 className='text-[#e6eaec] text-[60px] font-bold max-md:text-[40px]'>Always the <span className='text-[#1D92FF]'>Real  </span></h1>
                    <h1 className='text-[#e6eaec] text-[60px] font-bold max-md:text-[40px]'>Thing, always <span className='text-[#1D92FF]'>Sass </span></h1><br />
                    <p className='text-[#bbbbbb] text-[25px]'>And that number is growing every day.</p><br />
                    <p className='text-[#bbbbbb] text-[25px]'>That means <a href="#" className='text-[#1D92FF]'>E-Commerce</a> is thriving.</p>
                    <br />
                    <button className='bg-[#dbdbdb] w-[200px] h-[70px] text-[25px] font-semibold rounded-[5px] text-[#4656e0] max-md:w-[170px] max-md:h-[55px]'>Try For Free</button>
                    <button className='border-2 border-blue-900 bg-indigo-950 w-[200px] h-[70px] text-[25px] font-semibold rounded-[5px] text-[#4656e0] mx-[20px] max-md:w-[170px] max-md:h-[55px]'>Try For Free</button><br /><br />
                    <div className='max-w-[600px] border border-gray-700'></div>
                    <br />
                    <p className='text-[#838282] text-[25px] max-md:text-[18px]'>There are some things money can’t buy. </p>
                    <p className='text-[#838282] text-[25px] max-md:text-[18px]'>For everything else there’s <span className='text-[#c7c8c9]'>‘’MasterCard”</span> is a good example. </p>
                </div>

                <div className=''>
                    <img src={img1} alt="img1" />
                </div>

            </div>
        </header>
    </>
  )
}

export default Header
