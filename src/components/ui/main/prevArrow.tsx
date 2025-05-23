/* eslint-disable */ 
import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="w-14 h-14 text-black  bg-opacity-40 hover:bg-opacity-100 duration-300
    cursor-pointer flex items-center justify-center z-10 absolute top-[35%] rounded-full  "
    >
      <span className="text-xl">
        <MdOutlineKeyboardArrowLeft />
      </span>
    </div>
  );
}

export default PrevArrow;