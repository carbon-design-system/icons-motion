import React, { useRef, useState, useEffect } from 'react'
import styles from './close-outline--motion.module.scss'

const CloseOutlineMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.CloseOutlineMotion}>
        <title>close outline</title>
        <path className={styles.CloseOutlineHorizontal} d="M14.9,17.1H7.2v-2.3h7.6h2.3h7.6v2.3h-7.6H14.9z" />
        <path className={styles.CloseOutlineVertical} d="M14.9,24.8v-7.6v-2.3V7.2h2.3v7.6v2.3v7.6H14.9z" />
        <path d="M16,2C8.2,2,2,8.2,2,16s6.2,14,14,14s14-6.2,14-14S23.8,2,16,2z M16,28C9.4,28,4,22.6,4,16S9.4,4,16,4s12,5.4,12,12
		S22.6,28,16,28z" />
      </svg>
    </div>
  )
}

export default CloseOutlineMotion
