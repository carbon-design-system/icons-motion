import React, { useRef, useState, useEffect } from 'react'
import styles from './add-alt--motion.module.scss'

const AddAltMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.AddAltMotion}>
        <title>add alt</title>
        <path className={styles.AddAltVertical} d="M17,15V8h-2v7v2v7h2v-7V15z" />
        <path className={styles.AddAltHorizontal} d="M17,15h-2H8v2h7h2h7v-2H17z" />
        <path d="M16,4c6.6,0,12,5.4,12,12s-5.4,12-12,12S4,22.6,4,16S9.4,4,16,4 M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14
		S23.7,2,16,2z" />
      </svg>
    </div>
  )
}

export default AddAltMotion
