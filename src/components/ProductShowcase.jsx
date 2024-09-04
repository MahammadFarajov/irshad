import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import reklam_samsung from "../assets/reklam-samsung.jpg"
import { CgPlayButton } from 'react-icons/cg'

export default function ProductShowcase() {
  return (
    <div className='flex flex-col gap-9 mb-10 container items-center'>
        <div className='flex items-center w-full justify-between'>
            <div className='flex items-center gap-5'>
                <p className='text-4xl font-semibold text-[#232d40]'>Məhsul icmalı</p>
                <p className='text-4xl font-semibold text-[#95979c]'>İrşad Youtube</p>
            </div>
            <button className='text-white border border-[#f23620] flex items-center justify-center gap-2 font-medium text-lg transition-colors rounded-md bg-[#f23620] px-5 py-[11px] hover:bg-white hover:text-[#f23620]'><FaYoutube size={24} />  Youtube hesabına keç </button>
        </div>
        <div className='flex items-center gap-6 justify-between w-full '>
            <div className='flex flex-col items-center'>
                <div className='mb-7 relative'>
                    <img src={reklam_samsung} className='rounded-lg' alt="" />
                    <div className='bg-black/30 hover:bg-[#20c997]/30 top-0 absolute w-[496px] h-[279px] cursor-pointer flex justify-center transition-colors items-center rounded-lg'>
                        <div className='rounded-full bg-white flex transition-all justify-center items-center p-1'>
                            <CgPlayButton color='#20c997' size={100} />
                            {/* <p className='font-medium text-lg'>Videonu izlə</p> */}
                        </div>
                    </div>
                </div>
                <p className='font-semibold text-2xl text-[#232d40] hover:text-[#40b659] transition-colors'> Artıq SAMSUNG vaxtıdır.4 MƏHSUL bir arada! </p>
                <p className='text-[#95979c]'> Bu dəfəki yenilikləri ancaq icmalımıza sığdıra bilərdik!😍 <br /> 
                SAMSUNG Galaxy Z Fold6, Z Flip6, smart saatları və qulaqlığı👌🏻 <br />
                SAMSUNG'un növbəti qatlana bilən Galaxy Z Fold6 və Z Flip6 modelləri Galaxy AI sistemi ilə bütün sərhədləri aşıb!😉 <br />
                İcmalı dinlədikcə anladıq ki, bu sezon Galaxy'də əyləncənin ucu-bucağı görünmüyəcək!🤩 </p>
            </div>
            <div className='flex flex-col mb-auto items-center'>
            <div className='mb-7 relative'>
                    <img src={reklam_samsung} className='rounded-lg' alt="" />
                    <div className='bg-black/30 hover:bg-[#20c997]/30 top-0 absolute w-[496px] h-[279px] cursor-pointer flex justify-center transition-colors items-center rounded-lg'>
                        <div className='rounded-full bg-white flex transition-all justify-center items-center p-1'>
                            <CgPlayButton color='#20c997' size={100} />
                            {/* <p className='font-medium text-lg'>Videonu izlə</p> */}
                        </div>
                    </div>
                </div>
                <p className='font-semibold text-2xl text-[#232d40] hover:text-[#40b659] transition-colors'>  Tıxaclardan yan keç, məsafələr gözünə görünməsin!😎 </p>
                <p className='text-[#95979c]'>  Həyatın doğru seçimlərlə dolub-daşsın deyə, növbəti məlumat dolu icmalla qarşındayıq!🥳 <br /> 
                Seçdiyin velosipedi 18 aylıq KOMİSSİYASIZ, faizsiz və ilkin ödənişsiz şərtlərlə sənə uyğun ünvandan sifariş edə bilərsən!💚  <br /></p>
            </div>
            <div className='flex flex-col mb-auto items-center'>
            <div className='mb-7 relative'>
                    <img src={reklam_samsung} className='rounded-lg' alt="" />
                    <div className='bg-black/30 hover:bg-[#20c997]/30 top-0 absolute w-[496px] h-[279px] cursor-pointer flex justify-center transition-colors items-center rounded-lg'>
                        <div className='rounded-full bg-white flex transition-all justify-center items-center p-1'>
                            <CgPlayButton color='#20c997' size={100} />
                            {/* <p className='font-medium text-lg'>Videonu izlə</p> */}
                        </div>
                    </div>
                </div>                <p className='font-semibold text-2xl text-[#232d40] hover:text-[#40b659] transition-colors'>  Eşitdik ki, seçim arasında qalmısan.😉  </p>
                <p className='text-[#95979c]'>  Özümüzü tez çatdırdıq!😍 <br /> 
                SamsungGalaxyA35 və #SamsungGalaxyA55 5G modelləri ilə yaxından tanış ol, sizə yaxın mağazamıza gələrək və ya onlayn qaydada sifariş edərək sahib ol!💚 <br />
                12 mayadək modelləri #KOMİSSİYASIZ, faizsiz və ilkin ödənişsiz şərtlərlə əldə edə bilərsən!🥳 <br />
                ✅Mobil tətbiqdən sifariş et, 2 QAT bonus qazan  </p>
            </div>
        </div>
    </div>
  )
}
