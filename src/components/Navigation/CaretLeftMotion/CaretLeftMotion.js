import React, { useRef, useState, useEffect } from 'react'
import styles from './caret-left--motion.module.scss'

const CaretLeftMotion = (props) => {
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
        className={styles.CaretLeftMotion}
        x='0px'
        y='0px'
        viewBox='0 0 32 32'
      >
        <path
          className={styles.CaretLeft}
          d="M20,24l-10-8l10-8V24z"
        />
        <rect fill='none' x='0' y='0' width='32' height='32'></rect>
      </svg>
    </div>
  )
}

export default CaretLeftMotion
