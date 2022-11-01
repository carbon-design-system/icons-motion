import React, { useRef, useState, useEffect } from 'react'
import styles from './drag-horizontal--motion.module.scss'

const DragHorizontalMotion = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  const iconStyles = {
    width: props.size,
    height: props.size
  }

  useEffect(() => {
    setIsAnimating(props.isAnimating)
  }, [props.isAnimating])

  const shouldAnimate = isAnimating ? styles.isAnimating : ''

  return (
    <div ref={iconRef} className={`${shouldAnimate}`}>
      <svg viewBox='0 0 32 32' className='drag-horizontal' style={iconStyles}>
        <title>drag--horizontal</title>
        <polygon
          className={styles.DragHorizontalLeft}
          points='12 4 12 15 5.83 15 8.41 12.41 7 11 2 16 7 21 8.41 19.59 5.83 17 12 17 12 28 14 28 14 4 12 4'
        />
        <polygon
          className={styles.DragHorizontalRight}
          points='25 11 23.59 12.41 26.17 15 20 15 20 4 18 4 18 28 20 28 20 17 26.17 17 23.59 19.59 25 21 30 16 25 11'
        />
      </svg>
    </div>
  )
}

export default DragHorizontalMotion
