import React, { useRef, useState, useEffect } from 'react'
import styles from './z-axis--motion.module.scss'

const ZAxisMotion = (props) => {
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
        className={styles.ZAxisMotion}
      >
        <title>z-axis</title>
        <path
          className={styles.ZAxisArrow}
          d="M17,13c-0.6,0-1.3,0-2,0v-2V7V6.8l-2.6,2.6L11,8l5-5l5,5l-1.4,1.4L17,6.8V7v4V13z"
        />
        <path
          className={styles.ZAxisShaft}
          d="M25,21v3.6l-8-8V10V6V5.8h-2V6v4v6.6l-8,8V21H5v7h7v-2H8.4l7.6-7.6l7.6,7.6H20v2h7v-7H25z"
        />
      </svg>
    </div>
  )
}
 
  

export default ZAxisMotion
