import React, { useRef, useState, useEffect } from 'react'
import styles from './recommend--motion.module.scss'

const RecommendMotion = (props) => {
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
        className={styles.RecommendMotion}
      >
        <title>recommend</title>
        <path
          className={styles.RecommendRibbon}
          d="M22,19v10l-6-4l-6,4V19c0.7,0,1.3,0,2,0v6.3l2.9-1.9l1.1-0.7l1.1,0.7l2.9,1.9V19C20.7,19,21.3,19,22,19z"
        />
        <path
          className={styles.RecommendBadge}
          d="M12,18c2.5,1.3,5.5,1.3,8,0v4.2c0.6,0,1.3,0,2,0v-5.6c3.7-3.3,4-9,0.7-12.7C21,2.1,18.5,1,16,1c-5,0-9,4-9,9
		c0,2.5,1.1,5,3,6.7v5.6c0.5,0,1.2,0,2,0V18z M11.1,5c2.8-2.7,7.2-2.6,9.9,0.1c1.3,1.3,2,3.1,2,4.9c0,1.9-0.8,3.7-2.1,5
		c-2.8,2.7-7.2,2.6-9.9-0.1C8.3,12.1,8.3,7.7,11.1,5z"
        />
      </svg>
    </div>
  )
}
 
  

export default RecommendMotion
