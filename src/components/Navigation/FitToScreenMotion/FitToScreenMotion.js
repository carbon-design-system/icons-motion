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
          d='M26,4H16v2h10l0,10h2V6C28,4.9,27.1,4,26,4z'
        />
        <path
          className={styles.FitToScreenBottomRight}
          d='M26,16l0,10H16v2h10c1.1,0,2-0.9,2-2V16H26z'
        />
        <path
          className={styles.FitToScreenBottomLeft}
          d='M6,26V16H4v10c0,1.1,0.9,2,2,2h10v-2H6z'
        />
        <path
          className={styles.FitToScreenTopLeft}
          d='M6,4C4.9,4,4,4.9,4,6v10h2V6h10V4H6z'
        />

        <rect
          className={styles.FitToScreenTopLine}
          x='8'
          y='4'
          width='16'
          height='2'
        />

        <rect
          className={styles.FitToScreenRightLine}
          x='26'
          y='8'
          width='2'
          height='16'
        />

        <rect
          className={styles.FitToScreenBottomLine}
          x='8'
          y='26'
          width='16'
          height='2'
        />

        <rect
          className={styles.FitToScreenLeftLine}
          x='4'
          y='8'
          width='2'
          height='16'
        />

        <path
          className={styles.FitToScreenInsideTop}
          d='M22 16 24 16 24 8 16 8 16 10 22 10 22 16z'
        />
        <path
          className={styles.FitToScreenInsideBottom}
          d='M8 24 16 24 16 22 10 22 10 16 8 16 8 24z'
        />

        <rect id='_Transparent_Rectangle_' fill='none' width='32' height='32' />
      </svg>
    </div>
  )
}

export default FitToScreenMotion
