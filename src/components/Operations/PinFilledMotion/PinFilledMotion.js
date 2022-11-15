import React, { useRef, useState, useEffect } from 'react'
import styles from './pin-filled--motion.module.scss'

const PinFilledMotion = (props) => {
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
        className={styles.PinFilledMotion}
      >
        <title>pin filled</title>
        <path
          className={styles.PinFilledPoint}
          d="M9.9,20.7L3,27.6L4.4,29l6.9-6.9L9.9,20.7z"
        />
        <path
          className={styles.PinFilledBase}
          d="M29.6,12.3l1.4-1.4L21,1l-1.3,1.4l1.2,1.2L9.4,13.3l-1.7-1.7L6.2,13l5.7,5.7L9,21.6l1.4,1.4l2.9-2.9l5.7,5.7l1.4-1.4
		l-1.7-1.7l9.7-11.5L29.6,12.3z M29.6,12.3l1.4-1.4L21,1l-1.3,1.4l1.2,1.2L9.4,13.3l-1.7-1.7L6.2,13l5.7,5.7L9,21.6l1.4,1.4l2.9-2.9
		l5.7,5.7l1.4-1.4l-1.7-1.7l9.7-11.5L29.6,12.3z M17.3,21.2l-6.5-6.5L22.3,5L27,9.7L17.3,21.2z"
        />
      </svg>
    </div>
  )
}
 
  

export default PinFilledMotion
