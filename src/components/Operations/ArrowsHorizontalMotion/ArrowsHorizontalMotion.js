import React, { useRef, useState, useEffect } from 'react'
import styles from './arrows-horizontal--motion.module.scss'

const ArrowsHorizontalMotion = (props) => {
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
        className={styles.ArrowsHorizontalMotion}
      >
        <title>arrows horizontal</title>
        <path
          className={styles.RArrowsHorizontalHead}
          d="M28,10l-6-6l-1.4,1.4L24.2,9h-9.5v2h9.5l-3.6,3.6L22,16L28,10z"
        />
        <path
          className={styles.RArrowsHorizontalShaft}
          d="M21.1,9H4v2h17.1V9z"
        />
        <path
          className={styles.LArrowsHorizontalHead}
          d="M11.4,26.6L7.8,23h9.7v-2H7.8l3.6-3.6L10,16l-6,6l6,6L11.4,26.6z"
        />
        <path
          className={styles.LArrowsHorizontalShaft}
          d="M7.8,23H28v-2H7.8V23z"
        />
      </svg>
    </div>
  )
}
 
  

export default ArrowsHorizontalMotion
