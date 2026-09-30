import { Link } from 'react-router-dom'
import PolicyIcon from './PolicyIcon'
import Button from './Button'

export default function PolicyCard({ policy }) {
  const isActive = policy.status === 'Active'
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border border-slate-200 rounded-lg">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <PolicyIcon type={policy.icon} />
        <div className="min-w-0">
          <p className="font-medium text-navy-800">{policy.type}</p>
          <p className="text-xs text-slate-500 truncate">
            Policy No. {policy.policyNo}
          </p>
          <span
            className={`inline-flex items-center gap-1 mt-1 text-[11px] px-2 py-0.5 rounded-full font-medium ${
              isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
            }`}
          >
            {policy.status} · {policy.period}
          </span>
        </div>
      </div>
      <Link to={`/customer/policy/${policy.id}`} className="sm:ml-auto">
        <Button variant="primary" className="w-full sm:w-auto">
          Download Policy
        </Button>
      </Link>
    </div>
  )
}
