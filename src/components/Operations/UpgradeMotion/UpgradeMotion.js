import React, { useRef, useState, useEffect } from 'react'
import styles from './upgrade--motion.module.scss'

const UpgradeMotion = (props) => {
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
        className={styles.UpgradeMotion}
      >
        <title>upgrade</title>
        <path
          className={styles.UpgradeArrow}
          d="M29,17c0,0.6-0.4,1-1,1h-5v4h-2v-6h4.6L16,6.4L6.4,16H11v6H9v-4H4c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l12-12
		c0,0,0,0,0,0c0.4-0.4,1-0.4,1.4,0l12,12C28.9,16.5,29,16.7,29,17z"
        />
        <path
          className={styles.UpgradeShaft}
          d="M21,18c0.7,0,1.3,0,2,0v4c0,1.1-0.9,2-2,2H11c-1.1,0-2-0.9-2-2v-4c0.7,0,1.3,0,2,0v4h10V18z"
        />
        <path
          className={styles.UpgradeBase}
          d="M21,26H11c-1.1,0-2,0.9-2,2v2c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2v-2C23,26.9,22.1,26,21,26z M21,30H11v-2h10V30z"
        />
      </svg>
    </div>
  )
}
 
  

export default UpgradeMotion
