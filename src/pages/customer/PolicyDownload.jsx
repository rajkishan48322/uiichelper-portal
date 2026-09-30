import { Link, Navigate, useParams } from 'react-router-dom'
import { useSessionState } from '../../hooks/useSessionState'
import uiicLogo from '../../assets/uiic-logo.svg'

export default function PolicyDownload() {
  const { id } = useParams()
  const [policies] = useSessionState('policies', null)
  const [customer] = useSessionState('customer', null)
  const policy = policies?.find((p) => p.id === id)

  if (!policies || !customer) {
    return <Navigate to="/customer/login" replace />
  }
  if (!policy) {
    return <Navigate to="/customer/dashboard" replace />
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="print:hidden border-b border-slate-200 bg-white px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to={`/customer/policy/${policy.id}`} className="text-sm text-navy-700">
          ← Back
        </Link>
        <h1 className="text-sm font-medium text-slate-700">Policy Document</h1>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-navy-700 text-white hover:bg-navy-800"
          >
            ⬇ Download PDF
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="hidden sm:inline text-sm px-3 py-1.5 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50"
          >
            🖨 Print
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto py-8 px-4">
        <div className="bg-white shadow-sm border border-slate-200 rounded-lg p-8 print:shadow-none print:border-0">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
            <div>
              <p className="font-bold text-navy-800">United India Insurance Company Limited</p>
              <p className="text-xs text-slate-400">यूनाइटेड इंडिया इंश्योरेंस कंपनी लिमिटेड</p>
            </div>
            <img src={uiicLogo} alt="UIIC" className="w-10 h-10 object-contain" />
          </div>

          <h2 className="text-center font-semibold text-navy-800 mb-6 uppercase tracking-wide">
            {policy.type} Policy
          </h2>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
            {[
              ['Policy No.', policy.policyNo],
              ['Insured Name', policy.insuredName],
              ['Policy Period', policy.period],
              ['Product Type', policy.productType],
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

          <p className="mt-8 text-[11px] text-slate-400 text-center">
            This is a system generated demo document for prototype purposes only.
          </p>
        </div>
      </div>
    </div>
  )
}
