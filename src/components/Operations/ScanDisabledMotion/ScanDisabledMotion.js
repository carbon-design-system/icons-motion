import React, { useRef, useState, useEffect } from 'react'
import styles from './scan-disabled--motion.module.scss'

const ScanDisabledMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.ScanDisabledMotion}>
        <title>Scan disabled</title>
        <path className={styles.ScanDisabled} d="M29.4,2.1C29,1.9,28.6,2,28.3,2.3l-26,26c-0.4,0.4-0.4,1,0,1.4C2.5,29.9,2.7,30,3,30h8v-2H5.4l4-4H22c1.1,0,2-0.9,2-2V9.4
	l4-4V11h2V3C30,2.6,29.8,2.2,29.4,2.1z M22,22H11.4L22,11.4V22z M10,17.8V10h7.8l2-2H10c-1.1,0-2,0.9-2,2v9.8L10,17.8z M11,2H2v9h2
	V4h7V2z M21,30h9v-9h-2v7h-7V30z M4,23.8V21H2v4.8L4,23.8z M25.8,2H21v2h2.8L25.8,2z"/>   
      </svg>
    </div>
  )
}

export default ScanDisabledMotion
