import React, { useRef, useState, useEffect } from 'react'
import styles from './reset-alt--motion.module.scss'

const ResetAltMotion = (props) => {
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
        className={styles.ResetAltMotion}
      >
        <title>reset alt</title>
        <path
          className={styles.ResetAltArrow}
          d="M18,8c0,0.8,0,1.4,0,2H7.8l3.6,3.6L10,15L4,9l6-6l1.4,1.4L7.8,8H18z"
        />
        <path
          className={styles.ResetAltShaft}
          d="M27,8H8.4v2H27v16H7v-7H5v7c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V10C29,8.9,28.1,8,27,8z"
        />
      </svg>
    </div>
  )
}
 
  

export default ResetAltMotion
