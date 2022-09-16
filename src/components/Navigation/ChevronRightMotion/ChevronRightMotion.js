import React, { useRef, useState, useEffect } from 'react'
import styles from './chevron-right--motion.module.scss'

const ChevronRightMotion = (props) => {
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
        className={styles.ChevronRightMotion}
        x='0px'
        y='0px'
        viewBox='0 0 32 32'
      >
        <path
          className={styles.ChevronRight}
          d="M22,16L12,26l-1.4-1.4l8.6-8.6l-8.6-8.6L12,6L22,16z"
        />
        <rect fill='none' x='0' y='0' width='32' height='32'></rect>
      </svg>
    </div>
  )
}

export default ChevronRightMotion
