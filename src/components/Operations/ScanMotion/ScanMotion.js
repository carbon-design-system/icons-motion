import React, { useRef, useState, useEffect } from 'react'
import styles from './scan--motion.module.scss'

const ScanMotion = (props) => {
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
        className={styles.ScanMotion}
      >
        <title>scan</title>
        <path
          className={styles.ScanLine1}
          d="M15,9h2v14h-2V9z"
        />
        <path
          className={styles.ScanLine2}
          d="M21,9h2v14h-2V9z"
        />
        <path
          className={styles.ScanLine3}
          d="M27,9h2v14h-2V9z"
        />
        <path
          className={styles.Scanner}
          d="M21,29H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h16v2H5v22h16V29z"
        />
      </svg>
    </div>
  )
}
 
  

export default ScanMotion
