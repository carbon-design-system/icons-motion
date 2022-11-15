import React, { useRef, useState, useEffect } from 'react'
import styles from './maximize--motion.module.scss'

const MaximizeMotion = (props) => {
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
        className={styles.MaximizeMotion}
      >
        <title>maximize</title>
        <path
          className={styles.MaximizeTopArrow}
          d="M19,3v2h6.6L17,13.6l1.4,1.4L27,6.4V13h2V3H19z"
        />
        <path
          className={styles.MaximizeBottomArrow}
          d="M15,18.4L13.6,17L5,25.6V19H3v10h10v-2H6.4L15,18.4z"
        />
        <path
          className={styles.MaximizeShafts}
          d="M25.6,5L17,13.6l1.4,1.4L27,6.4L25.6,5z M15,18.4L13.6,17L5,25.6L6.4,27L15,18.4z"
        />
      </svg>
    </div>
  )
}
 
  

export default MaximizeMotion
