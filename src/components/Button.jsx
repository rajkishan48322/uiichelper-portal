const variants = {
  primary: 'bg-navy-700 text-white hover:bg-navy-800 disabled:bg-navy-300',
  secondary: 'bg-white text-navy-700 border border-navy-700 hover:bg-navy-50',
  gold: 'bg-gold-500 text-navy-900 hover:bg-gold-600 disabled:bg-gold-300',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  loading = false,
  disabled = false,
  ...rest
}) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-colors disabled:cursor-not-allowed ${variants[variant]} ${className}`}
      {...rest}
    >
      {loading && (
        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
      )}
      {children}
    </button>
  )
}
