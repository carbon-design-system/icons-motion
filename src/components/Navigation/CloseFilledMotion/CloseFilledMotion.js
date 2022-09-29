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
        <path className={styles.CloseFilledVertical} fill="white" d="M14.9,24.8v-7.6v-2.3V7.2h2.3v7.6v2.3v7.6H14.9z" />
        <path className={styles.CloseFilledHorizontal} fill="white" d="M14.9,17.1H7.2v-2.3h7.6h2.3h7.6v2.3h-7.6H14.9z" />      
      </svg>
    </div>
  )
}

export default CloseFilledMotion
