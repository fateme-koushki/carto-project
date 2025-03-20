import BenefitsUi from '@/components/ui/main/benefitsUi'
import React from 'react'

export default  function BenefitsSection() {
  return (
    <div className='h-[100vh] flex justify-between mx-auto mt-20  w-full '>
        <div className= 'hidden md:block w-72 h-48 bg-[#597EF7] p-8 blur-[120px] mt-60' ></div>
        {/* content main  */}
     <div className='w-full  flex flex-col  items-center text-center mx-auto gap-2'  >
     <h1 className='text-2xl md:text-4xl'>از مزایای خرید در  فروشگاه ما لذت ببرید</h1>
    <div  className=' flex flex-col md:flex-row md:gap-x-2 lg:gap-80' >
    <BenefitsUi  title={"تجربه خرید راحت و مطمئن"} disc={"حمل و نقل رایگان، بازگشت آسان و گزینه های پرداخت امن."} img={"/assets/phonehumen.png"}  />
    <BenefitsUi  title={"محصول ایده آل را برای خود بیابید"} disc={"محصولات ما را مرور کنید و موارد دلخواه خود را کشف کنید."} img={"/assets/phonehumen.png"}  />
    </div>
<div className='flex flex-col' >
<BenefitsUi  title={"مرجوعی و تعویض بدون دردسر"} disc={"ما به شما این امکان را می دهیم که بدون دردسر هر کالایی را برگردانید یا مبادله کنید."} img={"/assets/phonehumen.png"}  />
</div>    
     </div>
     
        <div className='hidden md:block  w-72 h-48 bg-[#597EF7]  p-8 blur-[120px] mt-14' ></div>

      
    </div>
  )
}


