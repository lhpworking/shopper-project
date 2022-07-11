import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Promo from "../components/Promo"

export default function MainLayout() {
  return (
    <>
      <Header />
      <Promo />
      <Outlet />
      <Footer />
    </>
  )
}
