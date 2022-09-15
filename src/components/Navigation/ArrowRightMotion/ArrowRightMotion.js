import React, { useRef, useState, useEffect } from 'react'
import styles from './arrow-right--motion.module.scss'

const ArrowRightMotion = (props) => {
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
        className={styles.ArrowRightMotion}
      >
        <title>arrow right</title>
        <path
          className={styles.ArrowRightTip}
          d="M18,6l-1.4,1.4l7.6,7.6h-7.6v2h7.6l-7.6,7.6L18,26l10-10L18,6z"
        />
        <path d="M24.2,15H4v2h20.2V15z" />
      </svg>
    </div>
  )
}
 
  

export default ArrowRightMotion
