import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ScrollReveal({
  children,
  delay = 0,
  variant = 'default',
  className = '',
  ...props
}) {
  const ref = useScrollReveal({
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
    triggerOnce: true,
  })

  const variantClass = variant === 'fade'
    ? 'scroll-reveal-fade'
    : variant === 'scale'
      ? 'scroll-reveal-scale'
      : 'scroll-reveal'

  const delayClass = delay > 0 ? `scroll-reveal-delay-${delay}` : ''

  return (
    <div
      ref={ref}
      className={`${variantClass} ${delayClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
