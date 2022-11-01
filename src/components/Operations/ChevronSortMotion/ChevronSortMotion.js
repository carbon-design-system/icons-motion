import React, { useRef, useState, useEffect } from 'react'
import styles from './chevron-sort--motion.module.scss'

const ChevronSortMotion = (props) => {
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
        className={styles.ChevronSortMotion}
      >
        <title>Chevron sort</title>
        <g className={styles.ChevronDown}>
        <polygon points="16 28 9 21 10.41 19.59 16 25.17 21.59 19.59 23 21 16 28"/>
        </g>
        <g className={styles.ChevronUp}>
        <polygon points="16 4 23 11 21.59 12.41 16 6.83 10.41 12.41 9 11 16 4"/>
        </g>
        
      </svg>
    </div>
  )
}
  

export default ChevronSortMotion
