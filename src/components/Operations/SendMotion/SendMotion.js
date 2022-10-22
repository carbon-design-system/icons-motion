import React, { useRef, useState, useEffect } from 'react'
import styles from './send--motion.module.scss'

const SendMotion = (props) => {
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
        className={styles.SendMotion}
      >
        <title>send</title>
        <path
          className={styles.Send}
          d="M27.5,15.1l-22-11C5.1,3.9,4.7,4,4.4,4.2C4.1,4.5,4,4.9,4,5.2L7,16L4,26.7c-0.1,0.5,0.2,1.1,0.7,1.2c0.1,0,0.2,0,0.3,0
	c0.2,0,0.3,0,0.4-0.1l22-11c0.5-0.3,0.7-0.9,0.4-1.3C27.8,15.4,27.6,15.2,27.5,15.1z M6.6,25.1L8.8,17H18v-2H8.8L6.6,6.9L24.8,16
	L6.6,25.1z"
        />
      </svg>
    </div>
  )
}
 
  

export default SendMotion
