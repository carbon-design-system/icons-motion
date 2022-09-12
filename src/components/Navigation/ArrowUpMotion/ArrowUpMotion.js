import React, { useRef, useState, useEffect } from 'react'
import styles from './arrow-up--motion.module.scss'

const ArrowUpMotion = (props) => {
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
        className={styles.ArrowUpMotion}
        viewBox='0 0 32 32'
      >
        <title>arrow up</title>
        <path
          className={styles.ArrowUpTip}
          d="M16,4L6,14l1.4,1.4L15,7.8v7.6h2V7.8l7.6,7.6L26,14L16,4z"
        />
        <path d="M15,7.8V28h2V7.8H15z" />
      </svg>
    </div>
  )
}
 

export default ArrowUpMotion
