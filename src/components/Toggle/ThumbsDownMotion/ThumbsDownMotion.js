import React, { useRef, useState, useEffect } from 'react'
import styles from './thumbs-down--motion.module.scss'

const ThumbsDownMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.ThumbsDownMotion}>
        <title>Thumbs down</title>
        <path className={styles.ThumbsDown} d="M30,15V8c0-3.9-3.1-7-7-7H2v14h6.5l3.6,5.4l0.8,5.9c0.1,1,1,1.7,2,1.7H17c1.7,0,3-1.3,3-3v-6h6C28.2,19,30,17.2,30,15z
	 M8,13H4V3h4V13z M28,15c0,1.1-0.9,2-2,2h-8v8c0,0.6-0.4,1-1,1h-2.1L14,19.6l-4-5.9V3h13c2.8,0,5,2.2,5,5V15z" />
      </svg>
    </div>
  )
}

export default ThumbsDownMotion
