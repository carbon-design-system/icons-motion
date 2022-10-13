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
          d="M24,24.8l-7.1-3.6L16,20.7l-0.9,0.4L8,24.8V10c-0.7,0-1.3,0-2,0v18l10-5l10,5V10c-1,0-1,0-2,0V24.8z"
        />
        <path
          className={styles.BookmarkTop}
          d="M24,2H8C6.9,2,6,2.9,6,4v13c1,0,1,0,2,0V4h16v13c1,0,1,0,2,0V4C26,2.9,25.1,2,24,2z"
        />
      </svg>
    </div>
  )
}
 
  

export default BookmarkMotion
