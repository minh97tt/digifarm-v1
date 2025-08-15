
import DigiFarmSvg from '../assets/home/farm.svg'
import DigiFactSvg from '../assets/home/factory.svg'
import DigiRetailSvg from '../assets/home/retails.svg'

import Lottie from 'lottie-react';
import arrowJson from '../assets/arrow_green.json'

import './Navigation.css'
import { useNavigate } from 'react-router-dom'

const ArrowLottie = () => {
  return (
    <Lottie
      animationData={arrowJson}
      className='w-25'
    />
  )
}

const ArrowSvg = ({ className }: { className?: string }) => {
  return (
    <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_370_479)">
        <path d="M5.99852 5.97524C5.99418 5.77719 5.92111 5.58789 5.79345 5.444L1.29344 0.444002C1.15497 0.291416 0.965443 0.203611 0.766389 0.199834C0.567335 0.196056 0.375001 0.276614 0.231538 0.42385C0.0880744 0.571087 0.00517975 0.772989 0.00104245 0.985301C-0.00309484 1.19761 0.0718584 1.40301 0.209462 1.55648L4.21142 6.00024L0.209462 10.444C0.071858 10.5975 -0.00309526 10.8029 0.00104201 11.0152C0.00517929 11.2275 0.0880739 11.4294 0.231537 11.5766C0.375001 11.7239 0.567334 11.8044 0.766389 11.8007C0.965443 11.7969 1.15497 11.7091 1.29343 11.5565L5.79345 6.55648C5.86222 6.47907 5.9158 6.38777 5.95102 6.28795C5.98624 6.18814 6.00239 6.08182 5.99852 5.97524Z" fill="#7AAD85" />
      </g>
      <defs>
        <clipPath id="clip0_370_479">
          <rect width="12" height="6" fill="white" transform="translate(6) rotate(90)" />
        </clipPath>
      </defs>
    </svg>

  )
};

const ArrowVerticalSvg = () => {
  return (
    <svg width="6" height="40" viewBox="0 0 6 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 40L5.88675 35L0.113247 35L3 40ZM3 0L2.5 -2.18557e-08L2.5 1L3 1L3.5 1L3.5 2.18557e-08L3 0ZM3 3L2.5 3L2.5 5L3 5L3.5 5L3.5 3L3 3ZM3 7L2.5 7L2.5 9L3 9L3.5 9L3.5 7L3 7ZM3 11L2.5 11L2.5 13L3 13L3.5 13L3.5 11L3 11ZM3 15L2.5 15L2.5 17L3 17L3.5 17L3.5 15L3 15ZM3 19L2.5 19L2.5 21L3 21L3.5 21L3.5 19L3 19ZM3 23L2.5 23L2.5 25L3 25L3.5 25L3.5 23L3 23ZM3 27L2.5 27L2.5 29L3 29L3.5 29L3.5 27L3 27ZM3 31L2.5 31L2.5 33L3 33L3.5 33L3.5 31L3 31ZM3 35L2.5 35L2.5 37L3 37L3.5 37L3.5 35L3 35Z" fill="#7AAD85" />
    </svg>

  )
}

