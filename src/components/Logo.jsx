import uiicLogo from '../assets/uiic-logo.svg'

export default function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <img src={uiicLogo} alt="United India Insurance Company Limited" className="w-10 h-10 shrink-0 object-contain" />
      {!compact && (
        <div className="leading-tight">
          <p className="font-semibold text-navy-800 text-sm sm:text-base">
            United India Insurance Company Limited
          </p>
          <p className="text-xs text-slate-500">यूनाइटेड इंडिया इंश्योरेंस कंपनी लिमिटेड</p>
        </div>
      )}
    </div>
  )
}
