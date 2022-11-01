import React, { useRef, useState, useEffect } from 'react'
import styles from './layers--motion.module.scss'

const LayersMotion = (props) => {
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
        className={styles.LayersMotion}
      >
        <title>layers</title>
        <path
          className={styles.Layers1}
          d="M16,18c-0.2,0-0.3,0-0.5-0.1l-13-7C2,10.6,1.9,10,2.1,9.5c0.1-0.2,0.2-0.3,0.4-0.4l13-7c0.3-0.2,0.7-0.2,0.9,0l13,7
          c0.5,0.3,0.7,0.9,0.4,1.4c-0.1,0.2-0.2,0.3-0.4,0.4l-13,7C16.3,18,16.2,18,16,18z M5.1,10L16,15.9L26.9,10L16,4.1L5.1,10z"
        />
        <path
          className={styles.Layers2}
          d="M16,24c-0.2,0-0.3,0-0.5-0.1l-13-7l0.9-1.8L16,21.9l12.5-6.7l0.9,1.8l-13,7C16.3,24,16.2,24,16,24z"
        />
        <path
          className={styles.Layers3}
          d="M16,30c-0.2,0-0.3,0-0.5-0.1l-13-7l0.9-1.8L16,27.9l12.5-6.7l0.9,1.8l-13,7C16.3,30,16.2,30,16,30z"
        />
      </svg>
    </div>
  )
}
 
  

export default LayersMotion
