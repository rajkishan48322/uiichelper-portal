const styles = {
  navy: 'bg-navy-50 text-navy-700',
  green: 'bg-emerald-50 text-emerald-700',
  red: 'bg-rose-50 text-rose-700',
}

export default function StatCard({ label, value, tone = 'navy' }) {
  return (
    <div className={`rounded-xl p-4 ${styles[tone]}`}>
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-xs mt-1 opacity-80">{label}</p>
    </div>
  )
}
