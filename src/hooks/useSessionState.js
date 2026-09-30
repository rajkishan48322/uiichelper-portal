import { useState } from 'react'

export function useSessionState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = sessionStorage.getItem(key)
      return stored ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  const update = (next) => {
    setValue((prev) => {
      const resolved = typeof next === 'function' ? next(prev) : next
      try {
        sessionStorage.setItem(key, JSON.stringify(resolved))
      } catch {
        // sessionStorage unavailable — state still works in-memory for this render
      }
      return resolved
    })
  }

  return [value, update]
}
