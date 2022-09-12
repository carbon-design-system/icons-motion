import React, { useRef, useState, useEffect } from 'react'
import styles from './arrow-down--motion.module.scss'

const ArrowDownMotion = (props) => {
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
        className={styles.ArrowDownMotion}
      >
        <title>arrow down</title>
        <path
          className={styles.ArrowDownTip}
          d="M24.6,16.6L17,24.2v-7.6l-2,0v7.6l-7.6-7.6L6,18l10,10l10-10L24.6,16.6z"
        />
        <path d="M17,24.3V4h-2v20.3H17z" />
      </svg>
    </div>
  )
}
 
  

export default ArrowDownMotion
