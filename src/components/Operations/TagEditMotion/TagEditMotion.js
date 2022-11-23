import React, { useRef, useState, useEffect } from 'react'
import styles from './tag-edit--motion.module.scss'

const TagEditMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.TagEditMotion}>
        <title>Tag edit</title>
        <path className={styles.TagEdit} d="M29.7,7.3l-3-3c-0.4-0.4-1-0.4-1.4,0c0,0,0,0,0,0L16,13.6V18h4.4l9.3-9.3C30.1,8.3,30.1,7.7,29.7,7.3
	C29.7,7.3,29.7,7.3,29.7,7.3z M19.6,16H18v-1.6l5-5l1.6,1.6L19.6,16z M26,9.6L24.4,8L26,6.4L27.6,8L26,9.6z M10,14c-2.2,0-4-1.8-4-4
	s1.8-4,4-4s4,1.8,4,4C14,12.2,12.2,14,10,14z M10,8c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2C12,8.9,11.1,8,10,8z M27,14.2
	l-1.4,1.4l2.4,2.4L18.1,28L4,13.9V4h9.9l4.4,4.4L19.8,7l-4.4-4.4C15,2.2,14.5,2,13.9,2H4C2.9,2,2,2.9,2,4v9.9c0,0.5,0.2,1,0.6,1.4
	l14.1,14.1c0.8,0.8,2,0.8,2.8,0l9.9-9.9c0.8-0.8,0.8-2,0-2.8L27,14.2z" />   
      </svg>
    </div>
  )
}

export default TagEditMotion
