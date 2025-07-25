import { NavLink } from 'react-router-dom'
import { DigiFarmIcon } from './icons/DigiFarmIcon'
import { DigiRetailsIcon } from './icons/DigiRetailsIcon'
import { DigiFactIcon } from './icons/DigiFactIcon'


const ArrowSvg = () => {
  return (<svg width="154" height="7" viewBox="0 0 154 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M153.5 3.5L148.5 0.613249V6.38675L153.5 3.5ZM0.5 3.5V4H1.50658V3.5V3H0.5V3.5ZM3.51974 3.5V4H5.53289V3.5V3H3.51974V3.5ZM7.54605 3.5V4H9.55921V3.5V3H7.54605V3.5ZM11.5724 3.5V4H13.5855V3.5V3H11.5724V3.5ZM15.5987 3.5V4H17.6118V3.5V3H15.5987V3.5ZM19.625 3.5V4H21.6382V3.5V3H19.625V3.5ZM23.6513 3.5V4H25.6645V3.5V3H23.6513V3.5ZM27.6776 3.5V4H29.6908V3.5V3H27.6776V3.5ZM31.7039 3.5V4H33.7171V3.5V3H31.7039V3.5ZM35.7303 3.5V4H37.7434V3.5V3H35.7303V3.5ZM39.7566 3.5V4H41.7697V3.5V3H39.7566V3.5ZM43.7829 3.5V4H45.796V3.5V3H43.7829V3.5ZM47.8092 3.5V4H49.8224V3.5V3H47.8092V3.5ZM51.8355 3.5V4H53.8487V3.5V3H51.8355V3.5ZM55.8618 3.5V4H57.875V3.5V3H55.8618V3.5ZM59.8881 3.5V4H61.9013V3.5V3H59.8881V3.5ZM63.9145 3.5V4H65.9276V3.5V3H63.9145V3.5ZM67.9408 3.5V4H69.9539V3.5V3H67.9408V3.5ZM71.9671 3.5V4H73.9803V3.5V3H71.9671V3.5ZM75.9934 3.5V4H78.0066V3.5V3H75.9934V3.5ZM80.0197 3.5V4H82.0329V3.5V3H80.0197V3.5ZM84.0461 3.5V4H86.0592V3.5V3H84.0461V3.5ZM88.0724 3.5V4H90.0855V3.5V3H88.0724V3.5ZM92.0987 3.5V4H94.1119V3.5V3H92.0987V3.5ZM96.125 3.5V4H98.1382V3.5V3H96.125V3.5ZM100.151 3.5V4H102.165V3.5V3H100.151V3.5ZM104.178 3.5V4H106.191V3.5V3H104.178V3.5ZM108.204 3.5V4H110.217V3.5V3H108.204V3.5ZM112.23 3.5V4H114.243V3.5V3H112.23V3.5ZM116.257 3.5V4H118.27V3.5V3H116.257V3.5ZM120.283 3.5V4H122.296V3.5V3H120.283V3.5ZM124.309 3.5V4H126.322V3.5V3H124.309V3.5ZM128.336 3.5V4H130.349V3.5V3H128.336V3.5ZM132.362 3.5V4H134.375V3.5V3H132.362V3.5ZM136.388 3.5V4H138.401V3.5V3H136.388V3.5ZM140.415 3.5V4H142.428V3.5V3H140.415V3.5ZM144.441 3.5V4H146.454V3.5V3H144.441V3.5ZM148.467 3.5V4H150.48V3.5V3H148.467V3.5Z" fill="#7AAD85"/>
    </svg>
    )
};

export default function Navigation() {

  return (
    <nav className="shadow-md w-full z-1">
      <div className="max-w-7xl mx-auto sm:mx-6 lg:mx-10 rounded-[20px] bg-gradient-to-tr from-[rgba(246,251,247,0.7)] to-[rgba(172,221,187,0.9)]">
        
        <div className="hidden md:block">
          <div className="pt-1 pb-6">
            <h2 className="text-center text-2xl font-bold text-text-primary mt-4 my-3">Hệ thống chuỗi cung ứng</h2>
            <div className="flex justify-center items-center space-x-2 px-8">
              {/* DigiFarm */}
              <div className="relative group">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex flex-col items-center justify-center px-4 rounded-xl border-2 transition-all duration-200 ${isActive
                      ? "border-card-border bg-white/80"
                      : "border-none hover:border-card-border hover:bg-green-50"}`
                  }
                >
                  <div className="h-15 flex items-center justify-center">
                    <DigiFarmIcon className='!h-15 !max-w-34'/>
                  </div>
                  
                </NavLink>
              </div>

              <ArrowSvg />

              {/* DigiFactory */}
              <div className="relative group">
                <NavLink
                  to="/factory"
                  className={({ isActive }) =>
                    `flex flex-col items-center justify-center px-4 rounded-xl border-2 transition-all duration-200 ${isActive
                      ? "border-card-border bg-white/80"
                      : "border-none hover:border-card-border hover:bg-green-50"}`
                  }
                >
                  <div className="h-15 flex items-center justify-center">
                    <DigiFactIcon className='!h-15 !max-w-34'/>
                  </div>
                  
                </NavLink>
              </div>

             <ArrowSvg />

              {/* DigiRetail */}
              <div className="relative group">
                <NavLink
                  to="/retails"
                  className={({ isActive }) =>
                    `flex flex-col items-center justify-center px-4 rounded-xl border-2 transition-all duration-200 ${isActive
                      ? "border-card-border bg-white/80"
                      : "border-none hover:border-card-border hover:bg-green-50"}`
                  }
                >
                  <div className="h-15 flex items-center justify-center">
                    <DigiRetailsIcon className='!h-15 !max-w-34'/>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}