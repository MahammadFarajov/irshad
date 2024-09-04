import React, { useEffect, useState } from 'react'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { IoMdHeart } from 'react-icons/io'
import { LiaBalanceScaleSolid } from 'react-icons/lia'
import computer_toy from "../assets/computer-toy.jpg"
import { FaStar } from 'react-icons/fa'
import { BiMessage } from 'react-icons/bi'
import { PiGarage, PiShoppingCartSimple } from 'react-icons/pi'
import bosch_logo from "../assets/bosch-logo.png"
import acer_logo from "../assets/acer-logo.png"
import beko_logo from "../assets/beko-logo.png"

const images = [
  {
    img: beko_logo
  },
  {
    img: acer_logo
  },
  {
    img: acer_logo
  },
  {
    img: bosch_logo
  },
  {
    img: bosch_logo
  },
  {
    img: bosch_logo
  },
]

const products = [
  {
    img: computer_toy,
    title: `Oyuncaqlar`,
    text: `Computer Learning Machine Bei Tian BT-246R Toys`,
    priceold: `59.99 AZN`,
    price: `39.99 AZN`,
  },
  {
    img: computer_toy,
    title: `Oyuncaqlar`,
    text: `Computer Learning Machine Bei Tian BT-246R Toys`,
    priceold: `59.99 AZN`,
    price: `39.99 AZN`,
  },
  {
    img: computer_toy,
    title: `Oyuncaqlar`,
    text: `Computer Learning Machine Bei Tian BT-246R Toys`,
    priceold: `59.99 AZN`,
    price: `39.99 AZN`,
  },
  {
    img: computer_toy,
    title: `Oyuncaqlar`,
    text: `Computer Learning Machine Bei Tian BT-246R Toys`,
    priceold: `59.99 AZN`,
    price: `39.99 AZN`,
  },
]

export default function PopularProducts({
  autoSlide=true, autoSlideInterval=3000, autoSlideLogo=true, autoSlideIntervalLogo=3000
}) {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr == 0 ? products.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr == products.length - 1 ? 0 : curr + 1))
  const nextlogo = () => setCurr((curr) => (curr == images.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  useEffect(() => {
    if (!autoSlideLogo) return
    const slideInterval = setInterval(nextlogo, autoSlideIntervalLogo)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className='flex flex-col container mb-20 gap-9'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-5'>
            <p className='text-4xl font-semibold text-[#232d40]'>Populyar məhsullar</p>
            <p className='text-4xl font-semibold text-[#95979c]'>Yeni məhsullar</p>
        </div>
        <div className='flex gap-3 items-center'>
          <button onClick={prev} className='bg-white cursor-pointer p-5 rounded-full shadow-lg'>
            <GoArrowLeft size={24} color='black' />
          </button>
          <button onClick={next} className='bg-white cursor-pointer p-5 rounded-full shadow-lg'>
            <GoArrowRight size={24} color='black' />
          </button>
        </div>
      </div>

      <div className=' border-gray border overflow-auto rounded-xl'>
      <div className='flex items-center transition-transform ease-out duration-150 text-[#232d40] border-grayrounded-xl'
          style={{ transform: `translateX(-${curr * 25}%)` }}>
        {products.map((product) => (
        <div className='flex flex-col p-6 border border-gray'>
          <div className='flex w-full justify-end'>
            <LiaBalanceScaleSolid className='hover:text-[#f6861f]' size={28} />
            <IoMdHeart className='hover:text-[red]' size={28} />
          </div>
          <img src={product.img} alt="" />
          <div className='flex flex-col mb-4 gap-1'>
            <h4 className='text-[#95979c]'>{product.title}</h4>
            <h2 className='text-lg font-semibold '>
              {product.text}
            </h2>
            <div className='w-5 h-5 rounded-full border-4 bg-red-50 border-red-500'></div>
          </div>
          <div className='flex flex-col items-start mb-20 gap-3'>
            <div className='flex gap-3 items-center'>
              <div className='flex gap-1'><FaStar color='#f6861f' size={24} /><FaStar color='#f6861f' size={24} /><FaStar color='#f6861f' size={24} /><FaStar color='#f6861f' size={24} /><FaStar color='#f6861f' size={24} /></div>
              <div className='text-[#95979c] flex gap-1 items-center'><BiMessage size={24} /> 1</div>
            </div>
            <div className='flex gap-2 items-center'>
              <p className='text-[#3192ec] border border-[#3192ec] gap-1 py-1 rounded-md text-[16px] font-semibold items-center px-2 flex bg-opacity-[0.07]'><PiGarage size={28} /> Stokda var</p>
              <p className='text-[#1743df] bg-[#1743df] gap-1 py-2 rounded-md text-[16px] w-fit font-semibold items-center px-2 flex bg-opacity-[0.07]'> Faizsiz təklif </p>
            </div>
          </div>
          <div className='flex justify-between gap-3 mb-3 items-center'>
            <div className='flex flex-col items-start'>
              <p className='line-through font-medium text-[#95979c]'>{product.priceold}</p>
              <p className='text-[22px] font-semibold text-[#232d40]'>{product.price}</p>
            </div>
            <div className='bg-[#fafbfc] p-3 flex flex-col'>
              <p className='px-1 border border-black w-fit h-fit rounded-md'>6 ay</p>
              <h4 className='font-medium'>8.33 AZN</h4>
            </div>
          </div>
          <button className='text-white border border-[#40b659] flex items-center justify-center gap-2 font-bold text-lg transition-colors rounded-lg py-3 px-3 bg-[#40b659] hover:bg-white hover:text-[#40b659]'><PiShoppingCartSimple size={24} /> Səbətə əlavə et</button>
        </div>
        ))}
      </div>
      </div>
      <div className='container overflow-hidden'>
        <div className='mt-[50px] overflow-hidden transition-transform ease-out duration-150 flex items-center justify-between'
        style={{ transform: `translateX(-${curr * 7.7}%)` }}>
          {images.map((image) => (
            <img src={image.img} className='p-3 border border-gray rounded-xl' alt="" />
          ))}
        </div>
      </div>
    </div>
  )
}
