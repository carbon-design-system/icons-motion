import React, { useRef, useState, useEffect } from 'react'
import styles from './overflow-menu-vertical--motion.module.scss'

const OverflowMenuVerticalMotion = (props) => {
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
        style={iconStyles}viewBox='0 0 32 32' 
        className={styles.overflowMenuVerticalMotion}
      >
        <title>overflow menu vertical</title> 
          <path
          className={styles.OverflowMenuVerticalTop}
          d="M16,6c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S14.9,6,16,6z"
          />
          <path
          className={styles.OverflowMenuVerticalMiddle}
          d="M16,14c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S14.9,14,16,14z"
          />
          <path
          className={styles.OverflowMenuVerticalBottom}
          d="M16,22c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S14.9,22,16,22z"
          />
      </svg>
    </div>
  )
}

export default OverflowMenuVerticalMotion
