import React, { useRef, useState, useEffect } from 'react'
import styles from './redo--motion.module.scss'

const RedoMotion = (props) => {
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
        className={styles.RedoMotion}
      >
        <title>redo</title>
        <path
          className={styles.RedoArrow}
          d="M15.6,10h8.6l-3.6-3.6L22,5l6,6l-6,6l-1.4-1.4l3.6-3.6h-8.6L15.6,10z"
        />
        <path
          className={styles.RedoShaft}
          d="M12,10h12.2l0,2H12c-3.3,0-6,2.7-6,6s2.7,6,6,6h8v2h-8c-4.4,0-8-3.6-8-8S7.6,10,12,10z"
        />
      </svg>
    </div>
  )
}
 
  

export default RedoMotion
