import React, { useRef, useState, useEffect } from 'react'
import styles from './arrow-up-right--motion.module.scss'

const ArrowUpRightMotion = (props) => {
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
        className={styles.ArrowUpRightMotion}
      >
        <title>arrow up right</title>
        <path
          className={styles.ArrowUpRightTip}
          d="M10,6v2h12.6L16,14.6l1.4,1.4L24,9.4V22h2V6H10z"
        />
        <path d="M22.6,8L6,24.6L7.4,26L24,9.4L22.6,8z" />
      </svg>
    </div>
  )
}
 
  

export default ArrowUpRightMotion
