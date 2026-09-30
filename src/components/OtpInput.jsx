import { useRef } from 'react'

export default function OtpInput({ length = 6, value, onChange }) {
  const refs = useRef([])

  const handleChange = (index, digit) => {
    const clean = digit.replace(/\D/g, '').slice(-1)
    const chars = value.split('')
    while (chars.length < length) chars.push('')
    chars[index] = clean
    onChange(chars.join('').slice(0, length))
    if (clean && index < length - 1) {
      refs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      refs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length)
    if (pasted) {
      e.preventDefault()
      onChange(pasted.padEnd(length, '').slice(0, length))
      refs.current[Math.min(pasted.length, length - 1)]?.focus()
    }
  }

  return (
    <div className="flex justify-center gap-2 sm:gap-3">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className="otp-box"
          inputMode="numeric"
          maxLength={1}
          value={value[i] || ''}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
        />
      ))}
    </div>
  )
}
