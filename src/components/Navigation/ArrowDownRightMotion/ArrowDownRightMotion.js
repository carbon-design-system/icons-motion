import React, { useRef, useState, useEffect } from 'react'
import styles from './arrow-down-right--motion.module.scss'

const ArrowDownRightMotion = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  let iconStyles = {
    width: props.width,
    height: props.height
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
        className={styles.ArrowDownRightMotion}
      >
        <title>arrow down right</title>
        <path
          className={styles.ArrowDownRightTip}
          d="M10,26v-2h12.6L16,17.4l1.4-1.4l6.6,6.6V10h2v16H10z"
        />
        <path d="M22.8,24.2L6,7.4L7.4,6l16.8,16.8L22.8,24.2z" />
      </svg>
    </div>
  )
}
 
  

export default ArrowDownRightMotion
