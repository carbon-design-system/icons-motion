import React, { useRef, useState, useEffect } from 'react'
import styles from './arrow-up-left--motion.module.scss'

const ArrowUpLeftMotion = (props) => {
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
        className={styles.ArrowUpLeftMotion}
      >
        <title>arrow up left</title>
        <path
          className={styles.ArrowUpLeftTip}
          d="M22,6v2H9.4l6.6,6.6L14.6,16L8,9.4V22H6V6H22z"
        />
        <path d="M9.1,7.7L26,24.6L24.6,26L7.7,9.1L9.1,7.7z" />
      </svg>
    </div>
  )
}
 
  

export default ArrowUpLeftMotion
