import React, { useRef, useState, useEffect } from 'react'
import styles from './caret-sort-up--motion.module.scss'

const CaretSortUpMotion = (props) => {
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
        className={styles.CaretSortUpMotion}
      >
        <title>Caret sort up</title>
        <g className={styles.CaretSortUp}>
          <path d="M8,12l8-8l8,8H8z"/>
        </g>
        
      </svg>
    </div>
  )
}
 
  

export default CaretSortUpMotion
