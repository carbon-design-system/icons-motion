import React, { useRef, useState, useEffect } from 'react'
import styles from './zoom-in--motion.module.scss'

const ZoomInMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.ZoomInMotion}>
        <title>Zoom in</title>
        <path className={styles.ZoomInGlass} d="M21.4,20c1.6-2,2.6-4.4,2.6-7c0-6.1-4.9-11-11-11S2,6.9,2,13s4.9,11,11,11c2.6,0,5-0.9,7-2.6l7.6,7.6l1.4-1.4L21.4,20z
		 M13,22c-5,0-9-4-9-9s4-9,9-9s9,4,9,9C22,18,18,22,13,22z" />
        <path className={styles.ZoomInPlus} d="M18,12h-4V8h-2v4H8v2h4v4h2v-4h4V12z" />
      </svg>
    </div>
  )
}

export default ZoomInMotion
