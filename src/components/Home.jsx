import React, { useEffect, useState } from 'react'
import irshad_logo from "../assets/logo_irshad.svg"
import { FaBars } from 'react-icons/fa'
import { IoIosSearch, IoMdHeartEmpty } from 'react-icons/io'
import { LiaBalanceScaleSolid } from 'react-icons/lia'
import { PiGarage, PiShoppingCartSimple } from 'react-icons/pi'
import { LuCreditCard, LuSmartphone } from 'react-icons/lu'
import irshad_ad from "../assets/irshad-ad.png"
import xiaomi_logo from "../assets/xiaomi-logo.svg"
import redmi_buds from "../assets/redmi-buds.jpg"
import { GiClick } from 'react-icons/gi'
import { IoGiftOutline, IoStorefrontOutline } from 'react-icons/io5'
import { TbTruck } from 'react-icons/tb'
import { HiOutlineCheckBadge } from 'react-icons/hi2'

const products = [
  {
    img: redmi_buds,
    logo: xiaomi_logo,
    title: ` Xiaomi Redmi Buds 4 Lite BHR6919GL (M2231E1) White`,
    priceold: `59.99 AZN`,
    price: `39.99 AZN`,
  },
]

export default function Home( autoSlide=true, autoSlideInterval=3000 ) {
  const [curr, setCurr] = useState(0)
  const next = () => setCurr((curr) => (curr == products.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className='flex flex-col container mb-[50px] mt-6'>
      <div className="flex items-center w-full justify-center gap-12">
        <img className='w-[109px] h-[49px]' src={irshad_logo} alt="" />
        <div className='flex items-center gap-3 relative'>
          <button className='text-white flex items-center rounded-lg py-3 px-5 gap-2 bg-[#40b659]'><FaBars /> Kataloq</button>
          <input placeholder='a' className='border border-opacity-100 w-[795px] rounded-lg py-3 px-5 focus-visible:outline-none' type="text" />
          <label className='absolute right-2 gap-2 flex' htmlFor="">
            <div className="h-6 border-r opacity-100 "></div>
            <IoIosSearch color='gray' size={24} />
          </label>
        </div>
        <div className='flex items-center gap-8'>
          <p className='flex flex-col items-center opacity-95'><LiaBalanceScaleSolid size={28} /> Müqayisə</p>
          <p className='flex flex-col items-center opacity-95'><IoMdHeartEmpty size={28} /> Bəyəndim</p>
          <p className='flex flex-col items-center opacity-95'><PiShoppingCartSimple size={28} /> Səbət</p>
          <button className='flex flex-col items-center gap-3 w-full text-[#40b659] rounded-lg py-3 px-5 transition-colors hover:text-white border border-[#40b659] hover:bg-[#40b659]'>
            <LuCreditCard size={24} />
            Aylıq ödəniş
          </button>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <img src={irshad_ad} className='rounded-xl' alt="" />
        <div className='flex overflow-auto'
        style={{ transform: `translateX(-${curr * 100}%)` }}>
        {products.map((product) => (
          <div className='h-full border w-[421px] rounded-xl border-[#ffd436] flex flex-col items-center'>
          <div className='bg-[#ffd436] w-full py-4 px-8 rounded-t-xl flex items-center justify-between'><p>Həftənin təklifi</p> <p>01 Gün 17:21:40</p></div>
          <div className='py-4 px-6 flex flex-col gap-[15px] items-center'>
            <div className='flex items-center justify-between'><h3 className='font-bold text-xl text-[#232d40]'>  {product.title}  </h3> <img className='w-[45px] h-[47px]' src={product.logo} alt="" /></div>
            <div className='w-full flex justify-between'>
              <img src={product.img} className='w-[184px] h-[184px]' alt="" />
              <div className='flex flex-col items-end gap-2 justify-start'>
                <p className='text-[#1743df] bg-[#1743df] gap-1 py-1 rounded-md text-[11px] font-semibold items-center px-2 flex bg-opacity-[0.07]'><PiGarage size={19} /> Stokda var</p>
                <p className='text-[#1743df] bg-[#1743df] gap-1 py-1 rounded-md text-[11px] w-fit font-semibold items-center px-2 flex bg-opacity-[0.07]'> Faizsiz təklif </p>
                <p className='text-[#f6861f] bg-[#f6861f] gap-1 py-1 rounded-md text-[11px] w-fit font-semibold items-center px-2 flex bg-opacity-[0.07]'>  - 20 AZN nağd alışda endirim  </p>
              </div>
            </div>
            <div className='flex justify-between w-full items-center'>
                <div className='flex flex-col items-start'>
                  <p className='line-through font-medium text-[#95979c]'>{product.priceold}</p>
                  <p className='text-[22px] font-semibold text-[#232d40]'>{product.price}</p>
                </div>
                <button className='flex items-center gap-2 text-[white] bg-[#f6861f] rounded-lg py-3 px-5 transition-colors border hover:text-[#f6861f] border-[#f6861f] hover:bg-[white]'>
                  <GiClick size={24} />
                  Aylıq ödəniş
                </button>
                <button className='text-white border border-[#40b659] transition-colors rounded-lg py-3 px-3 bg-[#40b659] hover:bg-white hover:text-[#40b659]'><PiShoppingCartSimple size={24} /></button>
              </div>
          </div>
        </div>
        ))}
        </div>
      </div>
      <div className='bg-[#fafbfc] px-14 flex items-center justify-between rounded-3xl mt-6 py-9 w-full container'>
        <div className='text-xl flex flex-col gap-4 items-center font-semibold'>
          <IoStorefrontOutline size={38} color='#40b659' />
          46 mağaza 
        </div>
        <div className='h-20 border-l border-l-black/20'></div>
        <div className='text-xl flex flex-col gap-4 items-center font-semibold'>
          <LuSmartphone size={38} color='#40b659' />
          40 mindən çox seçim 
        </div>
        <div className='h-20 border-l border-l-black/20'></div>
        <div className='text-xl flex flex-col gap-4 items-center font-semibold'>
          <TbTruck size={38} color='#40b659' />
          Sürətli çatdırılma 
        </div>
        <div className='h-20 border-l border-l-black/20'></div>
        <div className='text-xl flex flex-col gap-4 items-center font-semibold'>
          <HiOutlineCheckBadge  size={38} color='#40b659' />
          Rəsmi zəmanət 
        </div>
        <div className='h-20 border-l border-l-black/20'></div>
        <div className='text-xl flex flex-col gap-4 items-center font-semibold'>
          <IoGiftOutline size={38} color='#40b659' />
          Bonus proqramı  
        </div>
        <div className='h-20 border-l border-l-black/20'></div>
        <div className='text-xl flex flex-col gap-4 items-center font-semibold'>
          <PiShoppingCartSimple size={38} color='#40b659' />
          Sürətli alış-veriş 
        </div>       
      </div>
    </div>
  )
}
