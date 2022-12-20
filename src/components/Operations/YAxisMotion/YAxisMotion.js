import React, { useRef, useState, useEffect } from 'react'
import styles from './y-axis--motion.module.scss'

const YAxisMotion = (props) => {
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
        className={styles.YAxisMotion}
      >
        <title>y-axis</title>
        <path
          className={styles.YAxisArrow}
          d="M8,14c-0.8,0-1.5,0-2,0V7.8l-2.6,2.6L2,9l5-5l5,5l-1.4,1.4L8,7.8V14z"
        />
        <path
          className={styles.YAxisShaft}
          d="M28,26v2H8c-1.1,0-2-0.9-2-2V7.9c0.5,0,1.2,0,2,0V26H28z"
        />
      </svg>
    </div>
  )
}
 
  

export default YAxisMotion
