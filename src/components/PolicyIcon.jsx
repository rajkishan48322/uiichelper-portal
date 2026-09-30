const icons = {
  car: (
    <path d="M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11m-14 0h14m-14 0a2 2 0 00-2 2v3h2m14-5a2 2 0 012 2v3h-2m-14 0a2 2 0 104 0m-4 0h10m0 0a2 2 0 104 0" />
  ),
  health: (
    <path d="M12 21s-7-4.5-9.5-9C.8 8.1 2.5 4 6.2 4c2 0 3.3 1.1 4 2.2C10.9 5.1 12.2 4 14.2 4 17.9 4 19.6 8.1 17.9 12c-2.5 4.5-9.5 9-9.5 9z" />
  ),
  home: (
    <path d="M3 11l9-8 9 8M5 10v10h14V10M9 20v-6h6v6" />
  ),
}

const colors = {
  car: 'bg-navy-100 text-navy-700',
  health: 'bg-emerald-100 text-emerald-700',
  home: 'bg-rose-100 text-rose-700',
}

export default function PolicyIcon({ type = 'car', className = '' }) {
  return (
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${colors[type]} ${className}`}>
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {icons[type]}
      </svg>
    </div>
  )
}
