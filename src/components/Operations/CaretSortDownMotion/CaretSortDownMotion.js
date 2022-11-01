import React, { useRef, useState, useEffect } from 'react'
import styles from './caret-sort-down--motion.module.scss'

const CaretSortDownMotion = (props) => {
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
        className={styles.CaretSortDownMotion}
      >
        <title>Caret sort down</title>
        <g className={styles.CaretSortDown}>
          <path d="M24,20l-8,8l-8-8H24z"/>
        </g>
        
      </svg>
    </div>
  )
}
 
  

export default CaretSortDownMotion
