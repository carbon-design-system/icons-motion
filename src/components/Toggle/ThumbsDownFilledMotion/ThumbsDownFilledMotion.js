import React, { useRef, useState, useEffect } from 'react'
import styles from './thumbs-down-filled--motion.module.scss'

const ThumbsDownFilledMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.ThumbsDownFilledMotion}>
        <title>Thumbs down filled</title>
        <path className={styles.ThumbsDownFilled} d="M2,1h5v14H2V1z M23,1H9v14.8l3,4.6l0.8,5.9c0.1,1,1,1.7,2,1.7H15c1.7,0,3-1.3,3-3v-6h8c2.2,0,4-1.8,4-4V8
	C30,4.1,26.9,1,23,1z" />
      </svg>
    </div>
  )
}

export default ThumbsDownFilledMotion
