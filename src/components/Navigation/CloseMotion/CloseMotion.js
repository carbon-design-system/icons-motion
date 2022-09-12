import React, { useRef, useState, useEffect } from 'react'
import styles from './close--motion.module.scss'

const CloseMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.CloseMotion}>
        <title>close</title>
        <path className={styles.Close} d="M24,9.4L22.6,8L16,14.6L9.4,8L8,9.4l6.6,6.6L8,22.6L9.4,24l6.6-6.6l6.6,6.6l1.4-1.4L17.4,16L24,9.4z" />
      </svg>
    </div>
  )
}

export default CloseMotion
