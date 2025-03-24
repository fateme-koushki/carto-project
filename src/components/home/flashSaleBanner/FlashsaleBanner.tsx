import React from 'react'

export default  function FlashSaleBanner() {
  return (
    <div className='h-[100vh] text-center flex justify-center items-center p-2 mt-12'>
    <div className='h-[21rem] md:h-[23rem] w-[95%] bg-cover bg-center flex justify-center items-center text-center rounded-lg ' style={{ backgroundImage: "url('/assets/banner.jpg')" }} >
        <div className= 'w-[95%] h-[18rem] md:h-[20rem] p-4 bg-[#00000099] backdrop-blur-md flex flex-col justify-center items-center gap-3  rounded-lg' >
            <h2 className='text-white text-xl md:text-3xl -tracking-tight ' >فروش فلش: قیمت های بی نظیر در برندهای برتر گوشی های هوشمند</h2>
            <h4 className='text-[#BFBFBF] md:text-2xl -tracking-tight'>معاملات فقط برای مدت زمان محدود موجود است.</h4>
            <button className=' w-28 h-10 border border-[#ADC6FF] hover:bg-slate-600 rounded-lg text-[#ADC6FF]' >بیشتر بخوانید</button>
        </div>
      
    </div>
    </div>
  )
}


