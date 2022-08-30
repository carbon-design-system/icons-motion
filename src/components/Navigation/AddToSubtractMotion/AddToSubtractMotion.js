import React, { useRef, useState, useEffect } from 'react'
import styles from './add-to-subtract--motion.module.scss'

const AddToSubtractMotion = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  let iconStyles = {
    width: props.size,
    height: props.size,
  }

  React.useEffect(() => {
    setIsAnimating(props.isAnimating);
  }, [props.isAnimating])

  const shouldAnimate = isAnimating ? styles.isAnimating : ''

  return (
      <div
        ref={iconRef}
        className={`${shouldAnimate}`}
      >
    <svg
      style={iconStyles}
      className={styles.AddToSubtractMotion}
      x='0px'
      y='0px'
      viewBox='0 0 32 32'
    >
      <g className={styles.AddVerticalLine}>
        <line
          className={styles.AddToSubtractLine}
          x1='16'
          y1='8'
          x2='16'
          y2='24'
        />
      </g>
      <g className={styles.AddHorizontalLine}>
        <line
          className={styles.AddToSubtractLine}
          x1='8'
          y1='16'
          x2='24'
          y2='16'
        />
      </g>
      // <rect fill='none' x='0' y='0' width='32' height='32'></rect>
    </svg>
    </div>
  )
}

export default AddToSubtractMotion
