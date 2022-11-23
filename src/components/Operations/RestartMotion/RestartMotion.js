import React, { useRef, useState, useEffect } from 'react'
import styles from './restart--motion.module.scss'

const RestartMotion = (props) => {
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
        className={styles.RestartMotion}
      >
        <title>restart</title>
        <path
          className={styles.RestartArrow}
          d="M16,8h6.2l-3.6,3.6L20,13l6-6l-6-6l-1.4,1.4L22.2,6H16V8z"
        />
        <path
          className={styles.RestartShaft}
          d="M26,18c0,5.5-4.5,10-10,10S6,23.5,6,18S10.5,8,16,8h6.2V6H16C9.4,6,4,11.4,4,18s5.4,12,12,12s12-5.4,12-12H26z"
        />
      </svg>
    </div>
  )
}
 
  

export default RestartMotion
