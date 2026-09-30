import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Card from '../../components/Card'
import Button from '../../components/Button'
import OtpInput from '../../components/OtpInput'
import { useSessionState } from '../../hooks/useSessionState'
import { sendOtp, verifyOtp, lookupCustomer } from '../../mock/mockApi'
import { DEMO_OTP } from '../../mock/mockData'

const RESEND_SECONDS = 45

export default function CustomerVerifyOtp() {
  const navigate = useNavigate()
  const [loginInfo] = useSessionState('customerLogin', null)
  const [, setCustomer] = useSessionState('customer', null)
  const [, setPolicies] = useSessionState('policies', null)
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [verifying, setVerifying] = useState(false)
  const [seconds, setSeconds] = useState(RESEND_SECONDS)

  useEffect(() => {
    if (seconds <= 0) return
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(t)
  }, [seconds])

  if (!loginInfo) {
    return <Navigate to="/customer/login" replace />
  }

  const handleResend = async () => {
    await sendOtp(loginInfo.mobile)
    setSeconds(RESEND_SECONDS)
  }

  const handleVerify = async () => {
    setError('')
    setVerifying(true)
    try {
      const ok = await verifyOtp(otp)
      if (!ok) {
        setError('Incorrect OTP. Please try again.')
        return
      }
      const { customer, policies } = await lookupCustomer(loginInfo.mobile, loginInfo.dob)
      setCustomer(customer)
      setPolicies(policies)
      navigate('/customer/dashboard')
    } finally {
      setVerifying(false)
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 py-16 text-center">
      <Card className="p-8">
        <h1 className="text-xl font-bold text-navy-800 mb-1">Verify OTP</h1>
        <p className="text-sm text-slate-500 mb-1">
          We have sent an OTP to +91 {loginInfo.mobile}
        </p>
        <p className="text-xs text-slate-400 mb-6">Demo OTP: {DEMO_OTP}</p>

        <OtpInput value={otp} onChange={setOtp} />

        {error && <p className="mt-4 text-sm text-rose-600">{error}</p>}

        <p className="mt-4 text-xs text-slate-500">
          {seconds > 0 ? (
            <>Resend OTP in 00:{String(seconds).padStart(2, '0')}</>
          ) : (
            <button type="button" className="text-navy-700 font-medium" onClick={handleResend}>
              Resend OTP
            </button>
          )}
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <Button onClick={handleVerify} loading={verifying} disabled={otp.length !== 6}>
            Verify OTP
          </Button>
          <Button variant="secondary" onClick={() => navigate('/customer/login')}>
            Back
          </Button>
        </div>
      </Card>
    </div>
  )
}
