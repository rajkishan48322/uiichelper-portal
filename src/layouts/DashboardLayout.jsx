import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { useSessionState } from '../hooks/useSessionState'

const navItems = [
  { to: '/customer/dashboard', label: 'Dashboard', icon: 'M3 12l9-9 9 9M5 10v10h14V10' },
  { to: '/customer/dashboard', label: 'My Policies', icon: 'M4 6h16M4 12h16M4 18h10' },
  { to: '/help', label: 'Help & Support', icon: 'M12 18h.01M9.1 9a3 3 0 115.8 1c0 2-3 2-3 4' },
]

export default function DashboardLayout() {
  const navigate = useNavigate()
  const [customer, setCustomer] = useSessionState('customer', null)

  const handleLogout = () => {
    setCustomer(null)
    navigate('/customer/login')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header userName={customer?.name} />
      <div className="flex-1 max-w-6xl w-full mx-auto flex flex-col md:flex-row gap-6 px-4 sm:px-6 py-6">
        <aside className="md:w-56 shrink-0">
          <nav className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible bg-white md:bg-transparent rounded-lg md:rounded-none border md:border-0 border-slate-200 p-2 md:p-0">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap ${
                    isActive ? 'bg-navy-700 text-white' : 'text-slate-600 hover:bg-navy-50'
                  }`
                }
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon} />
                </svg>
                {item.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-rose-600 hover:bg-rose-50 whitespace-nowrap"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 16l4-4m0 0l-4-4m4 4H7m4 8H5a2 2 0 01-2-2V6a2 2 0 012-2h6" />
              </svg>
              Logout
            </button>
          </nav>
        </aside>
        <div className="flex-1 min-w-0">
          <Outlet context={{ customer }} />
        </div>
      </div>
    </div>
  )
}
