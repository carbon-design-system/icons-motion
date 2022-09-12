import React, { useRef, useState, useEffect } from 'react'
import styles from './zoom-fit--motion.module.scss'

const ZoomFitMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.ZoomFitMotion}>
        <title>Zoom fit</title>
        <path className={styles.ZoomFitGlass} d="M21.4,20c1.6-2,2.6-4.4,2.6-7c0-6.1-4.9-11-11-11S2,6.9,2,13s4.9,11,11,11c2.6,0,5-0.9,7-2.6l7.6,7.6l1.4-1.4L21.4,20z
		 M13,22c-5,0-9-4-9-9s4-9,9-9s9,4,9,9C22,18,18,22,13,22z" />
        <path className={styles.ZoomFitWindow} d="M10,12H8v-2c0-1.1,0.9-2,2-2h2v2h-2V12z M18,12h-2v-2h-2V8h2c1.1,0,2,0.9,2,2V12z M12,18h-2c-1.1,0-2-0.9-2-2v-2h2v2h2V18z
		 M16,18h-2v-2h2v-2h2v2C18,17.1,17.1,18,16,18z" />
      </svg>
    </div>
  )
}

export default ZoomFitMotion
