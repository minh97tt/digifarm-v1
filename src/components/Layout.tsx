import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <Header />
      <Outlet />
    </div>
  )
}