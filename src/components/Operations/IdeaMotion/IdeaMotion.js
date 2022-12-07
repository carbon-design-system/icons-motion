import React, { useRef, useState, useEffect } from 'react'
import styles from './idea--motion.module.scss'

const IdeaMotion = (props) => {
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
        className={styles.IdeaMotion}
      >
        <title>idea</title>
        <path
          className={styles.IdeaBulb}
          d="M19,32h-6v-2h6V32z M21,27H11v2h10V27z M16,5C10.5,5,6,9.5,6,15c0,4.4,2,6.3,3.5,7.6c1,0.9,1.5,1.5,1.5,2.4h2
		c0-1.8-1.1-2.9-2.2-3.9C9.4,19.9,8,18.5,8,15c0-4.4,3.6-8,8-8s8,3.6,8,8c0,3.5-1.4,4.9-2.8,6.1c-1.1,1-2.2,2-2.2,3.9h2
		c0-0.9,0.5-1.5,1.5-2.4C24,21.3,26,19.4,26,15C26,9.5,21.5,5,16,5z" fill="#0f62fe"
        />
        <line className={styles.IdeaFilament} stroke="#0f62fe" color="#0f62fe" strokeWidth="2" fill="none" x1="16" y1="25" x2="16" y2="19"/>
        <line className={styles.IdeaTop} stroke="#0f62fe" strokeWidth="2" fill="none" x1="16" y1="4" x2="16" y2="0"/>      
        <line className={styles.IdeaRight} stroke="#0f62fe" strokeWidth="2" fill="none" x1="27" y1="15" x2="31" y2="15"/>
        <line className={styles.IdeaLeft} stroke="#0f62fe" strokeWidth="2" fill="none" x1="5" y1="15" x2="1" y2="15"/>
        <line className={styles.IdeaTopRight} stroke="#0f62fe" strokeWidth="2" fill="none" x1="24.1" y1="7.2" x2="28.4" y2="2.9"/>
        <line className={styles.IdeaTopLeft} stroke="#0f62fe" strokeWidth="2" fill="none" x1="8.2" y1="7.2" x2="3.9" y2="2.9"/>
        <line className={styles.IdeaBottomRight} stroke="#0f62fe" strokeWidth="2" fill="none" x1="28.4" y1="26.7" x2="24.2" y2="22.4"/>
        <line className={styles.IdeaBottomLeft} stroke="#0f62fe" strokeWidth="2" fill="none" x1="3.5" y1="26.7" x2="7.8" y2="22.4"/>
      </svg>
    </div>
  )
}
 
  

export default IdeaMotion
