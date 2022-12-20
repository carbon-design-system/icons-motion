import React, { useRef, useState, useEffect } from 'react'
import styles from './not-sent--motion.module.scss'

const NotSentMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.NotSentMotion}>
        <title>Not sent </title>
        <path className={styles.NotSent} d="M30,28.6L3.4,2L2,3.4l8,8l-7.3,2.7c-0.5,0.2-0.8,0.8-0.6,1.3c0.1,0.3,0.3,0.5,0.6,0.6l9.6,3.8l3.8,9.6
	c0.1,0.4,0.5,0.6,0.9,0.6l0,0c0.4,0,0.8-0.3,0.9-0.7l2.7-7.3l8,8L30,28.6z M5.8,15l5.7-2l3.1,3l-1.8,1.8L5.8,15z M17,26.2l-2.8-7
	l1.8-1.8l3,3L17,26.2z M15.7,11.4l7.6-2.8l-2.8,7.6l1.6,1.6l3.8-10.5c0.2-0.5-0.1-1.1-0.6-1.3c-0.2-0.1-0.5-0.1-0.7,0L14.1,9.9
	L15.7,11.4z"/>   
      </svg>
    </div>
  )
}

export default NotSentMotion
