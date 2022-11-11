import React, { useRef, useState, useEffect } from 'react'
import styles from './caret-sort--motion.module.scss'

const CaretSortMotion = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  let iconStyles = {
    width: props.size,
    height: props.size
  }

  useEffect(() => {
    setIsAnimating(props.isAnimating)
  }, [props.isAnimating])

  const shouldAnimate = isAnimating ? styles.isAnimating : ''

  return (
    <div ref={iconRef} className={`${shouldAnimate}`}>
      <svg
        style={iconStyles}
        viewBox='0 0 32 32'
        className={styles.CaretSortMotion}
      >
        <title>Caret sort</title>
        <g className={styles.CaretDown}>
          <path d="M24,20l-8,8l-8-8H24z"/>
        </g>
        <g className={styles.CaretUp}>
          <path d="M8,12l8-8l8,8H8z"/>
        </g>
        
      </svg>
    </div>
  )
}
 
  

export default CaretSortMotion
