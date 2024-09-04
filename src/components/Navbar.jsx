import React from 'react'
import { FaApple } from 'react-icons/fa'
import { SiSamsung } from 'react-icons/si'
import honorlogo from "../assets/honor-logo (1).png"
import number from "../assets/nomre.svg"
import azflag from "../assets/Azeribaijan-flag.png"
import { MdKeyboardArrowDown } from 'react-icons/md'
import { HiOutlineUser } from 'react-icons/hi'

export default function Navbar() {
  return (
    <header className='border-b-[#ecedf0] border-b'>
        <nav className='container flex justify-between items-center'>
              <ul className='flex items-center gap-5'>
                  <li className='text-[13px] text-[#5b5f66] h-fit border-b-white border-b leading-5 font-normal hover:border-b-[#5b5f66] hover:border-b transition-all'>Kampaniyalar</li>
                  <li className='text-[13px] text-[#5b5f66] h-fit border-b-white border-b leading-5 font-normal hover:border-b-[#5b5f66] hover:border-b transition-all'>Mağazalar</li>
                  <li className='text-[13px] text-[#5b5f66] h-fit border-b-white border-b leading-5 font-normal hover:border-b-[#5b5f66] hover:border-b transition-all'>Korporativ</li>
                  <li className='text-[13px] text-[#5b5f66] h-fit border-b-white border-b leading-5 font-normal transition-all'><SiSamsung color='black' size={75} /></li>
                  <li className='text-[10.4px] text-[#000000] h-fit border-b-white border-b font-semibold hover:border-b-[#5b5f66] hover:border-b flex items-center gap-2 leading-3 transition-all'><FaApple size={35} /> Authorized <br /> Reseller</li>
                  <li className='text-[13px] text-[#5b5f66] h-fit border-b-white border-b leading-5 font-normal hover:border-b-[#5b5f66] hover:border-b pb-1 transition-all'><img className='w-20 h-4' src={honorlogo} alt="" /></li>
                  <li className='text-[#f6861f] cursor-pointer border h-fit border-[#f6861f] text-[14px] py-[4px] font-semibold transition-colors hover:bg-[#f6861f] hover:text-white px-3 rounded-[6px]'>Outlet</li>
                  <li className='text-[#f6861f] cursor-pointer border h-fit border-[#f6861f] text-[14px] py-[4px] font-semibold transition-colors hover:bg-[#f6861f] hover:text-white px-3 rounded-[6px]'>Kondisonerler</li>
              </ul>
              <div className='flex gap-4 items-center'>
                <img src={number} className='w-20 h-5' alt="" />
                <div className="h-6 border-r opacity-100 "></div>
                <p className='flex gap-2 items-center'><img src={azflag} className='w-7 h-3.5' alt="" /> Azerbaycan dili <MdKeyboardArrowDown size={24} /></p>
                <div className="h-6 border-r opacity-100 "></div>
                <p className='flex items-center gap-2'><HiOutlineUser size={25} /> Şəxsi kabinet</p>
              </div>
        </nav>
    </header>
  )
}
