import React, { useRef, useState, useEffect } from 'react'
import styles from './apps--motion.module.scss'

const AppsMotion = (props) => {
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
        className={styles.AppsMotion} 
        viewBox='0 0 32 32'  
        style={iconStyles}>
        <title>apps</title>
        <path className={styles.AppsBox1} d="M10,2H2v8h8V2z M8,4v4H4V4H8z" />
        <path className={styles.AppsBox2} d="M20,2h-8v8h8V2z M18,4v4h-4V4H18z" />
        <path className={styles.AppsBox3} d="M28,4v4h-4V4H28z M30,2h-8v8h8V2z" />
        <path className={styles.AppsBox4} d="M8,14v4H4v-4H8z M10,12H2v8h8V12z" />
        <path className={styles.AppsBox5} d="M18,14v4h-4v-4H18z M20,12h-8v8h8V12z" />
        <path className={styles.AppsBox6} d="M28,14v4h-4v-4H28z M30,12h-8v8h8V12z" />
        <path className={styles.AppsBox7} d="M8,24v4H4v-4H8z M10,22H2v8h8V22z" />
        <path className={styles.AppsBox8} d="M18,24v4h-4v-4H18z M20,22h-8v8h8V22z" />
        <path className={styles.AppsBox9} d="M28,24v4h-4v-4H28z M30,22h-8v8h8V22z" />  
      </svg>
    </div>
  )
}

export default AppsMotion
