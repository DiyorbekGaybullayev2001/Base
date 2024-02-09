import React from 'react'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'

const Section1 = () => {
  return (
    <div className='grid grid-cols-5 h-full max-w-[1500px] m-auto justify-center mt-[100px] col-span-5 max-xl:grid-cols-3 max-sm:grid-cols-1  max-sm:m-auto]'>
        <img src={img2} alt="img2" className='h-[50px] w-[100px] m-[50px]'/>
        <img src={img4} alt="img3" className='h-[50px] w-[150px] m-[50px]'/>
        <img src={img5} alt="img4" className='h-[50px] w-[150px] m-[50px]'/>
        <img src={img6} alt="img5" className='h-[50px] w-[150px] m-[50px]'/>
        <img src={img3} alt="img6" className='h-[50px] w-[150px] m-[50px]'/>
        
    </div>
  )
}

export default Section1
