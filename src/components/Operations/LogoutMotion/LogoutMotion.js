import React, { useRef, useState, useEffect } from 'react'
import styles from './logout--motion.module.scss'

const LogoutMotion = (props) => {
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
        className={styles.LogoutMotion}
      >
        <title>logout</title>
        <path
          className={styles.LogoutBottom}
          d="M4,12.3c0.7,0,1.3,0,2,0V28h12v-3h2v3c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2V12.3z"
        />
        <path
          className={styles.LogoutTop}
          d="M18,7V4H6v15.9c-0.7,0-1.3,0-2,0V4c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v3H18z"
        />
        <path
          className={styles.LogoutShaft}
          d="M23.2,17H9v-2h14.2V17z"
        />
         <path
          className={styles.LogoutHead}
          d="M19.6,20.6l3.6-3.6H9v-2h14.2l-3.6-3.6L21,10l6,6l-6,6L19.6,20.6z"
        />
      </svg>
    </div>
  )
}
 
  

export default LogoutMotion
