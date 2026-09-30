import { Navigate, useOutletContext } from 'react-router-dom'
import Card from '../../components/Card'
import StatCard from '../../components/StatCard'
import PolicyCard from '../../components/PolicyCard'
import { useSessionState } from '../../hooks/useSessionState'

export default function CustomerDashboard() {
  const { customer } = useOutletContext()
  const [policies] = useSessionState('policies', null)

  if (!customer || !policies) {
    return <Navigate to="/customer/login" replace />
  }

  const active = policies.filter((p) => p.status === 'Active').length
  const expired = policies.filter((p) => p.status === 'Expired').length

  return (
    <div>
      <h1 className="text-xl font-bold text-navy-800">Hello, {customer.name}</h1>
      <p className="text-sm text-slate-500 mb-5">Here are your policy details</p>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <StatCard label="Total Policies" value={policies.length} tone="navy" />
        <StatCard label="Active Policies" value={active} tone="green" />
        <StatCard label="Expired Policies" value={expired} tone="red" />
      </div>

      <Card className="p-5">
        <h2 className="font-semibold text-navy-800 mb-4">Your Policies</h2>
        <div className="flex flex-col gap-3">
          {policies.map((policy) => (
            <PolicyCard key={policy.id} policy={policy} />
          ))}
        </div>
      </Card>
    </div>
  )
}
