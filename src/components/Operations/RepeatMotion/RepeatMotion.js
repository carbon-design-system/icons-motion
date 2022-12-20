import React, { useRef, useState, useEffect } from 'react'
import styles from './repeat--motion.module.scss'

const RepeatMotion = (props) => {
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
      <svg
        style={iconStyles}
        viewBox='0 0 32 32'
        className={styles.RepeatMotion}
      >
        <title>repeat horizontal</title>
        <path
          className={styles.RepeatMotionShafts}
          d="M6,6h18v2H6v7H4V8C4,6.9,4.9,6,6,6z M7.9,24H26v-7h2v7c0,1.1-0.9,2-2,2H7.9V24z"
        />
        <path
          className={styles.RepeatMotionRArrow}
          d="M28,7l-6,6l-1.4-1.4L24.2,8H16c0-0.7,0-1.3,0-2h8.2l-3.6-3.6L22,1L28,7z"
        />
        <path
          className={styles.RepeatMotionLArrow}
          d="M15.8,24c0,0.7,0,1.3,0,2h-8l3.6,3.6L10,31l-6-6l6-6l1.4,1.4L7.8,24H15.8z"
        />
      </svg>
    </div>
  )
}
 
  

export default RepeatMotion
