import React, { useRef, useState, useEffect } from 'react'
import styles from './tag-none--motion.module.scss'

const TagNoneMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.TagNoneMotion}>
        <title>Tag none</title>
        <path className={styles.TagNone} d="M23.1,10.3L30,3.4L28.6,2L2,28.6L3.4,30l6.9-6.9l6.3,6.3c0.8,0.8,2,0.8,2.8,0l9.9-9.9c0.8-0.8,0.8-2,0-2.8L23.1,10.3z
	 M18.1,28l-6.3-6.3l9.9-9.9l6.3,6.3L18.1,28z M10,14c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4C14,12.2,12.2,14,10,14z M10,8
	c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2C12,8.9,11.1,8,10,8z M7.5,20.3l1.4-1.4L4,13.9V4h9.9l4.9,4.9l1.4-1.4l-4.9-4.9
	C15,2.2,14.5,2,13.9,2H4C2.9,2,2,2.9,2,4v9.9c0,0.5,0.2,1,0.6,1.4L7.5,20.3z"/>   
      </svg>
    </div>
  )
}

export default TagNoneMotion
