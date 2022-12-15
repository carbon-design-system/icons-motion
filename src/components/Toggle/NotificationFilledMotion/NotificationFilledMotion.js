import React, { useRef, useState, useEffect } from 'react'
import styles from './notification-filled--motion.module.scss'

const NotificationFilledMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.NotificationFilledMotion}>
        <title>Notification filled</title>
        <path className={styles.NotificationFilledBell} d="M29,20v3c0,0.6-0.4,1-1,1h-7c-1,0-1,0-2,0h-6c-1,0-1,0-2,0H4c-0.6,0-1-0.4-1-1v-3c0-0.3,0.1-0.5,0.3-0.7L6,16.6V13
		c0-5.1,3.9-9.4,9-9.9V1h2v2.1c5.1,0.5,9,4.8,9,9.9v3.6l2.7,2.7C28.9,19.5,29,19.7,29,20z" />
        <path className={styles.NotificationFilledClapper } d="M21,22.9V25c0,0.2,0,0.3,0,0.5c-0.3,2.8-2.7,4.8-5.5,4.5c-2.6-0.3-4.5-2.6-4.5-5.2v-1.9h2V25c0,1.7,1.3,3,3,3s3-1.3,3-3
		v-2.1H21z" />
      </svg>
    </div>
  )
}

export default NotificationFilledMotion
