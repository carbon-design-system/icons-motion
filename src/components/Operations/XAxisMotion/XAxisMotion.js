import React, { useRef, useState, useEffect } from 'react'
import styles from './x-axis--motion.module.scss'

const XAxisMotion = (props) => {
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
        className={styles.XAxisMotion}
      >
        <title>x-axis</title>
        <path
          className={styles.XAxisArrow}
          d="M28,25l-5,5l-1.4-1.4l2.6-2.6H17c0-0.8,0-1.5,0-2h7.2l-2.6-2.6L23,20L28,25z"
        />
        <path
          className={styles.XAxisShaft}
          d="M24.2,24H6V4H4v20c0,1.1,0.9,2,2,2h18.2V24z"
        />
      </svg>
    </div>
  )
}
 
  

export default XAxisMotion
