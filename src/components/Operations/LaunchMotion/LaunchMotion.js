import React, { useRef, useState, useEffect } from 'react'
import styles from './launch--motion.module.scss'

const LaunchMotion = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  let iconStyles = {
    width: props.size,
    height: props.size
  }

useEffect(() => {
    setIsAnimating(props.isAnimating)
  }, [props.isAnimating])

  const shouldAnimate = isAnimating ? styles.isAnimating : ''

  return (
    <div ref={iconRef} className={`${shouldAnimate}`}>
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.LaunchMotion}>
        <title>Launch</title>
        <path  d="M24.6,6L16,14.6l1.4,1.4L26,7.4L24.6,6z M24,30H4c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h10v2H4v20h20V18h2v10
		C26,29.1,25.1,30,24,30z"/>
      <path className={styles.LaunchTip} d="M18,4v2h6.6L16,14.6l1.4,1.4L26,7.4V14h2V4H18z" />
      </svg>
    </div>
  )
}

export default LaunchMotion
