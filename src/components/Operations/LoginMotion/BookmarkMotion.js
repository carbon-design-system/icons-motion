import React, { useRef, useState, useEffect } from 'react'
import styles from './login--motion.module.scss'

const LoginMotion = (props) => {
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
        className={styles.LoginMotion}
      >
        <title>login</title>
        <path
          className={styles.LoginBottom}
          d="M28,16v12c0,1.1-0.9,2-2,2H14c-1.1,0-2-0.9-2-2v-3h2v3h12V16C26.7,16,27.3,16,28,16z"
        />
        <path
          className={styles.LoginTop}
          d="M28,16c-0.7,0-1.3,0-2,0V4H14v3h-2V4c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2V16z"
        />
        <path
          className={styles.LoginShaft}
          d="M18.2,17H4v-2h14.2V17z"
        />
         <path
          className={styles.LoginHead}
          d="M14.6,20.6l3.6-3.6H4v-2h14.2l-3.6-3.6L16,10l6,6l-6,6L14.6,20.6z"
        />
      </svg>
    </div>
  )
}
 
  

export default LoginMotion
