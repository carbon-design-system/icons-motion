import React, { useRef, useState, useEffect } from 'react'
import styles from './caret-up--motion.module.scss'

const CaretUpMotion = (props) => {
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
        className={styles.CaretUpMotion}
        x='0px'
        y='0px'
        viewBox='0 0 32 32'
      >
        <path
          className={styles.CaretUp}
          d="M8,20l8-10l8,10H8z"
        />
        <rect fill='none' x='0' y='0' width='32' height='32'></rect>
      </svg>
    </div>
  )
}

export default CaretUpMotion
