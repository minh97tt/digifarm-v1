import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="w-full max-w-7xl bg-white shadow-md mx-auto">
      <Outlet />
    </div>
  )
}