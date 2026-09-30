import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { useSessionState } from '../../hooks/useSessionState'
import { sendOtp } from '../../mock/mockApi'

const emptyForm = {
  fullName: '',
  dob: '',
  gender: '',
  mobile: '',
  email: '',
  address: '',
  city: '',
  state: '',
  pincode: '',
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700 mb-1">{label}</span>
      {children}
    </label>
  )
}

const inputClass =
  'w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-navy-600'

function validate(form) {
  if (!form.fullName || !form.dob || !form.gender) return 'Please fill all required personal details'
  if (!/^\d{10}$/.test(form.mobile)) return 'Enter a valid 10 digit mobile number'
  if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Enter a valid email address'
  if (!form.address || !form.city || !form.state || !form.pincode) return 'Please fill all address fields'
  return ''
}

export default function AgentRegister() {
  const navigate = useNavigate()
  const [form, setForm] = useSessionState('agentForm', emptyForm)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async () => {
    const err = validate(form)
    if (err) {
      setError(err)
      return
    }
    setError('')
    setSending(true)
    try {
      await sendOtp(form.mobile)
      navigate('/agent/verify-otp')
    } catch (e) {
      setError(e.message)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl font-bold text-navy-800 mb-1">Become an Agent</h1>
      <p className="text-slate-500 mb-6">Fill in your details to register as a UIIC agent.</p>

      <Card className="p-6">
        {error && (
          <p className="mb-4 text-sm text-rose-600 bg-rose-50 border border-rose-100 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          <h3 className="sm:col-span-2 font-semibold text-navy-800">Personal Details</h3>
          <Field label="Full Name *">
            <input className={inputClass} placeholder="Enter your full name" value={form.fullName} onChange={set('fullName')} />
          </Field>
          <Field label="Date of Birth *">
            <input type="date" className={inputClass} value={form.dob} onChange={set('dob')} />
          </Field>
          <Field label="Gender *">
            <select className={inputClass} value={form.gender} onChange={set('gender')}>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Mobile Number *">
            <input
              className={inputClass}
              placeholder="10 digit mobile number"
              maxLength={10}
              value={form.mobile}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, '').slice(0, 10)
                setForm((f) => ({ ...f, mobile: val }))
              }}
            />
          </Field>
          {form.mobile.length === 10 && (
            <p className="sm:col-span-2 -mt-2 text-xs text-navy-700 bg-navy-50 border border-navy-100 rounded-lg px-3 py-2 flex items-start gap-1.5">
              <span>📱</span>
              <span>This number will be used to send an OTP for login and also other alerts from UIIC.</span>
            </p>
          )}

          <h3 className="sm:col-span-2 font-semibold text-navy-800 mt-2">Contact Details</h3>
          <Field label="Email *">
            <input type="email" className={inputClass} placeholder="you@example.com" value={form.email} onChange={set('email')} />
          </Field>
          <Field label="Address *">
            <input className={inputClass} placeholder="House no, street, area" value={form.address} onChange={set('address')} />
          </Field>
          <Field label="City *">
            <input className={inputClass} placeholder="City" value={form.city} onChange={set('city')} />
          </Field>
          <Field label="State *">
            <input className={inputClass} placeholder="State" value={form.state} onChange={set('state')} />
          </Field>
          <Field label="Pincode *">
            <input className={inputClass} placeholder="Pincode" maxLength={6} value={form.pincode} onChange={set('pincode')} />
          </Field>
        </div>

        <div className="flex justify-end mt-6">
          <Button onClick={handleSubmit} loading={sending}>
            Submit & Verify OTP
          </Button>
        </div>
      </Card>
    </div>
  )
}
