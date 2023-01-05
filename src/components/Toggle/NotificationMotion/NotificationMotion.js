import React, { useRef, useState, useEffect } from 'react'
import styles from './notification--motion.module.scss'

const NotificationMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.NotificationMotion}>
        <title>Notification</title>
        <path className={styles.NotificationBell} d="M28.7,19.3L26,16.6V13c0-5.1-3.9-9.4-9-9.9V1h-2v2.1C9.9,3.6,6,7.9,6,13v3.6l-2.7,2.7C3.1,19.5,3,19.7,3,20v3
    c0,0.6,0.4,1,1,1h24c0.6,0,1-0.4,1-1v-3C29,19.7,28.9,19.5,28.7,19.3z M27,22H5v-1.6l2.7-2.7C7.9,17.5,8,17.3,8,17v-4
    c0-4.4,3.6-8,8-8s8,3.6,8,8v4c0,0.3,0.1,0.5,0.3,0.7l2.7,2.7V22z" />
        <path className={styles.NotificationClapper } d="M21,22.9V25c0,0.2,0,0.3,0,0.5c-0.3,2.8-2.7,4.8-5.5,4.5c-2.6-0.3-4.5-2.6-4.5-5.2v-1.9h2V25c0,1.7,1.3,3,3,3s3-1.3,3-3
    v-2.1H21z" />
      </svg>
    </div>
  )
}

export default NotificationMotion

