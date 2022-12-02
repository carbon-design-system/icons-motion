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
          d="M19,32h-6v-2h6V32z M21,26H11v2h10V26z M16,4C10.5,4,6,8.5,6,14c0,4.4,2,6.3,3.5,7.6c1,0.9,1.5,1.5,1.5,2.4h2
		c0-1.8-1.1-2.9-2.2-3.9C9.4,18.9,8,17.5,8,14c0-4.4,3.6-8,8-8s8,3.6,8,8c0,3.5-1.4,4.9-2.8,6.1c-1.1,1-2.2,2-2.2,3.9h2
		c0-0.9,0.5-1.5,1.5-2.4C24,20.3,26,18.4,26,14C26,8.5,21.5,4,16,4z"
        />
        <line className={styles.IdeaFilament} stroke="#000000" strokeWidth="2" fill="none" x1="16" y1="24" x2="16" y2="18"/>
        <line className={styles.IdeaTop} stroke="#000000" strokeWidth="2" fill="none" x1="16" y1="0" x2="16" y2="2"/>      
        <line className={styles.IdeaRight} stroke="#000000" strokeWidth="2" fill="none" x1="30" y1="14" x2="28" y2="14"/>
        <line className={styles.IdeaLeft} stroke="#000000" strokeWidth="2" fill="none" x1="4" y1="14" x2="2" y2="14"/>
        <line className={styles.IdeaTopRight} stroke="#000000" strokeWidth="2" fill="none" x1="28.1" y1="2" x2="24.6" y2="5.5"/>
        <line className={styles.IdeaTopLeft} stroke="#000000" strokeWidth="2" fill="none" x1="7.4" y1="5.4" x2="4" y2="2"/>
        <line className={styles.IdeaBottomRight} stroke="#000000" strokeWidth="2" fill="none" x1="3.9" x1="28" y1="26.3" x2="24.5" y2="22.8"/>
        <line className={styles.IdeaBottomLeft} stroke="#000000" strokeWidth="2" fill="none" x1="3.9" y1="26.2" x2="7.4" y2="22.7"/>
      </svg>
    </div>
  )
}
 
  

export default IdeaMotion
