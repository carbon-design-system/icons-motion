import React, { useRef, useState, useEffect } from 'react'
import styles from './arrow-shift-down--motion.module.scss'

const ArrowShiftDownMotion = (props) => {
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
        className={styles.ArrowShiftDownMotion}
      >
        <title>arrow shift down</title>
        <path
          className={styles.ArrowShiftDownHead}
          d="M28,14h-5V6.9h-2V16h4.6L16,25.6L6.4,16H11V7L9,7v7H4c-0.3,0-0.5,0.1-0.7,0.3c-0.4,0.4-0.4,1,0,1.4l12,12
		c0.4,0.4,1,0.4,1.4,0l12-12c0.2-0.2,0.3-0.4,0.3-0.7C29,14.4,28.6,14,28,14z"
        />
        <path
          className={styles.ArrowShiftDownShaft}
          d="M11,4h10v9c0.5,0,1.2,0,2,0V4c0-1.1-0.9-2-2-2H11C9.9,2,9,2.9,9,4v9c0.6,0,1.4,0,2,0V4z"
        />
      </svg>
    </div>
  )
}
 
  

export default ArrowShiftDownMotion
