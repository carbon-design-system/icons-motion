import React, { useRef, useState, useEffect } from 'react'
import styles from './renew--motion.module.scss'

const RenewMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.RenewMotion}>
        <title>renew</title>
        <path className={styles.RenewArrows} d="M28,20v8h-2v-3.7c-2.5,3-6.1,4.7-10,4.7C9.5,29,4.1,24.2,3.2,18c0.8,0,1.4,0,2,0c0.5,2.9,2.3,5.6,4.8,7.2
		c5.1,3.3,11.9,1.9,15.2-3.2H20v-2H28z M16,3C12.1,3,8.5,4.7,6,7.7V4H4v8h8v-2H6.8C10.1,4.9,16.9,3.5,22,6.8
		c2.5,1.6,4.2,4.3,4.8,7.2c0.7,0,1.4,0,2,0C27.9,7.8,22.5,3,16,3z" /> 
        <path className={styles.RenewShafts} d="M6.9,25.3C5,23.4,3.6,20.8,3.2,18c0.8,0,1.4,0,2,0c0.4,2.2,1.5,4.2,3,5.7C7.8,24.3,7.4,24.8,6.9,25.3z M25.4,7.1
		c1.8,1.9,3,4.3,3.4,6.9c-0.7,0-1.4,0-2,0c-0.4-2.1-1.4-4.1-2.9-5.6C24.4,7.9,24.9,7.5,25.4,7.1z" />   
      </svg>
    </div>
  )
}

export default RenewMotion
