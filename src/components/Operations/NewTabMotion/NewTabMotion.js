import React, { useRef, useState, useEffect } from 'react'
import styles from './new-tab--motion.module.scss'

const NewTabMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.NewTabMotion}>
        <title>New tab</title>
        <path className={styles.NewTab} d="M26,26H6V6h10V4H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V16h-2V26z" />
    <path className={styles.NewTabHorizontal} d="M20,6v2h10V6H20z" />
     <path className={styles.NewTabVertical} d="M26,2h-2v10h2V2z" />
      </svg>
    </div>
  )
}

export default NewTabMotion
