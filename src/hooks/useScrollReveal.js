import { useEffect, useRef, useCallback } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  const {
    threshold = 0.15,
    rootMargin = '0px 0px -40px 0px',
    triggerOnce = true,
  } = options

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('revealed')
          if (triggerOnce) {
            observer.unobserve(node)
          }
        } else if (!triggerOnce) {
          node.classList.remove('revealed')
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)

    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      node.classList.add('revealed')
      if (triggerOnce) {
        observer.unobserve(node)
      }
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return ref
}
