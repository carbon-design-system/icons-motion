import React, { useRef, useState, useEffect } from 'react'
import styles from './rotate--motion.module.scss'

const RotateMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.RotateMotion}>
        <title>rotate</title>
        <path className={styles.RotateArrow} d="M26,7.7C21.4,2.1,13.2,1.4,7.7,6C7.1,6.5,6.5,7,6,7.7V4H4v8h8v-2H6.8C10.1,4.9,17,3.5,22,6.8c0.9,0.6,1.7,1.3,2.4,2.1
		L26,7.7z" /> 
        <path className={styles.RotateShaft} d="M26,7.7C21.4,2.1,13.2,1.4,7.7,6C7.1,6.5,6.5,7,6,7.7L6.8,10C10.1,4.9,17,3.5,22,6.8c0.9,0.6,1.7,1.3,2.4,2.1L26,7.7z" />   
        <path className={styles.RotateDash} d="M17.9,26.8l0.4,2c1.5-0.3,2.9-0.8,4.2-1.5l-1-1.7C20.4,26.2,19.2,26.6,17.9,26.8z M24.4,23.1l1.6,1.3
		c1-1.2,1.7-2.5,2.2-3.9l-1.9-0.7C25.9,21,25.3,22.1,24.4,23.1z M9.5,27.2c1.3,0.8,2.7,1.3,4.2,1.5l0.4-2c-1.3-0.2-2.5-0.7-3.6-1.3
		L9.5,27.2z M5.7,19.8l-1.9,0.7C4.3,21.9,5,23.2,6,24.4l0.3-0.3l1.2-1l0,0C6.7,22.1,6.1,21,5.7,19.8L5.7,19.8z M29,16
		c0-1.5-0.3-3-0.8-4.4l-1.9,0.7c0.4,1.2,0.7,2.5,0.7,3.8h2V16z" />
      </svg>
    </div>
  )
}

export default RotateMotion
