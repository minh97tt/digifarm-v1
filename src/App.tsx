import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import DigiFarm from './pages/DigiFarm'
import Factory from "./pages/Factory"
import Retails from "./pages/Retails"
import Home from "./pages/Home"
import { useLayoutEffect } from 'react'

export default function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="farm" element={<DigiFarm />} />
        <Route path="farm/:id" element={<DigiFarm />} />
        <Route path="factory" element={<Factory />} />
        <Route path="factory/:id" element={<Factory />} />
        <Route path="retails" element={<Retails />} />
        <Route path="retails/:id" element={<Retails />} />
      </Route>
    </Routes>
  )
}
