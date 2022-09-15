import React, { useRef, useState, useEffect } from 'react'
import styles from './zoom-reset--motion.module.scss'

const ZoomResetMotion = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  let iconStyles = {
    width: props.size,
    height: props.size
  }

  React.useEffect(() => {
    setIsAnimating(props.isAnimating)
  }, [props.isAnimating])

  const shouldAnimate = isAnimating ? styles.isAnimating : ''

  return (
    <div ref={iconRef} className={`${shouldAnimate}`}>
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.ZoomResetMotion}>
        <title>Zoom reset</title>
        <path className={styles.ZoomResetHandle} d="M22.4,21L21,22.4l7.6,7.6l1.4-1.4L22.4,21z" />
        <path className={styles.ZoomResetLoop} d="M22.4,21c1.6-2,2.6-4.4,2.6-7c0-6.1-4.9-11-11-11c-3,0-5.9,1.3-8,3.5V2H4v8h8V8H7.3c3.3-3.7,9-4,12.7-0.6s4,9,0.6,12.7
		s-9,4-12.7,0.6c-1.4-1.2-2.3-2.9-2.7-4.7h-2c1,5.2,5.5,9,10.8,9c2.6,0,5-0.9,7-2.6L22.4,21z" />
      </svg>
    </div>
  )
}

export default ZoomResetMotion
