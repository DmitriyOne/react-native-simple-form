import { useCallback, useRef } from "react"

export const useRefThrottle = <T extends (...args: any[]) => void>(
  callback: T | undefined,
  delay = 500,
) => {
  const lastCall = useRef(0)

  const throttledFn = useCallback(
    (...args: Parameters<T>) => {
      if (!callback) return

      const now = Date.now()
      if (now - lastCall.current >= delay) {
        lastCall.current = now
        callback(...args)
      }
    },
    [callback, delay],
  )

  return throttledFn
}
