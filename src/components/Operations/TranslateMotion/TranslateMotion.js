import React, { useRef, useState, useEffect } from 'react'
import styles from './translate--motion.module.scss'

const TranslateMotion = (props) => {
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
        className={styles.TranslateMotion}
      >
        <title>translate</title>
        <path
          className={styles.Translate}
          d="M17.5,7V5h-7V2h-2v3h-7v2h10.7c-0.6,2.3-1.6,4.4-3.2,6.2C8,11.9,7.3,10.5,6.8,9H4.7c0.6,2,1.6,3.9,3,5.6
		C6.2,16,4.4,17.2,2.5,18l0.8,1.9C5.4,19,7.4,17.6,9,16c1.6,1.7,3.6,3,5.8,3.8l0.7-1.8c-1.9-0.7-3.7-1.9-5.1-3.4
		c1.9-2.2,3.3-4.8,3.9-7.6H17.5z"
        />
        <path
          className={styles.TranslateEnglish}
          d="M28.3,29h2.1l-6-15h-2.4l-6,15h2.1l1.6-4h6.9L28.3,29z M20.7,23l2.6-6.6l2.6,6.6H20.7z"
        />
      </svg>
    </div>
  )
}
 
  

export default TranslateMotion
