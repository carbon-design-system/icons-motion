import React, { useRef, useState, useEffect } from 'react'
import styles from './reset--motion.module.scss'

const ResetMotion = (props) => {
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
        className={styles.ResetMotion}
      >
        <title>reset</title>
        <path
          className={styles.ResetArrow}
          d="M6,16v6.2l-3.6-3.6L1,20l6,6l6-6l-1.4-1.4L8,22.2V16l0,0H6z"
        />
        <path
          className={styles.ResetShaft}
          d="M18,28c6.6,0,12-5.4,12-12S24.6,4,18,4S6,9.4,6,16v6.2h2V16l0,0c0-5.5,4.5-10,10-10s10,4.5,10,10s-4.5,10-10,10V28z"
        />
      </svg>
    </div>
  )
}
 
  

export default ResetMotion
