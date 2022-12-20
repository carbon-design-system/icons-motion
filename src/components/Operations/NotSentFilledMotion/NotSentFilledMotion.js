import React, { useRef, useState, useEffect } from 'react'
import styles from './not-sent-filled--motion.module.scss'

const NotSentFilledMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.NotSentFilledMotion}>
        <title>Not sent filled</title>
        <path className={styles.NotSentFilled} d="M30,28.6L3.4,2L2,3.4l8,8l-7.3,2.7c-0.5,0.2-0.8,0.8-0.6,1.3c0.1,0.3,0.3,0.5,0.6,0.6l8.6,3.4l3.3-3.4l1.4,1.4l-3.4,3.4
	l3.4,8.6c0.2,0.4,0.5,0.6,0.9,0.6l0,0c0.4,0,0.8-0.3,0.9-0.7l2.7-7.3l8,8L30,28.6z M22.5,16.8l3.5-9.5c0.2-0.5-0.1-1.1-0.6-1.3
	c-0.2-0.1-0.5-0.1-0.7,0l-9.5,3.4L22.5,16.8z"/>   
      </svg>
    </div>
  )
}

export default NotSentFilledMotion
