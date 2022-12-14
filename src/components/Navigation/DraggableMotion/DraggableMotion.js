import React, { useRef, useState, useEffect } from 'react'
import styles from './draggable--motion.module.scss'

const DraggableMotion = (props) => {
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
        className={styles.DraggableMotion} 
        viewBox='0 0 32 32'  
        style={iconStyles}>
        <title>draggable</title>
        <rect
          className={styles.draggableRectOne}
          x='10'
          y='6'
          width='4'
          height='4'
        />
        <rect
          className={styles.draggableRectTwo}
          x='18'
          y='6'
          width='4'
          height='4'
        />
        <rect
          className={styles.draggableRectThree}
          x='10'
          y='14'
          width='4'
          height='4'
        />
        <rect
          className={styles.draggableRectFour}
          x='18'
          y='14'
          width='4'
          height='4'
        />
        <rect
          className={styles.draggableRectFive}
          x='10'
          y='22'
          width='4'
          height='4'
        />
        <rect
          className={styles.draggableRectSix}
          x='18'
          y='22'
          width='4'
          height='4'
        />
        <rect fill='none' x='0' y='0' width='32' height='32'></rect>
      </svg>
    </div>
  )
}

export default DraggableMotion
