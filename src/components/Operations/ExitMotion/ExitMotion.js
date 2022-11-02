import React, { useRef, useState, useEffect } from 'react'
import styles from './exit--motion.module.scss'

const ExitMotion = (props) => {
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
        className={styles.ExitMotion}
      >
        <title>exit</title>
        <path
          className={styles.ExitBar}
          d="M26,4h2v24h-2V4z"
        />
        <path
          className={styles.ExitShaft}
          d="M7.8,17H22v-2H7.8V17z"
        />
         <path
          className={styles.ExitArrow}
          d="M11.4,20.6L7.8,17H22v-2H7.8l3.6-3.6L10,10l-6,6l6,6L11.4,20.6z"
        />
      </svg>
    </div>
  )
}
 
  

export default ExitMotion
