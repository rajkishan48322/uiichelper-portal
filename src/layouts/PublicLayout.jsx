import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PublicLayout({ userName }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header userName={userName} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
