import React, { useRef, useState, useEffect } from 'react'
import styles from './move--motion.module.scss'

const MoveMotion = (props) => {
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
        className={styles.MoveMotion}
      >
        <title>move</title>
        <path
          className={styles.MoveMotionCross}
          d="M21,15h-4v-4h-2v4h-4v2h4v4.5h2V17h4V15z"
        />
        <path
          className={styles.MoveMotionTop}
          d="M17,16V6.8l2.6,2.6L21,8l-5-5l-5,5l1.4,1.4L15,6.8V16v2h2V16z"
        />
        <path
          className={styles.MoveMotionRight}
          d="M24,11l-1.4,1.4l2.6,2.6H16h-2v2h2h9.2l-2.6,2.6L24,21l5-5L24,11z"
        />
        <path
          className={styles.MoveMotionLeft}
          d="M18,15h-2H6.8l2.6-2.6L8,11l-5,5l5,5l1.4-1.4L6.8,17H16h2V15z"
        />
         <path
          className={styles.MoveMotionBottom}
          d="M17,14h-2v2v9.2l-2.6-2.6L11,24l5,5l5-5l-1.4-1.4L17,25.2V16V14z"
        />
      </svg>
    </div>
  )
}
 
  

export default MoveMotion
