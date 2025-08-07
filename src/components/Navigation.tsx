import { DigiFarmIcon } from './icons/DigiFarmIcon'
import { DigiRetailsIcon } from './icons/DigiRetailsIcon'
import { DigiFactIcon } from './icons/DigiFactIcon'

import DigiFarmSvg from '../assets/home/farm.svg'
import DigiFactSvg from '../assets/home/factory.svg'
import DigiRetailSvg from '../assets/home/retails.svg'
import ArrowGif from '../assets/home/arrow.gif'

import './Navigation.css'
import { useNavigate } from 'react-router-dom'


const ArrowSvg = ({ className }: { className?: string }) => {
  return (
    <svg className={className} width="154" height="7" viewBox="0 0 154 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M153.5 3.5L148.5 0.613249V6.38675L153.5 3.5ZM0.5 3.5V4H1.50658V3.5V3H0.5V3.5ZM3.51974 3.5V4H5.53289V3.5V3H3.51974V3.5ZM7.54605 3.5V4H9.55921V3.5V3H7.54605V3.5ZM11.5724 3.5V4H13.5855V3.5V3H11.5724V3.5ZM15.5987 3.5V4H17.6118V3.5V3H15.5987V3.5ZM19.625 3.5V4H21.6382V3.5V3H19.625V3.5ZM23.6513 3.5V4H25.6645V3.5V3H23.6513V3.5ZM27.6776 3.5V4H29.6908V3.5V3H27.6776V3.5ZM31.7039 3.5V4H33.7171V3.5V3H31.7039V3.5ZM35.7303 3.5V4H37.7434V3.5V3H35.7303V3.5ZM39.7566 3.5V4H41.7697V3.5V3H39.7566V3.5ZM43.7829 3.5V4H45.796V3.5V3H43.7829V3.5ZM47.8092 3.5V4H49.8224V3.5V3H47.8092V3.5ZM51.8355 3.5V4H53.8487V3.5V3H51.8355V3.5ZM55.8618 3.5V4H57.875V3.5V3H55.8618V3.5ZM59.8881 3.5V4H61.9013V3.5V3H59.8881V3.5ZM63.9145 3.5V4H65.9276V3.5V3H63.9145V3.5ZM67.9408 3.5V4H69.9539V3.5V3H67.9408V3.5ZM71.9671 3.5V4H73.9803V3.5V3H71.9671V3.5ZM75.9934 3.5V4H78.0066V3.5V3H75.9934V3.5ZM80.0197 3.5V4H82.0329V3.5V3H80.0197V3.5ZM84.0461 3.5V4H86.0592V3.5V3H84.0461V3.5ZM88.0724 3.5V4H90.0855V3.5V3H88.0724V3.5ZM92.0987 3.5V4H94.1119V3.5V3H92.0987V3.5ZM96.125 3.5V4H98.1382V3.5V3H96.125V3.5ZM100.151 3.5V4H102.165V3.5V3H100.151V3.5ZM104.178 3.5V4H106.191V3.5V3H104.178V3.5ZM108.204 3.5V4H110.217V3.5V3H108.204V3.5ZM112.23 3.5V4H114.243V3.5V3H112.23V3.5ZM116.257 3.5V4H118.27V3.5V3H116.257V3.5ZM120.283 3.5V4H122.296V3.5V3H120.283V3.5ZM124.309 3.5V4H126.322V3.5V3H124.309V3.5ZM128.336 3.5V4H130.349V3.5V3H128.336V3.5ZM132.362 3.5V4H134.375V3.5V3H132.362V3.5ZM136.388 3.5V4H138.401V3.5V3H136.388V3.5ZM140.415 3.5V4H142.428V3.5V3H140.415V3.5ZM144.441 3.5V4H146.454V3.5V3H144.441V3.5ZM148.467 3.5V4H150.48V3.5V3H148.467V3.5Z" fill="#7AAD85" />
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

export default function Navigation() {
  const navigate = useNavigate()
  return (
    <nav className="w-full z-1 md:px-10 sm:px-6">
      <div className="max-w-7xl !mx-8 shadow-md lg:mx-10 md:rounded-[20px] rounded-2xl bg-gradient-to-tr from-[rgba(244,250,245,1)] to-[rgba(172,221,187,1)]">
        <div className="md:pt-1 md:pb-6 py-2">
          <h2 className="text-center md:text-2xl md:my-4 my-1 text-lg font-bold text-text-primary">Hệ thống chuỗi cung ứng</h2>

          <div className="flex md:flex-row flex-col md:items-start md:px-8 px-4 items-center justify-center nav-items">
            {/* DigiFarm */}
            <div className="relative group nav-item">
              <div
                className="flex flex-row md:px-4 rounded-xl transition-all duration-200 gap-3 items-center md:items-start"
              >
                <div className="transition-transform hover:scale-110">
                  <img src={DigiFarmSvg} alt="DigiFarm" className="max-w-none md:w-[56px] w-[40px] cursor-pointer" onClick={() =>  navigate('/farm')} />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="font-bold text-[#007836] md:text-[20px] text-[16px]">DigiFarm</div>
                  <div className="font-normal text-base text-[#468462] hidden md:block">Giải pháp quản trị nông nghiệp toàn diện công nghệ cao</div>
                </div>
              </div>
            </div>

            {/* <ArrowSvg className='md:flex hidden' /> */}
            <img src={ArrowGif} alt="Arrow" className="w-[60px] max-w-[60px] self-center hidden md:block" />
            <div className='md:hidden inline-block'>
              <ArrowVerticalSvg />
            </div>

            {/* DigiFactory */}
            <div className="relative group nav-item">
              <div
                className="flex flex-row md:px-4 rounded-xl transition-all duration-200 gap-3 items-center md:items-start"
              >
                <div className="transition-transform hover:scale-110">
                  {/* <DigiFactIcon className='md:!h-15 md:!w-34 !h-12 !w-30' /> */}
                  <img src={DigiFactSvg} alt="DigiFarm" className="max-w-none md:w-[56px] w-[40px] cursor-pointer" onClick={() => navigate('/factory')} />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="font-bold text-[#007836] md:text-[20px] text-[16px]">DigiFactory</div>
                  <div className="font-normal text-base text-[#468462] hidden md:block">Giải pháp quản lý sản xuất và kiểm soát chất lượng thông minh</div>
                </div>
              </div>
            </div>
            {/* <ArrowSvg className='md:flex hidden' /> */}
            <img src={ArrowGif} alt="Arrow" className="w-[60px] max-w-[60px] self-center hidden md:block" />
            <div className='md:hidden inline-block'>
              <ArrowVerticalSvg />
            </div>

            {/* DigiRetail */}
            <div className="relative group nav-item">
              <div
                className="flex flex-row md:px-4 rounded-xl transition-all duration-200 gap-3 items-center md:items-start"
              >
                <div className="transition-transform hover:scale-110">
                  {/* <DigiRetailsIcon className='md:!h-15 md:!w-34 !h-10 !w-30' /> */}
                  <img src={DigiRetailSvg} alt="DigiFarm" className="max-w-none md:w-[56px] w-[40px] cursor-pointer" onClick={() => navigate('/retails')} />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="font-bold text-[#007836] md:text-[20px] text-[16px]">DigiRetail</div>
                  <div className="font-normal text-base text-[#468462] hidden md:block">Nền tảng bán hàng đa kênh toàn diện</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}