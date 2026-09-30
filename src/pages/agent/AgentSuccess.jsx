import { Navigate, Link } from 'react-router-dom'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { useSessionState } from '../../hooks/useSessionState'

export default function AgentSuccess() {
  const [application] = useSessionState('agentApplication', null)

  if (!application) {
    return <Navigate to="/agent/register" replace />
  }

  const submittedAt = new Date(application.submittedAt)

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 py-16 text-center">
      <Card className="p-8">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-navy-800">Registration Submitted!</h1>
        <p className="text-sm text-slate-500 mt-1">
          Your application has been successfully submitted. You will receive updates on your
          registered mobile number and email ID.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 text-left bg-navy-50 rounded-lg p-4">
          <div>
            <p className="text-xs text-slate-500">Application No.</p>
            <p className="font-medium text-navy-800 text-sm">{application.applicationNo}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Date &amp; Time</p>
            <p className="font-medium text-navy-800 text-sm">
              {submittedAt.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })},{' '}
              {submittedAt.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>

        <Link to="/agent/status">
          <Button className="w-full mt-6">Track Application Status</Button>
        </Link>

        <p className="mt-6 text-xs text-slate-400">
          Need help? Contact us <br />
          1800 345 2222 · agenthelp@uiic.co.in
        </p>
      </Card>
    </div>
  )
}
