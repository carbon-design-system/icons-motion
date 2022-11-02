import React, { useRef, useState, useEffect } from 'react'
import styles from './loop--motion.module.scss'

const LoopMotion = (props) => {
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
        className={styles.LoopMotion}
      >
        <title>loop</title>
        <path
          className={styles.LoopArrow}
          d="M21.6,19.4L24,22h-5v2h5l-2.4,2.6L23,28l5-5l-5-5L21.6,19.4z"
        />
        <path
          className={styles.Loop}
          d="M24,22h-5v2h5V22z M11,6c-5,0-9,4-9,9c0,1.8,0.5,3.5,1.5,5l1.7-1.1C3,15.7,3.9,11.3,7.1,9.2s7.6-1.3,9.7,1.9
		s1.3,7.6-1.9,9.7C13.7,21.6,12.4,22,11,22H0v2h11c5,0,9-4,9-9S16,6,11,6z"
        />
      </svg>
    </div>
  )
}
 
  

export default LoopMotion
