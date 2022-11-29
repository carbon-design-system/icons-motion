import React, { useRef, useState, useEffect } from 'react'
import styles from './pan-horizontal--motion.module.scss'

const PanHorizontalMotion = (props) => {
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
        viewBox='0 0 32 32'
        className={styles.PanHorizontalMotion}
      >
        <title>pan horizontal</title>
        <path
          className={styles.PanHorizontalRight}
          d="M29,16l-6,6l-1.4-1.4l3.6-3.6H11.6c0-0.7,0-1.3,0-2h13.5l-3.6-3.6L23,10L29,16z"
        />
        <path
          className={styles.PanHorizontalLeft}
          d="M20.7,15c0,0.7,0,1.3,0,2H6.8l3.6,3.6L9,22l-6-6l6-6l1.4,1.4L6.8,15H20.7z"
        />
        <path
          className={styles.PanHorizontalBar}
          d="M25.2,15H6.8v2h18.3V15z"
        />
      </svg>
    </div>
  )
}
 
  

export default PanHorizontalMotion
