import React, { useRef, useState, useEffect } from 'react'
import styles from './close-filled--motion.module.scss'

const CloseFilledMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.CloseFilledMotion}>
        <title>close filled</title>
        <path className={styles.CloseFilledCircle} fill="black" d="M16,2C8.2,2,2,8.2,2,16s6.2,14,14,14s14-6.2,14-14S23.8,2,16,2z" />
        <path className={styles.CloseFilled} fill="white" d="M21.4,23L16,17.6L10.6,23L9,21.4l5.4-5.4L9,10.6L10.6,9l5.4,5.4L21.4,9l1.6,1.6L17.6,16l5.4,5.4L21.4,23z" />      
      </svg>
    </div>
  )
}

export default CloseFilledMotion
