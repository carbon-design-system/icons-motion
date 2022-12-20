import React, { useRef, useState, useEffect } from 'react'
import styles from './clean--motion.module.scss'

const CleanMotion = (props) => {
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
        className={styles.CleanMotion}
      >
        <title>clean</title>
        <path
          className={styles.CleanLineStatic}
          d="M30,28h-6v-2h6V28z M28,24h-6v-2h6V24z M26,20h-6v-2h6V20z"
        />
        <path
          className={styles.CleanLine1}
          d="M26,20h-6v-2h6V20z"
        />
        <path
          className={styles.CleanLine2}
          d="M28,24h-6v-2h6V24z"
        />
        <path
          className={styles.CleanLine3}
          d="M30,28h-6v-2h6V28z"
        />
         <path
          className={styles.CleanBroom}
          d="M17,20c0-1.7-0.9-3.3-2.4-4.2L22,3l-1.7-1l-7.6,13.1c-1.9-0.4-3.9,0.1-5.2,1.5C3.7,20.2,4,28.7,4,29c0,0.5,0.5,1,1,1h15
		c0.6,0,1-0.4,1-1c0-0.3-0.1-0.6-0.4-0.8C17.1,25.5,17,20.1,17,20z M11.9,17c1.7,0,3,1.3,3.1,3c0,0,0,0.2,0,0.5l-5.9-2.6
		C9.9,17.2,10.9,16.9,11.9,17z M15.4,28c-0.8-0.8-1.3-1.9-1.4-3h-2c0.1,1.1,0.4,2.1,1,3h-2.2c-0.4-1.3-0.7-2.6-0.7-4H8
		c0.1,1.4,0.3,2.7,0.7,4H6c0-1.8,0.3-5.9,1.8-8.6l7.5,3.4c0.4,1.9,1.1,3.7,2.3,5.2H15.4z"
        />
      </svg>
    </div>
  )
}
 
  

export default CleanMotion
