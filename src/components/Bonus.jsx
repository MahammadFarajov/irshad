import React from 'react'
import irshad_qr from "../assets/irshad-qr.png"

export default function Bonus() {
  return (
    <div className='flex text-white mb-24 bg-[#393e4a] container rounded-xl flex-col items-center gap-6'>
        <div className='flex items-center w-full justify-between p-12'>
            <div className='flex flex-col gap-14 items-start'>
                <p className='text-white text-5xl leading-[70px] font-semibold'>Skan et, Qeydiyyatdan keç 20 AZN BONUS <br /> qazan! </p>
                <button className='text-white border border-[#40b659] flex items-center justify-center gap-2 font-medium text-lg transition-colors rounded-lg py-2 px-20 bg-[#40b659] hover:bg-[#393e4a] hover:text-[#40b659]'>Daha ətraflı</button>
            </div>
            <div className='flex flex-col items-start gap-4'>
                <img src={irshad_qr} className='w-[206px] h-[206px] bg-white p-4 shadow-2xl rounded-xl' alt="" />
                <p>Yükləmək üçün skan et</p>
            </div>
        </div>
        <div className='w-full pb-5 relative flex items-center'>
            <div className='bg-[#40b659] h-2 w-[30%]'></div>
            <div className='bg-[#f6861f] h-2 w-full'></div>
            <div className='absolute left-[22%] bg-white rounded-full w-6 h-6'></div>
        </div>
    </div>
  )
}
