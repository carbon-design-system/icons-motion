import React, { useRef, useState, useEffect } from 'react'
import styles from './menu--motion.module.scss'

const MenuMotion = (props) => {
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
        className={styles.MenuMotion} 
        viewBox='0 0 32 32'  
        style={iconStyles}>
        <title>menu</title>
        <path className={styles.MenuBar1} d="M4,6h24v2H4V6z" />
        <path className={styles.MenuBar2} d="M4,12h24v2H4V12z" />
        <path className={styles.MenuBar3} d="M4,18h24v2H4V18z" />
        <path className={styles.MenuBar4} d="M4,24h24v2H4V24z" />
      </svg>
    </div>
  )
}

export default MenuMotion
