import React, { useRef, useState, useEffect } from 'react'
import styles from './minimize--motion.module.scss'

const MinimizeMotion = (props) => {
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
        className={styles.MinimizeMotion}
      >
        <title>minimize</title>
        <path
          className={styles.MinimizeTopArrow}
          d="M31,2.4L29.6,1L21,9.6V3h-2v10h10v-2h-6.6L31,2.4z"
        />
        <path
          className={styles.MinimizeBottomArrow}
          d="M3,19v2h6.6L1,29.6L2.4,31l8.6-8.6V29h2V19H3z"
        />
        <path
          className={styles.MinimizeShafts}
          d="M9.6,21L1,29.6L2.4,31l8.6-8.6L9.6,21z M31,2.4L29.6,1L21,9.6l1.4,1.4L31,2.4z"
        />
      </svg>
    </div>
  )
}
 
  

export default MinimizeMotion
