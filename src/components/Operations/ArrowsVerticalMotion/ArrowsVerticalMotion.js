import React, { useRef, useState, useEffect } from 'react'
import styles from './arrows-vertical--motion.module.scss'

const ArrowsVerticalMotion = (props) => {
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
        className={styles.ArrowsVerticalMotion}
      >
        <title>arrows vertical</title>
        <path
          className={styles.RArrowsVerticalHead}
          d="M27.6,20.6L24,24.2V16h-2v8.2l-3.6-3.6L17,22l6,6l6-6L27.6,20.6z"
        />
        <path
          className={styles.RArrowsVerticalShaft}
          d="M24,24.2V4h-2v20.2H24z"
        />
        <path
          className={styles.LArrowsVerticalHead}
          d="M9,4l-6,6l1.4,1.4L8,7.8V16h2V7.8l3.6,3.6L15,10L9,4z"
        />
        <path
          className={styles.LArrowsVerticalShaft}
          d="M8,7.8V28h2V7.8H8z"
        />
      </svg>
    </div>
  )
}
 
  

export default ArrowsVerticalMotion
