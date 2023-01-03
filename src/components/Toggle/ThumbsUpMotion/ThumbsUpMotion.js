import React, { useRef, useState, useEffect } from 'react'
import styles from './thumbs-up--motion.module.scss'

const ThumbsUpMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.ThumbsUpMotion}>
        <title>Thumbs up</title>
        <path className={styles.ThumbsUp} d="M26,13h-6V7c0-1.7-1.3-3-3-3h-2.1c-1,0-1.8,0.7-2,1.7L12,11.6L8.5,17H2v14h21c3.9,0,7-3.1,7-7v-7C30,14.8,28.2,13,26,13z
	 M8,29H4V19h4V29z M28,24c0,2.8-2.2,5-5,5H10V18.3l4-5.9L14.9,6H17c0.6,0,1,0.4,1,1v8h8c1.1,0,2,0.9,2,2V24z" />
      </svg>
    </div>
  )
}

export default ThumbsUpMotion