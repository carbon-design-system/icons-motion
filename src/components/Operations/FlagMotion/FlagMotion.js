import React, { useRef, useState, useEffect } from 'react'
import styles from './flag--motion.module.scss'

const FlagMotion = (props) => {
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
        className={styles.FlagMotion}
      >
        <title>flag</title>
        <path
          className={styles.FlagPole}
          d="M18.9,18c0,0.7,0,1.3,0,2H6v10H4V2h14.9c0,0.7,0,1.3,0,2H6v14H18.9z"
        />
        <path
          className={styles.Flag}
          d="M28,20H13.7c0-0.7,0-1.3,0-2h10.6l-4.5-7l4.5-7H13.7c0-0.7,0-1.3,0-2H28l-5.8,9L28,20z"
        />
      </svg>
    </div>
  )
}
 
  

export default FlagMotion
