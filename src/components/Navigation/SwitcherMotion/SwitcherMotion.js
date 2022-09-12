import React, { useRef, useState, useEffect } from 'react'
import styles from './switcher--motion.module.scss'

const SwitcherMotion = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  let iconStyles = {
    width: props.width,
    height: props.height
  }

  React.useEffect(() => {
    setIsAnimating(props.isAnimating)
  }, [props.isAnimating])

  const shouldAnimate = isAnimating ? styles.isAnimating : ''

  return (
    <div ref={iconRef} className={`${shouldAnimate}`}>
      <svg 
        className={styles.SwitcherMotion} 
        viewBox='0 0 32 32'  
        style={iconStyles}>
        <title>switcher</title>
        <path className={styles.SwitcherBox1} d="M4,4h4v4H4V4z" />
        <path className={styles.SwitcherBox2} d="M14,4h4v4h-4V4z" />
        <path className={styles.SwitcherBox3} d="M24,4h4v4h-4V4z" />
        <path className={styles.SwitcherBox4} d="M4,14h4v4H4V14z" />
        <path className={styles.SwitcherBox5} d="M14,14h4v4h-4V14z" />
        <path className={styles.SwitcherBox6} d="M24,14h4v4h-4V14z" />
        <path className={styles.SwitcherBox7} d="M4,24h4v4H4V24z" />
        <path className={styles.SwitcherBox8} d="M14,24h4v4h-4V24z" />
        <path className={styles.SwitcherBox9} d="M24,24h4v4h-4V24z" />  
      </svg>
    </div>
  )
}

export default SwitcherMotion
