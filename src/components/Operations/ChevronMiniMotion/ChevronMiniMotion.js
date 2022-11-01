import React, { useRef, useState, useEffect } from 'react'
import styles from './chevron-mini--motion.module.scss'

const ChevronMiniMotion = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  let iconStyles = {
    width: props.size,
    height: props.size
  }

  useEffect(() => {
    setIsAnimating(props.isAnimating)
  }, [props.isAnimating])

  const shouldAnimate = isAnimating ? styles.isAnimating : ''

  return (
    <div ref={iconRef} className={`${shouldAnimate}`}>
      <svg
        style={iconStyles}
        viewBox='0 0 32 32'
        className={styles.ChevronMiniMotion}
      >
        <title>Chevron mini</title>
        <path className={styles.ChevronMini} d="M28,16v12H16L28,16z"/>
        
      </svg>
    </div>
  )
}
  

export default ChevronMiniMotion
