import React from 'react'
import logo from '../images/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <footer className='bg-black w-full h-full m-auto  mt-[0px]'>
            <div className='grid grid-cols-5 max-w-[1300px] m-auto max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 '>
                <div className=' h-[200px] w-[250px] mt-[50px] p-[10px] max-md:mt-[10px] max-sm:m-auto'>
                    <img src={logo} alt="logo" className='mt-[30px]' />
                    <h1 className='text-slate-400 mt-[20px]'>Lorem ipsum dolor sit amet consectetur.</h1>
                </div>
                <div className=' h-[200px] w-[250px] mt-[50px] p-[10px] max-sm:m-auto'>
                    <h1 className='text-white mt-[30px] text-[22px] max-sm:mt-[0px]'>Customers</h1>
                    <p className='text-slate-400 mt-[20px]'><a href="#">Buyer</a></p>
                    <p className='text-slate-400 '><a href="#">Supplier</a></p>
                </div>
                <div className=' h-[200px] w-[250px] mt-[50px] p-[10px] max-sm:m-auto'>
                    <h1 className='text-white mt-[30px] text-[22px] max-sm:mt-[0px]'>Copmany</h1>
                    <p className='text-slate-400 mt-[20px]'><a href="#">About Us</a></p>
                    <p className='text-slate-400 '><a href="#">Careers</a></p>
                    <p className='text-slate-400 '><a href="#">Cantact Us</a></p>
                </div>
                <div className=' h-[200px] w-[250px] mt-[50px] p-[10px] max-sm:m-auto'>
                    <h1 className='text-white mt-[30px] text-[22px] max-sm:mt-[0px]'>Further Infomation</h1>
                    <p className='text-slate-400 mt-[20px]'><a href="#">Terms & Conditions</a></p>
                    <p className='text-slate-400 '><a href="#">Privacy Policy</a></p>
                </div>
                <div className=' h-[200px] w-[250px] mt-[50px] p-[10px] max-sm:m-auto'>
                    <h1 className='text-white mt-[30px] text-[22px] max-sm:mt-[0px]'>Follow Us</h1>
                    <input type="text" placeholder='Email Address' className='w-full h-[40px] mt-[20px] border rounded-[30px] p-[10px] outline-none bg-black text-white'/>
                    <div className='flex'>
                        <a href="#" className='text-white text-[25px] m-[10px]'><FaInstagram/></a>
                        <a href="#" className='text-white text-[25px] m-[10px]'><FaFacebook/></a>
                        <a href="#" className='text-white text-[25px] m-[10px]'><FaLinkedin/></a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
