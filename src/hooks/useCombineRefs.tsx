import React, { ForwardedRef, MutableRefObject, useEffect, useRef } from "react"


export const useCombinedRefs = <T,>(forwardRef: ForwardedRef<T>, ref: MutableRefObject<T | undefined>) => {
  const refs = [forwardRef, ref]
  const targetRef = useRef<T>(null)

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return

      if (typeof ref === 'function') {
        ref(targetRef.current)
      } else {
        ref.current = targetRef.current
      }
    })
  }, [refs])

  return targetRef
}