function DesktopNavigation() {
  const navigate = useNavigate()
  return (
    <nav className="w-full z-1 md:px-10 sm:px-6 nav-container">
      <div className="max-w-7xl shadow-md md:rounded-[20px] rounded-2xl bg-gradient-to-tr from-[rgba(244,250,245,1)] to-[rgba(172,221,187,1)]">
        <div className="md:pt-1 md:pb-6 py-2">
          <h2 className="text-center md:text-2xl md:my-4 my-1 text-lg font-bold text-text-primary">Hệ thống chuỗi cung ứng</h2>

          <div className="flex items-stretch gap-2 md:flex-row flex-col px-4 justify-center nav-items">

            {/* DigiFarm */}
            <div className="flex-1 relative group nav-item cursor-pointer hover:[&_.logo]:scale-110" onClick={() => navigate('/farm')}>
              <div className='rounded-[20px] border-1 bg-white shadow-lg border-card-border p-4 h-full'>
                <div
                  className="flex flex-row rounded-xl transition-all duration-200 gap-3 items-center md:items-start"
                >
                  <div className="transition-transform logo">
                    <img src={DigiFarmSvg} alt="DigiFarm" className="max-w-none md:w-[56px] w-[40px] cursor-pointer" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className='flex items-center justify-between'>
                      <div className="font-bold text-[#007836] md:text-[20px] text-[16px]">DigiFarm</div>
                      <ArrowSvg />
                    </div>
                    <div className="font-normal text-base text-[#468462] hidden md:block">Nền tảng quản trị nông nghiệp toàn diện công nghệ cao</div>
                  </div>
                </div>
              </div>


            </div>

            {/* <ArrowSvg className='md:flex hidden' /> */}
            {/* <img src={ArrowGif} alt="Arrow" className="w-[60px] max-w-[60px] self-center hidden md:block" /> */}
            <div className='self-center -mx-6 hidden md:block [transform:scaleX(1.3)]'>
              <ArrowLottie />
            </div>
            <div className='md:hidden inline-block'>
              <ArrowVerticalSvg />
            </div>

            {/* DigiFactory */}
            <div className="flex-1 relative group nav-item cursor-pointer hover:[&_.logo]:scale-110" onClick={() => navigate('/factory')}>
              <div className='rounded-[20px] border-1 bg-white shadow-lg border-card-border p-4 h-full'>
                <div
                  className="flex flex-row rounded-xl transition-all duration-200 items-center md:items-start"
                >
                  <div className="transition-transform logo">
                    {/* <DigiFactIcon className='md:!h-15 md:!w-34 !h-12 !w-30' /> */}
                    <img src={DigiFactSvg} alt="DigiFarm" className="max-w-none md:w-[56px] w-[40px] cursor-pointer mr-3" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className='flex items-center justify-between'>
                      <div className="font-bold text-[#007836] md:text-[20px] text-[16px]">DigiFactory</div>
                      <ArrowSvg />
                    </div>
                    <div className="font-normal text-base text-[#468462] hidden md:block">Giải pháp quản lý sản xuất và kiểm soát chất lượng thông minh</div>
                  </div>
                </div>
              </div>
            </div>

            {/* <ArrowSvg className='md:flex hidden' /> */}
            <div className='self-center -mx-6 hidden md:block [transform:scaleX(1.3)]'>
              <ArrowLottie />
            </div>

            <div className='md:hidden inline-block'>
              <ArrowVerticalSvg />
            </div>

            {/* DigiRetail */}
            <div className="flex-1 relative group nav-item cursor-pointer hover:[&_.logo]:scale-110" onClick={() => navigate('/retails')}>
              <div className='rounded-[20px] border-1 bg-white shadow-lg border-card-border p-4 h-full'>
                <div
                  className="flex flex-row rounded-xl transition-all duration-200 items-center md:items-start"
                >

                  <div className="transition-transform logo">
                    {/* <DigiRetailsIcon className='md:!h-15 md:!w-34 !h-10 !w-30' /> */}
                    <img src={DigiRetailSvg} alt="DigiFarm" className="max-w-none md:w-[56px] w-[40px] cursor-pointer mr-3" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className='flex items-center justify-between'>
                      <div className="font-bold text-[#007836] md:text-[20px] text-[16px]">DigiRetails</div>
                      <ArrowSvg />
                    </div>
                    <div className="font-normal text-base text-[#468462] hidden md:block">Nền tảng bán hàng đa kênh toàn diện</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function MobileNavigation() {
  const navigate = useNavigate()
  return (
    <nav className="w-full z-1 md:px-10 sm:px-6">
      <div className="max-w-7xl !mx-8 shadow-md lg:mx-10 md:rounded-[20px] rounded-2xl bg-gradient-to-tr from-[rgba(244,250,245,1)] to-[rgba(172,221,187,1)]">
        <div className="md:pt-1 md:pb-6 py-2">
          <h2 className="text-center md:text-2xl md:my-4 my-1 text-lg font-bold text-text-primary">Hệ thống chuỗi cung ứng</h2>

          <div className="flex md:flex-row flex-col md:items-start md:px-8 pb-1 px-4 items-center justify-center nav-items">
            {/* DigiFarm */}
            <div className="relative group nav-item shadow-md cursor-pointer hover:[&_.logo]:scale-110" onClick={() => navigate('/farm')}>
              <div
                className="flex flex-row md:px-4 rounded-xl transition-all duration-200 gap-3 items-start"
              >
                <div className="transition-transform logo">
                  <img src={DigiFarmSvg} alt="DigiFarm" className="max-w-none md:w-[56px] w-[40px] cursor-pointer" />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="font-bold text-[#007836] md:text-[20px] text-[16px]">DigiFarm</div>
                  <div className="font-normal text-base text-[#468462]">Nền tảng quản trị nông nghiệp toàn diện công nghệ cao</div>
                </div>
              </div>
            </div>

            <div className='inline-block transform rotate-90 -my-4'>
              <ArrowLottie />
            </div>

            {/* DigiFactory */}
            <div className="relative group nav-item shadow-md cursor-pointer hover:[&_.logo]:scale-110" onClick={() => navigate('/factory')}>
              <div
                className="flex flex-row md:px-4 rounded-xl transition-all duration-200 gap-3 items-start"
              >
                <div className="transition-transform logo">
                  {/* <DigiFactIcon className='md:!h-15 md:!w-34 !h-12 !w-30' /> */}
                  <img src={DigiFactSvg} alt="DigiFarm" className="max-w-none md:w-[56px] w-[40px] cursor-pointer" />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="font-bold text-[#007836] md:text-[20px] text-[16px]">DigiFactory</div>
                  <div className="font-normal text-base text-[#468462]">Giải pháp quản lý sản xuất và kiểm soát chất lượng thông minh</div>
                </div>
              </div>
            </div>

            <div className='inline-block transform rotate-90 -my-4'>
              <ArrowLottie />
            </div>

            {/* DigiRetail */}
            <div className="relative group nav-item shadow-md cursor-pointer hover:[&_.logo]:scale-110" onClick={() => navigate('/retails')}>
              <div
                className="flex flex-row md:px-4 rounded-xl transition-all duration-200 gap-3 items-center md:items-start"
              >
                <div className="transition-transform logo">
                  {/* <DigiRetailsIcon className='md:!h-15 md:!w-34 !h-10 !w-30' /> */}
                  <img src={DigiRetailSvg} alt="DigiFarm" className="max-w-none md:w-[56px] w-[40px] cursor-pointer" />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="font-bold text-[#007836] md:text-[20px] text-[16px]">DigiRetails</div>
                  <div className="font-normal text-base text-[#468462]">Nền tảng bán hàng đa kênh toàn diện</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}


export default function Navigation() {
  const isDesktop = () => {
    return window.innerWidth >= 768; // You can adjust this breakpoint
  }

  return (
    <nav className="w-full z-1 md:px-10 sm:px-6">
      {isDesktop() ? <DesktopNavigation /> : <MobileNavigation />}
    </nav>
  )
}