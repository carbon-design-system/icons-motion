import React, { useRef, useState, useEffect } from 'react'
import styles from './choose-item--motion.module.scss'

const ChooseItemMotion = (props) => {
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
        className={styles.ChooseItemMotion}
      >
        <title>choose item</title>
        <path
          className={styles.ChooseItemShaft}
          d="M21.1,15H0v2h21.1V15z"
        />
        <path
          className={styles.ChooseItemArrow}
          d="M15,6l-1.4,1.4l7.6,7.6H0v2h21.1l-7.6,7.6L15,26l10-10L15,6z"
        />
         <path
          className={styles.ChooseItemBar}
          d="M28,6h2v20h-2V6z"
        />
      </svg>
    </div>
  )
}
 
  

export default ChooseItemMotion
