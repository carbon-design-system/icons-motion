import React, { useRef, useState, useEffect } from 'react'
import styles from './recently-viewed--motion.module.scss'

const RecentlyViewedMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.RecentlyViewedMotion}>
        <title>recently viewed</title>
        <path className={styles.RecentlyViewedArrow} d="M16,2c0,0.7,0,1.4,0,2c-3.3,0-6.6,1.3-8.9,4H12v2H4V2h2v4.2C8.6,3.5,12.2,2,16,2z" /> 
        <path className={styles.RecentlyViewedShaft} d="M16,2C12.2,2,8.6,3.5,6,6.2L7.1,8c4.4-4.9,12-5.3,16.9-0.9s5.3,12,0.9,16.9s-12,5.3-16.9,0.9c-2.5-2.3-4-5.5-4-8.9H2
		c0,7.7,6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z" /> 
      <path className={styles.RecentlyViewedClock} d="M20.6,22L15,16.4V7h2v8.6l5,5L20.6,22z" />      
      </svg>
    </div>
  )
}

export default RecentlyViewedMotion
