import { useState } from 'react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { useSessionState } from '../../hooks/useSessionState'
import { getApplicationStatus } from '../../mock/mockApi'

export default function AgentStatus() {
  const [application] = useSessionState('agentApplication', null)
  const [appNo, setAppNo] = useState(application?.applicationNo || '')
  const [status, setStatus] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleCheck = async () => {
    setError('')
    setLoading(true)
    try {
      const result = await getApplicationStatus(appNo)
      setStatus(result)
    } catch (e) {
      setError(e.message)
      setStatus(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 py-16">
      <Card className="p-8">
        <h1 className="text-xl font-bold text-navy-800 mb-1">Agent Application Status</h1>
        <p className="text-sm text-slate-500 mb-6">Track the status of your agent registration.</p>

        <label className="block text-sm font-medium text-slate-700 mb-1">Application Number *</label>
        <div className="flex gap-2">
          <input
            className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-navy-600"
            placeholder="Enter application number"
            value={appNo}
            onChange={(e) => setAppNo(e.target.value)}
          />
          <Button onClick={handleCheck} loading={loading}>
            Check Status
          </Button>
        </div>

        {error && <p className="mt-3 text-sm text-rose-600">{error}</p>}

        {status && (
          <ol className="mt-6 space-y-4">
            {status.steps.map((step, i) => (
              <li key={step.label} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${
                      step.done ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    {step.done ? '✓' : i + 1}
                  </div>
                  {i !== status.steps.length - 1 && (
                    <div className={`w-0.5 flex-1 ${step.done ? 'bg-emerald-500' : 'bg-slate-200'}`} />
                  )}
                </div>
                <div className="pb-4">
                  <p className={`text-sm font-medium ${step.done ? 'text-navy-800' : 'text-slate-500'}`}>
                    {step.label}
                  </p>
                  <p className="text-xs text-slate-400">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        )}
      </Card>
    </div>
  )
}
