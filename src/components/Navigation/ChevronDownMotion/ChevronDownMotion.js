import React, { useRef, useState, useEffect } from 'react'
import styles from './chevron-down--motion.module.scss'

const ChevronDownMotion = (props) => {
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
        className={styles.ChevronDownMotion}
        x='0px'
        y='0px'
        viewBox='0 0 32 32'
      >
        <polygon
          className={styles.ChevronDown}
          points='16,22 6,12 7.4,10.6 16,19.2 24.6,10.6 26,12'
        />
        <rect fill='none' x='0' y='0' width='32' height='32'></rect>
      </svg>
    </div>
  )
}

export default ChevronDownMotion
