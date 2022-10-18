import React, { useRef, useState, useEffect } from 'react'
import styles from './flag-filled--motion.module.scss'

const FlagFilledMotion = (props) => {
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
        viewBox='0 0 32 32'
        className={styles.FlagFilledMotion}
      >
        <title>flag filled</title>
        <path
          className={styles.FlagFilledPole}
          d="M4,2v28h2V20h14.6c0-6.1,0-11.8,0-18H4z"
        />
        <path
          className={styles.FlagFilled}
          d="M22.2,11L28,2H16c0,6.2,0,11.9,0,18h12L22.2,11z"
        />
      </svg>
    </div>
  )
}
 
  

export default FlagFilledMotion
