import React, { useRef, useState, useEffect } from 'react'
import styles from './explore--motion.module.scss'

const ExploreMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.ExploreMotion}>
        <title>Explore</title>
        <path className={styles.ExploreCompass} d="M22.7,9.3c-0.3-0.3-0.7-0.4-1-0.2l-9,3c-0.3,0.1-0.5,0.3-0.6,0.6l-3,9c-0.2,0.5,0.1,1.1,0.6,1.3c0.2,0.1,0.4,0.1,0.6,0
				l9-3c0.3-0.1,0.5-0.3,0.6-0.6l3-9C23.1,10,23,9.6,22.7,9.3z M11.6,20.4l2.2-6.6l4.4,4.4L11.6,20.4z" />
        <path className={styles.ExploreCircle} d="M16,30C8.3,30,2,23.7,2,16S8.3,2,16,2s14,6.3,14,14C30,23.7,23.7,30,16,30z M16,4C9.4,4,4,9.4,4,16s5.4,12,12,12
				s12-5.4,12-12C28,9.4,22.6,4,16,4z" />
    
      </svg>
    </div>
  )
}

export default ExploreMotion
