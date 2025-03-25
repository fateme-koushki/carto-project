import Image from "next/image";
import React from "react";
import apple from "../../../public/assets/footer/apple.svg";
import samsung from "../../../public/assets/footer/samsung.svg";
import nokia from "../../../public/assets/footer/nokia.svg";
import huawei from "../../../public/assets/footer/huawei.svg";
import xiaomi from "../../../public/assets/footer/xiaomi.svg";
import paypal from "../../../public/assets/footer/paypal.svg"
import visa from "../../../public/assets/footer/visa.svg"
import mastercard from "../../../public/assets/footer/mastercard.svg"
import google from "../../../public/assets/footer/google.svg"
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <div className="  w-full p-2 flex flex-col justify-between items-center cursor-text">
      <section className="flex flex-col  md:flex-row justify-around items-center w-full">
        <Image alt="img" src={apple} width={70} height={70} />
        <Image alt="img" src={samsung} width={100} height={100} />

        <Image alt="img" src={nokia} width={100} height={100} />

        <Image alt="img" src={huawei} width={80} height={80} />

        <Image alt="img" src={xiaomi} width={100} height={100} />
      </section>
      <section className="bg-[#D6E4FF] w-[90%] h-full flex-col-reverse mt-8 rounded-lg flex md:flex-row justify-between items-end md:items-start">
        <div className="flex flex-wrap-reverse  justify-end items-center px-2  gap-8 mt-8 mr-10">
        <div  >
         <section className="flex justify-center items-center">
            <h2 className="text-black font-bold ml-1 ">روش های پرداخت</h2>
            <span className="h-7 w-2 bg-primary rounded-xl"></span>
          </section>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <Image  src={mastercard} alt="img" width={50} height={50} />
              <Image  src={paypal} alt="img" width={50} height={50} />

            </div>
            <div className="flex items-center gap-3">
              <Image  src={visa} alt="img" width={50} height={50} />
              <Image  src={google} alt="img" width={50} height={50} />

            </div>
          </div>
          
         </div>
         <div >
         <section className="flex justify-center items-center">
            <h2 className="text-black font-bold ml-1 ">لینک های سریع</h2>
            <span className="h-7 w-2 bg-primary rounded-xl"></span>
          </section>
          <p className="text-[#595959]"> درباره ما </p>
          <p className="text-[#595959]"> ارتباط با ما </p>
          <p className="text-[#595959]"> بلاگ </p>
          <p className="text-[#595959]"> نقشه سایت </p>
         </div>
         <div  >
         <section className="flex justify-center items-center">
            <h2 className="text-black font-bold ml-1 ">کمک</h2>
            <span className="h-7 w-2 bg-primary rounded-xl"></span>
          </section>
          <p className="text-[#595959]"> نحوه خرید</p>
          <p className="text-[#595959]"> حمل و نقل </p>
          <p className="text-[#595959]">  ضمانت </p>
          <p className="text-[#595959]"> گارانتی </p>
         </div>
         
        </div>
        <div className="p-4 flex flex-col justify-center items-end mt-4">
          <h1 className="text-[#597EF7] font-bold text-2xl">کارتو</h1>
          <p className="text-[#595959]">کشف کنید، انتخاب کنید، لذت ببرید</p>
          <div className="mt-8">
            <div className="flex justify-center items-center">
              <h2 className="text-black font-bold ml-1 ">شبکه های اجتماعی</h2>
              <span className="h-7 w-2 bg-primary rounded-xl">
              
              </span>
            </div>
            <div className="flex justify-center items-center gap-1 ml-2 cursor-pointer">
            <a href="#"><FaFacebookF  size={20} color="black"/></a>
            <a href="#"><FiYoutube  size={20} color="black"/></a>
            <a href="#"><FaInstagram  size={20} color="black"/></a>


            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F0F0F0] mt-4  w-[90%] h-14 rounded-lg">
        <div className="flex w-full h-full  justify-center items-center text-[#8C8C8C] p-1">
        <span>
             برنامه نویس : فاطمه کوشکی 
            </span>
           
           
        </div>
      </section>
    </div>
  );
}

export default Footer;
