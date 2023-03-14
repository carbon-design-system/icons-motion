import React, { useRef, useState, useEffect } from 'react'
import styles from './cut--motion.module.scss'

const CutMotion = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  let iconStyles = {
    width: props.size,
    height: props.size
  }

  useEffect(() => {
    setIsAnimating(props.isAnimating)
  }, [props.isAnimating])

  const shouldAnimate = isAnimating ? styles.isAnimating : ''

  return (
    <div ref={iconRef} className={`${shouldAnimate}`}>
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.CutMotion}>
        <title>Cut</title>
        <path className={styles.CutRotateUp} d="M20.2,16l6.3-3.6c2.4-1.4,3.3-4.4,1.9-6.8c-0.7-1.2-1.8-2.1-3.1-2.4C24.9,3.1,24.4,3,24,3c-2.8,0-5,2.2-5,5
	        c0,0.9,0.2,1.8,0.7,2.5c0.5,0.9,1.4,1.7,2.4,2.1l-3.8,2.2L16.2,16L3,23.7l1,1.7l14.2-8.3L20.2,16z M21.4,9.5
	        c-0.8-1.4-0.4-3.3,1.1-4.1l0,0c1.4-0.8,3.3-0.3,4.1,1.1l0,0c0.8,1.4,0.3,3.3-1.1,4.1l0,0l0,0C24.1,11.5,22.2,11,21.4,9.5L21.4,9.5z"/>
        <rect id="_Transparent_Rectangle_" fill="none" width="32" height="32"/>
        <path className={styles.CutRotateDown} d="M18.2,17.1l3.8,2.2c-1,0.4-1.8,1.2-2.4,2.1c-1.4,2.4-0.6,5.4,1.8,6.8c0.8,0.5,1.7,0.7,2.5,0.7c0.4,0,0.9-0.1,1.3-0.2
	        c2.7-0.7,4.3-3.4,3.6-6.1c-0.3-1.3-1.2-2.4-2.4-3.1L20.2,16l-2-1.2L4,6.6L3,8.3L16.2,16L18.2,17.1z M26.6,25.5
	        c-0.8,1.4-2.7,1.9-4.1,1.1l0,0c-1.4-0.8-1.9-2.7-1.1-4.1l0,0c0.8-1.4,2.7-1.9,4.1-1.1l0,0l0,0C26.9,22.2,27.4,24.1,26.6,25.5
	        L26.6,25.5z"/>
      </svg>
    </div>
  )
}

export default CutMotion
