import Card from '../components/Card'

const links = [
  { label: 'FAQs', desc: 'Find answers to common questions', icon: 'M12 18h.01M9.1 9a3 3 0 115.8 1c0 2-3 2-3 4' },
  { label: 'Contact Us', desc: 'Phone, Email & Chat', icon: 'M3 5h4l2 5-2.5 1.5a11 11 0 005 5L13 14l5 2v4a2 2 0 01-2 2C8.6 22 2 15.4 2 7a2 2 0 012-2Z' },
  { label: 'Locate Office', desc: 'Find nearest UIIC branch or office', icon: 'M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11Z' },
  { label: 'Raise a Query', desc: 'Submit your request or complaint', icon: 'M4 4h16v12H7l-3 3V4Z' },
]

export default function HelpSupport() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-xl font-bold text-navy-800 mb-1">Help & Support</h1>
      <p className="text-sm text-slate-500 mb-6">We are here to assist you.</p>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="grid grid-cols-2 gap-4">
          {links.map((l) => (
            <Card key={l.label} className="p-4 hover:border-navy-300 cursor-pointer">
              <div className="w-9 h-9 rounded-lg bg-navy-50 text-navy-700 flex items-center justify-center mb-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={l.icon} />
                </svg>
              </div>
              <p className="text-sm font-medium text-navy-800">{l.label}</p>
              <p className="text-xs text-slate-500 mt-0.5">{l.desc}</p>
            </Card>
          ))}
        </div>

        <Card className="p-5">
          <p className="text-sm font-semibold text-navy-800 mb-4">Customer Care</p>
          <div className="flex flex-col gap-3 text-sm text-slate-600">
            <p className="flex items-center gap-2">📞 1800 345 2222 <span className="text-xs text-slate-400">(Toll Free)</span></p>
            <p className="flex items-center gap-2">✉️ customercare@uiic.co.in</p>
            <p className="flex items-center gap-2">🕐 Mon - Sat, 9:00 AM - 6:00 PM</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
