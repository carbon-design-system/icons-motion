import React, { useRef, useState, useEffect } from 'react'
import styles from './zoom-fit--motion.module.scss'

const ZoomFitMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.ZoomFitMotion}>
        <title>Zoom fit</title>
        <path className={styles.ZoomFitWindow1} d="M10,12H8v-2c0-1.1,0.9-2,2-2h2v2h-2V12z" />
        <path className={styles.ZoomFitWindow2} d="M18,12h-2v-2h-2V8h2c1.1,0,2,0.9,2,2V12z" />
        <path className={styles.ZoomFitWindow3} d="M16,18h-2v-2h2v-2h2v2C18,17.1,17.1,18,16,18z" />
        <path className={styles.ZoomFitWindow4} d="M12,18h-2c-1.1,0-2-0.9-2-2v-2h2v2h2V18z" />
        <path vector-effect="non-scaling-stroke" className={styles.ZoomFitGlass}  fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M13,3C7.4,3,2.9,7.5,2.9,13S7.4,23,13,23s10.1-4.5,10.1-10S18.6,3,13,3z M28.3,28.3l-7.9-7.9"   />
      </svg>
    </div>
  )
}

export default ZoomFitMotion
