import Image from 'next/image'
import React from 'react'

export default  function BenefitsUi({title , disc , img }) {
  return (
    <div className='relative mt-20 md:mt-32 lg:mt-20' >
    <Image src={img} alt='img' width={250} height={250}  className='absolute z-30 left-2 md:left-[-80px] md:top-[-111px] lg:left-[-130px] top-[-65px] lg:top-[20px]'/>
   
   <div className=' w-80 h-48 rounded-lg bg-[#D6E4FF] text-center mt-14 flex justify-center md:justify-start items-end md:items-center '>
     <div className='bg-white w-64 h-36 rounded-lg  text-start tracking-wider p-2'  >
      <h1 className='text-2xl font-medium  '>{title}</h1>
      <span className='text-[#595959] text-sm  '>{disc}</span>
     </div>
     </div>
    </div>
   
  )
}


