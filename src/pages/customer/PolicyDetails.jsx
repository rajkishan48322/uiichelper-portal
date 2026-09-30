import { Link, Navigate, useParams } from 'react-router-dom'
import Card from '../../components/Card'
import Button from '../../components/Button'
import PolicyIcon from '../../components/PolicyIcon'
import { useSessionState } from '../../hooks/useSessionState'

export default function PolicyDetails() {
  const { id } = useParams()
  const [policies] = useSessionState('policies', null)
  const policy = policies?.find((p) => p.id === id)

  if (!policies) {
    return <Navigate to="/customer/login" replace />
  }
  if (!policy) {
    return <Navigate to="/customer/dashboard" replace />
  }

  const isActive = policy.status === 'Active'

  return (
    <div>
      <Link to="/customer/dashboard" className="text-sm text-navy-700 mb-4 inline-flex items-center gap-1">
        ← Back
      </Link>
      <h1 className="text-xl font-bold text-navy-800 mb-4">Policy Details</h1>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <PolicyIcon type={policy.icon} />
            <h2 className="font-semibold text-navy-800">{policy.type}</h2>
          </div>
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-medium ${
              isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
            }`}
          >
            {policy.status}
          </span>
        </div>

        <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
          {[
            ['Policy Number', policy.policyNo],
            ['Insured Name', policy.insuredName],
            ['Product Type', policy.productType],
            ['Policy Period', policy.period],
            ['Sum Insured', `₹${policy.sumInsured}`],
            ['Premium', `₹${policy.premium}`],
            ['Issuing Office', policy.issuingOffice],
            ['Servicing Office', policy.servicingOffice],
          ].map(([label, val]) => (
            <div key={label}>
              <dt className="text-slate-500">{label}</dt>
              <dd className="font-medium text-slate-800">{val}</dd>
            </div>
          ))}
        </dl>

        <Link to={`/customer/policy/${policy.id}/download`}>
          <Button className="w-full mt-6">⬇ Download Policy</Button>
        </Link>
      </Card>
    </div>
  )
}
