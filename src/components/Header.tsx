import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-2">
        <h1 className="text-4xl font-bold text-amber-500 m-0">
          Digi<span className="text-green-600">Farm</span>
        </h1>
      </div>
      
      <nav>
        <ul className="flex gap-6">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "text-green-600 font-medium" 
                  : "text-slate-600 hover:text-green-600 transition-colors"
              }
            >
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive 
                  ? "text-green-600 font-medium" 
                  : "text-slate-600 hover:text-green-600 transition-colors"
              }
            >
              Về chúng tôi
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive 
                  ? "text-green-600 font-medium" 
                  : "text-slate-600 hover:text-green-600 transition-colors"
              }
            >
              Liên hệ
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}