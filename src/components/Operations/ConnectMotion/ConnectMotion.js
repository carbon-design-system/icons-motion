import React, { useRef, useState, useEffect } from 'react'
import styles from './connect--motion.module.scss'

const ConnectMotion = (props) => {
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
        className={styles.ConnectMotion} 
        viewBox='0 0 32 32'  
        style={iconStyles}>
        <title>connect</title>
        <path className={styles.ConnectOutline} d="M18.8,17.4l-4.2-4.2C15.5,12,16,10.5,16,9c0-3.9-3.1-7-7-7C5.2,2,2,5.1,2,9s3.1,7,7,7c1.5,0,3-0.5,4.2-1.4l4.2,4.2
			L18.8,17.4z M4,9c0-2.8,2.2-5,5-5s5,2.2,5,5s-2.2,5-5,5S4,11.8,4,9z" />
        <path className={styles.ConnectFill} d="M23,16c-1.5,0-3,0.5-4.2,1.4l-1.4,1.4c-2.3,3.1-1.7,7.5,1.4,9.8s7.5,1.7,9.8-1.4s1.7-7.5-1.4-9.8C26,16.5,24.5,16,23,16z" />
      </svg>
    </div>
  )
}

export default ConnectMotion
