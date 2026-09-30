import { Link } from 'react-router-dom'

// Drop insurance awareness images into src/assets/awareness/ and list them here,
// e.g. import roadSafety from '../assets/awareness/road-safety.jpg'
const awarenessImages = []

export default function LandingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 leading-tight">
          UIIC Helper
        </h1>
        <p className="mt-2 text-lg text-slate-600">
          Your Simple Gateway to United India Insurance Services
        </p>
        <p className="mt-3 text-sm font-medium text-slate-500">
          Choose the service you need below to get started.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 items-stretch">
        <div className="flex flex-col gap-5">
          <Link
            to="/agent/register"
            className="group rounded-2xl bg-navy-700 text-white p-6 hover:bg-navy-800 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
                <path d="M19 8h3m-1.5-1.5v3" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Become an Agent</h2>
            <p className="mt-1 text-sm text-navy-100">
              Register as a UIIC agent and start your journey with us.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold-400 group-hover:gap-2 transition-all">
              Get started →
            </span>
          </Link>

          <Link
            to="/customer/login"
            className="group rounded-2xl bg-gold-500 text-navy-900 p-6 hover:bg-gold-600 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-white/40 flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4" />
                <path d="M12 3l8 4v5c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V7l8-4Z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Customer Helper</h2>
            <p className="mt-1 text-sm text-navy-800/80">
              Access your policy details and download your policy.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy-800 group-hover:gap-2 transition-all">
              Get started →
            </span>
          </Link>
        </div>

        <div className="rounded-2xl overflow-hidden bg-navy-50 min-h-[320px]">
          {awarenessImages.length > 0 ? (
            <img
              src={awarenessImages[0]}
              alt="Insurance awareness"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <svg viewBox="0 0 24 24" className="w-14 h-14 text-navy-300" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2 3 6v6c0 5 3.8 9.4 9 10 5.2-.6 9-5 9-10V6l-9-4Z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <p className="mt-3 text-sm font-medium text-navy-700">Insurance Awareness</p>
              <p className="text-xs text-slate-400 mt-1 max-w-[220px]">
                Awareness images will appear here
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
