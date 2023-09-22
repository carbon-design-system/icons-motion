import React, { useRef, useState, useEffect } from 'react'
import styles from './zoom-in--motion.module.scss'

const ZoomInMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.ZoomInMotion}>
        <title>Zoom in</title>
        <path className={styles.ZoomInGlass}  fill="none" stroke="#000000" d="M13,3C7.4,3,2.9,7.5,2.9,13S7.4,23,13,23s10.1-4.5,10.1-10S18.6,3,13,3z M28.3,28.3l-7.9-7.9"   />
        <path className={styles.ZoomInHorizontal} d="M18,12h-4h-2H8v2h4h2h4V12z" />
        <path className={styles.ZoomInVertical} d="M14,12V8h-2v4v2v4h2v-4V12z" />
      </svg>
    </div>
  )
}

export default ZoomInMotion
