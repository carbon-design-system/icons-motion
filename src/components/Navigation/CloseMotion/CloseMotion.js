import React, { useRef, useState, useEffect } from 'react'
import styles from './close--motion.module.scss'

const CloseMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.CloseMotion}>
        <title>close</title>
        <path className={styles.CloseVertical} d="M17,15V5.7h-2V15v2v9.3h2V17V15z" />
        <path className={styles.CloseHorizontal} d="M26.3,17v-2H17h-2H5.7v2H15h2H26.3z" />
      </svg>
    </div>
  )
}

export default CloseMotion
