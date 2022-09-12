import React, { useRef, useState, useEffect } from 'react'
import styles from './arrow-down-left--motion.module.scss'

const ArrowDownLeftMotion = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  let iconStyles = {
    width: props.width,
    height: props.height
  }

  React.useEffect(() => {
    setIsAnimating(props.isAnimating)
  }, [props.isAnimating])

  const shouldAnimate = isAnimating ? styles.isAnimating : ''

  return (
    <div ref={iconRef} className={`${shouldAnimate}`}>
      <svg
        style={iconStyles}
        viewBox='0 0 32 32'
        className={styles.ArrowDownLeftMotion}
      >
        <title>arrow down</title>
        <path
          className={styles.ArrowDownLeftTip}
          d="M22,26v-2H9.4l6.6-6.6L14.6,16L8,22.6V10H6v16H22z"
        />
        <path d="M9.3,24.1L26,7.4L24.6,6L7.9,22.7L9.3,24.1z" />
      </svg>
    </div>
  )
}
 
  

export default ArrowDownLeftMotion
