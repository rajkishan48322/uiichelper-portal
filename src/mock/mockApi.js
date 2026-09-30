import { DEMO_OTP, SAMPLE_CUSTOMER, SAMPLE_POLICIES } from './mockData'

const delay = (ms = 800) => new Promise((resolve) => setTimeout(resolve, ms))

function padTo6(n) {
  return String(n).padStart(6, '0').slice(-6)
}

export async function sendOtp(mobile) {
  await delay()
  if (!/^\d{10}$/.test(mobile)) {
    throw new Error('Enter a valid 10 digit mobile number')
  }
  // Demo only: a real backend would dispatch this via an SMS gateway.
  return { success: true, demoOtp: DEMO_OTP }
}

export async function verifyOtp(otp) {
  await delay(600)
  return otp === DEMO_OTP
}

export async function submitAgentApplication(formData) {
  await delay(1200)
  const applicationNo = `UIIC/AGT/2026/${padTo6(Math.floor(Math.random() * 999999))}`
  return {
    applicationNo,
    submittedAt: new Date().toISOString(),
    ...formData,
  }
}

export async function getApplicationStatus(applicationNo) {
  await delay(700)
  if (!applicationNo || !applicationNo.trim()) {
    throw new Error('Enter an application number')
  }
  return {
    applicationNo,
    steps: [
      { label: 'Application Received', detail: 'Your application has been received', done: true },
      { label: 'Under Verification', detail: 'Processing your documents', done: true },
      { label: 'Approved', detail: "You'll be notified via SMS and Email", done: false },
    ],
  }
}

export async function lookupCustomer(mobile, dob) {
  await delay(900)
  if (!/^\d{10}$/.test(mobile)) {
    throw new Error('Enter a valid 10 digit mobile number')
  }
  if (!dob) {
    throw new Error('Enter your date of birth')
  }
  // Demo only: any mobile + DOB resolves to the sample customer below.
  return {
    customer: { ...SAMPLE_CUSTOMER, mobile },
    policies: SAMPLE_POLICIES,
  }
}

export function getPolicyById(id) {
  return SAMPLE_POLICIES.find((p) => p.id === id)
}
