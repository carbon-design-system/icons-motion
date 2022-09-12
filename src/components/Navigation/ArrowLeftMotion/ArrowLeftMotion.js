import React, { useRef, useState, useEffect } from 'react'
import styles from './arrow-left--motion.module.scss'

const ArrowLeftMotion = (props) => {
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
        className={styles.ArrowLeftMotion}
      >
        <title>arrow left</title>
        <path
          className={styles.ArrowLeftTip}
          d="M14,26l1.4-1.4L7.8,17h7.6v-2H7.8l7.6-7.6L14,6L4,16L14,26z"
        />
        <path d="M7.8,17H28v-2H7.8V17z" />
      </svg>
    </div>
  )
}
 
  

export default ArrowLeftMotion
