import React, { useRef, useState, useEffect } from 'react'
import styles from './pan-vertical--motion.module.scss'

const PanVerticalMotion = (props) => {
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
        className={styles.PanVerticalMotion}
      >
        <title>pan vertical</title>
        <path
          className={styles.PanVerticalUp}
          d="M17,12.1c-0.7,0-1.3,0-2,0V6.8l-3.6,3.6L10,9l6-6l6,6l-1.4,1.4L17,6.8V12.1z"
        />
        <path
          className={styles.PanVerticalDown}
          d="M20.6,21.6L22,23l-6,6l-6-6l1.4-1.4l3.6,3.6v-6c0.7,0,1.3,0,2,0v6L20.6,21.6z"
        />
        <path
          className={styles.PanVerticalBar}
          d="M15,7.6v16.8h2V7.6H15z"
        />
      </svg>
    </div>
  )
}
 
  

export default PanVerticalMotion
