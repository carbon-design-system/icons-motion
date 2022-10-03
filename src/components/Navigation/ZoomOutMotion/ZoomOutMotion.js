import React, { useRef, useState, useEffect } from 'react'
import styles from './zoom-out--motion.module.scss'

const ZoomOutMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.ZoomOutMotion}>
        <title>Zoom out</title>
        <path vector-effect="non-scaling-stroke" className={styles.ZoomOutGlass}  fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M13,3C7.4,3,2.9,7.5,2.9,13S7.4,23,13,23s10.1-4.5,10.1-10S18.6,3,13,3z M28.3,28.3l-7.9-7.9"   />
        <path className={styles.ZoomOutMinus} d="M8,12h10v2H8V12z" />
      </svg>
    </div>
  )
}

export default ZoomOutMotion
