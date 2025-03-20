import React from 'react'
import Image from 'next/image'
import Link from 'next/link'




export default  function Categories() {
    const catrgories:object[] = [
        {name : "گوشی ها" , icon :"/categories/phone.svg"},
        {name : " ایرپادها" , icon : "/categories/airpods.svg"},
        {name : "ساعت هوشمند" , icon:"/categories/smart-watch.svg"},
        {name : "لوازم جانبی" , icon : "/categories/accessory.svg" },
        {name : "قاب گوشی" , icon:"/categories/phone-case.svg"},

    ]
  return (
    <div className='w-full flex  md:justify-center overflow-x-auto scrollbar-hidden mt-10'>  
    <div className='flex flex-nowrap items-center gap-8 cursor-pointer'>  
        {  
            catrgories.map((category) => (  
                <Link href={"#"} key={category?.name} className='flex flex-col items-center'>  
                    <div className='w-24 h-24 md:w-28 md:h-28 border border-primary rounded-full flex items-center justify-center'>  
                       <Image alt='img' width={50} height={50} src={category?.icon} /> 
                    </div>  
                    <h2 className='font-medium text-lg text-neutral-950 mt-2'>{category?.name}</h2>  
                </Link>  
            ))  
        }  
    </div>  
</div>
  )
}


