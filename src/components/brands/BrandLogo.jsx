import React from 'react'
import B1 from '../../assets/brands/brand1.png'
import B2 from '../../assets/brands/brand2.png'
import B3 from '../../assets/brands/brand3.png'
import B4 from '../../assets/brands/brand7.png'
import B5 from '../../assets/brands/brand5.png'
import B6 from '../../assets/brands/brand6.png'
const BrandLogo = () => {
  return (
    <div className='dark:bg-[#fffff4]'>
<div className='container my-12 '>
<h1 className='text-center text-3xl font-semibold sm:text-3xl text-[#b58037] dark:text-[#403122]'>Thank You To Our National Sponsors</h1>
{/* <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-[#b58037] dark:text-[#b58037]"
            >
             Thank You To Our National Sponsors
            </h1> */}
<div className='flex flex-wrap items-center justify-evenly gap-3 py-6 md:px-32'>
<img src={B1} alt='brands' className=' w-1/12'/>
<img src={B2} alt='brands' className=' w-1/6'/>
{/* <img src={B3} alt='brands' className=' w-1/6'/> */}
<img src={B4} alt='brands' className=' w-1/6'/>
<img src={B5} alt='brands' className=' w-1/6'/>
<img src={B6} alt='brands' className=' w-1/6'/>
</div>
</div>

    </div>
  )
}

export default BrandLogo