import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import DigiFarm from './pages/DigiFarm'
import About from './pages/About'
import Contact from './pages/Contact'
import Factory from "./pages/Factory"
import Retails from "./pages/Retails"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DigiFarm />} />

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="factory" element={<Factory />} />
        <Route path="retails" element={<Retails />} />
      </Route>
    </Routes>
  )
}
