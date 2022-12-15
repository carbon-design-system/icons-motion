import React, { useRef, useState, useEffect } from 'react'
import styles from './tag--motion.module.scss'

const TagMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.TagMotion}>
        <title>Tag</title>
        <path className={styles.Tag} d="M10,14c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4C14,12.2,12.2,14,10,14z M10,8c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2
	c1.1,0,2-0.9,2-2C12,8.9,11.1,8,10,8z M16.6,29.4L2.6,15.4C2.2,15,2,14.5,2,13.9V4c0-1.1,0.9-2,2-2h9.9c0.5,0,1,0.2,1.4,0.6
	l14.1,14.1c0.8,0.8,0.8,2,0,2.8l-9.9,9.9C18.7,30.2,17.4,30.2,16.6,29.4L16.6,29.4z M4,4v9.9L18.1,28l9.9-9.9L13.9,4H4z" />   
      </svg>
    </div>
  )
}

export default TagMotion
