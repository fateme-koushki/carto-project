import ProdutsSection from '@/components/ui/main/produtsSection'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Product } from '../specialOffers/offersProduct'

export default  function NewProdcuts() {
    const specialProducts:Product[] = [
        {name : "آیفون 14 پلاس"  ,img : "/assets/phone1.png" , id:1 ,price : "1000000000" , discount : "10"},
        {name : "آیفون 14 پلاس"  ,img : "/assets/phone2.png" , id:2 ,price : "9000000000" , discount : "15"},
        {name : "آیفون 14 پلاس"  ,img: "/assets/phone3.png" , id:3, price : "9000000000", discount : "10"},
        {name : "آیفون 14 پلاس"  ,img : "/assets/phone4.png" , id:4 ,price : "9000000000" , discount : "15"},
        {name : "آیفون 14 پلاس"  ,img : "/assets/phone1.png" , id:6 ,price : "1000000000" , discount : "10"},
        {name : "آیفون 14 پلاس"  ,img : "/assets/phone2.png" , id:2 ,price : "9000000000" , discount : "15"},
        {name : "آیفون 14 پلاس"  ,img: "/assets/phone3.png" , id:5, price : "9000000000", discount : "10"},
        {name : "آیفون 14 پلاس"  ,img : "/assets/phone4.png" , id:8 ,price : "9000000000" , discount : "15"},
        // {name : "iphone"  ,img : {phone5} , id:5 ,price : "1000000000" , discount : "15"},
        // {name : "iphone"  ,img : {phone6} , id:6 ,price : "9000000000" , discount : "10"}
    
      ]
  return (
    <div className='h-full mt-8 flex justify-center items-center mx-auto text-center overflow-x-auto'>
        <div className='w-[94%] h-full rounded-lg mx-auto text-center  '>
          <div className='flex flex-col-reverse justify-start items-end md:flex-row md:justify-between text-slate-100 font-medium m-2'>
            <Link href={"#"} className='text-lg flex justify-center items-center gap-2 cursor-pointer'>
              <span>
                <MdKeyboardArrowRight size={20} className='text-[#ADC6FF]' />
              </span>
              <span className='text-neutral-800'>بیشتر ...</span>
            </Link>
            <div className='font-medium flex justify-center items-center gap-2'>
              <span className='text-xl text-neutral-800'>محصولات جدید</span>
              <span className='w-1 h-8 bg-[#ADC6FF] rounded-lg'></span>
            </div>
          </div>
          <ProdutsSection  products={specialProducts}  />
         
         
        </div>
      </div>
  )
}


