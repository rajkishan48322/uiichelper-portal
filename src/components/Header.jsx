import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Header({ userName }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <Link to="/help" className="hover:text-navy-700">Help</Link>
          <Link to="/help" className="hover:text-navy-700">FAQ</Link>
          {userName ? (
            <span className="text-navy-800 font-medium">Welcome, {userName}</span>
          ) : (
            <Link
              to="/customer/login"
              className="px-4 py-2 rounded-lg bg-navy-700 text-white hover:bg-navy-800"
            >
              Login
            </Link>
          )}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-slate-600"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 px-4 py-3 flex flex-col gap-3 text-sm text-slate-600">
          <Link to="/help" onClick={() => setOpen(false)}>Help</Link>
          <Link to="/help" onClick={() => setOpen(false)}>FAQ</Link>
          {userName ? (
            <span className="text-navy-800 font-medium">Welcome, {userName}</span>
          ) : (
            <Link to="/customer/login" onClick={() => setOpen(false)} className="text-navy-700 font-medium">
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  )
}
