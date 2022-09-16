import React, { useRef, useState, useEffect } from 'react'
import styles from './caret-down--motion.module.scss'

const CaretDownMotion = (props) => {
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
        className={styles.CaretDownMotion}
        x='0px'
        y='0px'
        viewBox='0 0 32 32'
      >
        <path
          className={styles.CaretDown}
          d="M24,12l-8,10L8,12H24z"
        />
        <rect fill='none' x='0' y='0' width='32' height='32'></rect>
      </svg>
    </div>
  )
}

export default CaretDownMotion
