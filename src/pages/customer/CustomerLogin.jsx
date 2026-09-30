import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { useSessionState } from '../../hooks/useSessionState'
import { sendOtp } from '../../mock/mockApi'

export default function CustomerLogin() {
  const navigate = useNavigate()
  const [, setLoginInfo] = useSessionState('customerLogin', null)
  const [mobile, setMobile] = useState('')
  const [dob, setDob] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleContinue = async () => {
    setError('')
    setLoading(true)
    try {
      await sendOtp(mobile)
      if (!dob) throw new Error('Enter your date of birth')
      setLoginInfo({ mobile, dob })
      navigate('/customer/verify-otp')
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <Card className="grid md:grid-cols-2 overflow-hidden">
        <div className="p-8">
          <h1 className="text-xl font-bold text-navy-800 mb-1">Customer Helper</h1>
          <p className="text-sm text-slate-500 mb-6">
            Access your policy details and download your policy.
          </p>

          <p className="text-xs font-medium text-navy-700 mb-4">1 Verify Customer &nbsp;·&nbsp; 2 OTP Verification</p>

          <label className="block text-sm font-medium text-slate-700 mb-1">Mobile Number *</label>
          <input
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-navy-600"
            placeholder="Enter 10 digit mobile number"
            maxLength={10}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <label className="block text-sm font-medium text-slate-700 mb-1">Date of Birth *</label>
          <input
            type="date"
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-navy-600"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />

          {error && <p className="mb-4 text-sm text-rose-600">{error}</p>}

          <Button className="w-full" onClick={handleContinue} loading={loading}>
            Continue
          </Button>
          <p className="mt-3 text-xs text-slate-400 text-center">
            🔒 Your information is secure with us.
          </p>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center bg-navy-50 p-8 gap-3">
          <svg viewBox="0 0 24 24" className="w-16 h-16 text-navy-300" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 15a4 4 0 100-8 4 4 0 000 8Z" />
            <path d="M4 4l2 2m12-2l-2 2M4 20l2-2m12 2l-2-2" />
          </svg>
          <p className="text-sm font-medium text-navy-700">Safe · Secure · Trusted</p>
        </div>
      </Card>
    </div>
  )
}
