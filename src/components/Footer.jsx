const badges = [
  { label: 'Trusted by Millions' },
  { label: '100+ Years of Service' },
  { label: 'Security' },
  { label: 'Transparency' },
  { label: 'Customer First' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-slate-500">
        {badges.map((b) => (
          <span key={b.label} className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-gold-600" fill="currentColor">
              <path d="M12 2 3 6v6c0 5 3.8 9.4 9 10 5.2-.6 9-5 9-10V6l-9-4Z" />
            </svg>
            {b.label}
          </span>
        ))}
      </div>
    </footer>
  )
}
