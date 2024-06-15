import {  GrLocation, GrMailOption } from "react-icons/gr"
import { IoTimeOutline } from "react-icons/io5";

const TopNav = () => {
  return (
    <div className="bg-[#37393F] fixed top-0 z-50 font-inter text-white flex items-center justify-center px-[5%] w-full h-[60px]">
      <div className="max-w-[1400px] mx-auto w-full flex gap-2 ss:gap-3 items-center justify-between">
      <div className="flex items-center gap-5 md:gap-10">
      <div className="hidden sm:flex items-center gap-2">
      <GrLocation color="#FBBD02"/>
      <span className="text-sm ">1 Warehouse Road, Apapa, Lagos</span>
      </div>
      
      <div className="flex items-center gap-2">
      <GrMailOption color="#FBBD02"/>
      <span className="text-[10px] ss:text-sm ">Eco-Friendly Cooking</span>
      </div>
      </div>
      
      <div className="flex items-center gap-10">
      <div className="flex items-center gap-2">
      <IoTimeOutline color="#FBBD02"/>
      <span className="text-[10px] whitespace-nowrap ss:text-sm ">June 30: 9:00am - 5:00pm</span>
      </div>
      
      </div>
      </div>
    </div>
  )
}

export default TopNav
