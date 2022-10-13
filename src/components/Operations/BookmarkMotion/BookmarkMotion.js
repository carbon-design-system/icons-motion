import React, { useRef, useState, useEffect } from 'react'
import styles from './bookmark--motion.module.scss'

const BookmarkMotion = (props) => {
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
        style={iconStyles}
        viewBox='0 0 32 32'
        className={styles.BookmarkMotion}
      >
        <title>bookmark</title>
        <path
          className={styles.BookmarkBottom}
          d="M26,14.8V30l-10-5L6,30V14.8h2v12l7.1-3.6l0.9-0.4l0.9,0.4l7.1,3.6v-12H26z"
        />
        <path
          className={styles.BookmarkTop}
          d="M26,4v11.2h-2V4H8v11.2H6V4c0-1.1,0.9-2,2-2h16C25.1,2,26,2.9,26,4z"
        />
      </svg>
    </div>
  )
}
 
  

export default BookmarkMotion
