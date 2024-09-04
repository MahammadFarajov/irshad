import React from 'react'
import irshad_qr from "../assets/irshad-qr.png"
import white_num from "../assets/ulduz-white.svg"
import { FaHouse, FaInstagram } from 'react-icons/fa6'
import { LiaFacebook, LiaTelegramPlane } from 'react-icons/lia'
import { TfiYoutube } from 'react-icons/tfi'
import { BsWhatsapp } from 'react-icons/bs'
import { AiFillTikTok } from 'react-icons/ai'
import { PiLinkedinLogo } from 'react-icons/pi'
import { RxTwitterLogo } from 'react-icons/rx'
import logo from "../assets/footer-logo.svg"
import studiologo from "../assets/srudio-logo.svg"
import { motion } from 'framer-motion'
export default function Footer() {
  return (
    <div className='flex flex-col py-14 bg-[#18181a] gap-[100px] relative text-[#95979c] items-start justify-between'>
        <div className='w-full pb-5 absolute top-0 flex items-center'>
            <motion.div initial={{ width: 0 }} transition={{ duration: 1 }} whileInView={{ width: 550 }} className='bg-[#40b659] h-2'></motion.div>
            <div className='bg-[#f6861f] h-2 w-full'></div>
            <motion.div initial={{left: 0}} transition={{ duration: 1}} whileInView={{left: 419}} className='absolute left-0 bg-white rounded-full w-6 h-6'></motion.div>
        </div>
        <div className='container flex justify-between items-center'>
            <div className='border-[#545454] flex flex-col items-center gap-4 border rounded-xl px-[54px] pt-10 pb-8'>
                <img src={irshad_qr} className='w-[158px] rounded-lg h-[158px]' alt="" />
                <p className='text-center w-[158px]'>Skan et, Qeydiyyatdan keç 20 AZN BONUS qazan!</p>
            </div>
            <div className='flex gap-20'>
              <ul className='flex flex-col '>
                <li className='text-white font-semibold text-2xl mb-9'>Şirkət</li>
                <li className='hover:border-b-[#545454] leading-8 transition-colors cursor-pointer w-fit border-b-2 border-b-[#18181a]'>Haqqımızda</li>
                <li className='hover:border-b-[#545454] leading-8 transition-colors cursor-pointer w-fit border-b-2 border-b-[#18181a]'>Mağazalar</li>
                <li className='hover:border-b-[#545454] leading-8 transition-colors cursor-pointer w-fit border-b-2 border-b-[#18181a]'>Vakansiyalar</li>
                <li className='hover:border-b-[#545454] leading-8 transition-colors cursor-pointer w-fit border-b-2 border-b-[#18181a]'>Kampaniyalar</li>
                <li className='hover:border-b-[#545454] leading-8 transition-colors cursor-pointer w-fit border-b-2 border-b-[#18181a]'>Şərtlərimiz</li>
                <li className='hover:border-b-[#545454] leading-8 transition-colors cursor-pointer w-fit border-b-2 border-b-[#18181a]'>Çatdırılma qaydaları</li>
                <li className='hover:border-b-[#545454] leading-8 transition-colors cursor-pointer w-fit border-b-2 border-b-[#18181a]'>Bonuslardan istifadə qaydaları</li>
              </ul>
              <ul className='flex flex-col mb-auto'>
                <li className='text-white font-semibold text-2xl mb-9'>Müştəri üçün</li>
                <li className='hover:border-b-[#545454] leading-8 transition-colors cursor-pointer w-fit border-b-2 border-b-[#18181a]'>Sual-Cavab</li>
                <li className='hover:border-b-[#545454] leading-8 transition-colors cursor-pointer w-fit border-b-2 border-b-[#18181a]'>Hissə-hissə ödəniş</li>
                <li className='hover:border-b-[#545454] leading-8 transition-colors cursor-pointer w-fit border-b-2 border-b-[#18181a]'>Məxfilik siyasəti</li>
                <li className='hover:border-b-[#545454] leading-8 transition-colors cursor-pointer w-fit border-b-2 border-b-[#18181a]'>Korporativ satışlar</li>
                <li className='hover:border-b-[#545454] leading-8 transition-colors cursor-pointer w-fit border-b-2 border-b-[#18181a]'>İstifadə qaydaları</li>
                <li className='hover:border-b-[#545454] leading-8 transition-colors cursor-pointer w-fit border-b-2 border-b-[#18181a]'>Bloq</li>
                <li className='hover:border-b-[#545454] leading-8 transition-colors cursor-pointer w-fit border-b-2 border-b-[#18181a]'>Şikayət və təkliflər</li>
              </ul>
            </div>
            <div className='flex flex-col gap-5'>
              <p className='text-white font-semibold text-2xl mb-9'>Əlaqə</p>
              <div className='flex items-center gap-[30px] justify-between'>
                <img src={white_num} className='w-[88px] h-[26px]' alt="" />
                <div className='gap-4 flex py-7 border-b border-b-[#585858] items-center'>
                  <FaHouse className='border border-[#585858] rounded-full' color='white' size={32} />
                  <p className='text-white font-semibold text-xl'> Əhməd Rəcəbli 1/9, <br /> Azərbaycan, Bakı şəhəri </p>
                </div>
              </div>
              <div className='mt-4 flex flex-col gap-[22px]'>
                <p className='text-white font-semibold text-lg'>Bizi izləyin</p>
                <div className='flex items-center justify-between'>
                  <LiaFacebook size={32} className='cursor-pointer' color='white' />
                  <FaInstagram size={32} className='cursor-pointer' color='white' />
                  <TfiYoutube size={32} className='cursor-pointer' color='white' />
                  <BsWhatsapp size={32} className='cursor-pointer' color='white' />
                  <LiaTelegramPlane size={32} className='cursor-pointer' color='white' />
                  <AiFillTikTok size={32} className='cursor-pointer' color='white' />
                  <PiLinkedinLogo size={32} className='cursor-pointer' color='white' />
                  <RxTwitterLogo size={32} className='cursor-pointer' color='white' />
                </div>
              </div>
            </div>
        </div>
        <div className='flex items-center container justify-between'>
          <img src={logo} className='w-[91px] h-10' alt="" />
          <p> İrşad © 2000 - 2024. Bütün hüquqlar qorunur. </p>
          <p className='flex items-center mr-[256px] gap-2'> Site by <img src={studiologo} className='w-[19px] h-[18px]' alt="" /> <p className='hover:border-b-[#95979c] text-[#95979c] leading-8 transition-colors cursor-pointer w-fit border-b-2 border-b-[#18181a]'><strong>Jeykhun Imanov</strong></p> Studio</p>
        </div>
    </div>
  )
}
