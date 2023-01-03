import React, { useRef, useState, useEffect } from 'react'
import styles from './thumbs-up-filled--motion.module.scss'

const ThumbsUpFilledMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.ThumbsUpFilledMotion}>
        <title>Thumbs up filled</title>
        <path className={styles.ThumbsUpFilled} d="M2,17h5v14H2V17z M23,31H9V16.2l3-4.6l0.8-5.9c0.1-1,1-1.7,2-1.7H15c1.7,0,3,1.3,3,3v6h8c2.2,0,4,1.8,4,4v7
	C30,27.9,26.9,31,23,31z" />
      </svg>
    </div>
  )
}

export default ThumbsUpFilledMotion