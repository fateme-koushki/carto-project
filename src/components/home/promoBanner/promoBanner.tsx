import React from 'react'
// import banner from "../../../../public/assets/banner.png"
export default  function PromoBanner() {
  return (
    <div className='mt-12 text-center flex justify-center items-center'>
    <div className='h-[21rem] md:h-[23rem] w-[95%] bg-cover bg-center flex justify-center items-center text-center rounded-lg ' style={{ backgroundImage: "url('/assets/banner.jpg')" }} >
        <div className= 'w-[95%] h-[18rem] md:h-[20rem] bg-[#00000099] backdrop-blur-md flex flex-col justify-center items-center gap-3  rounded-lg' >
            <h2 className='text-white text-xl md:text-3xl -tracking-tight ' >راه اندازی انحصاری: هم اکنون جدیدترین گوشی های هوشمند را پیش خرید کنید!</h2>
            <h4 className='text-[#BFBFBF] md:text-2xl -tracking-tight'>اولین کسی باشید که صاحب جدیدترین فناوری می شود.</h4>
            <button className=' w-28 h-10 border border-[#ADC6FF] rounded-lg text-[#ADC6FF] hover:bg-slate-600' >بیشتر بخوانید</button>
        </div>
      
    </div>
    </div>
  )
}






