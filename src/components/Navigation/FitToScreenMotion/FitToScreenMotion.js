import React, { useRef, useState, useEffect } from 'react'
import styles from './fit-to-screen--motion.module.scss'

const FitToScreenMotion = (props) => {
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
      <svg
        style={iconStyles}
        viewBox='0 0 32 32'
        className={styles.FitToScreenMotion}
      >
        <title>fit to screen</title>

        <path
          className={styles.FitToScreenTopRight}
          d='M26,6v14h2V6c0-0.5-0.2-1-0.6-1.4S26.5,4,26,4H12v2H26z'
        />
        <path
          className={styles.FitToScreenBottomRight}
          d='M26,26H12v2h14c0.5,0,1-0.2,1.4-0.6S28,26.5,28,26V12h-2V26z'
        />
        <path
          className={styles.FitToScreenBottomLeft}
          d='M6,26V12H4v14c0,0.5,0.2,1,0.6,1.4S5.5,28,6,28h14v-2H6z'
        />
        <path
          className={styles.FitToScreenTopLeft}
          d='M4.6,4.6C4.2,5,4,5.5,4,6v14h2V6h14V4H6C5.5,4,5,4.2,4.6,4.6z'
        />

        <path
          className={styles.FitToScreenInsideTop}
          d='M22,16h2V8h-8v2h6V16z'
        />
        <path
          className={styles.FitToScreenInsideBottom}
          d='M8,24h8v-2h-6v-6H8V24z'
        />

        <rect id='_Transparent_Rectangle_' fill='none' width='32' height='32' />
      </svg>
    </div>
  )
}

export default FitToScreenMotion
