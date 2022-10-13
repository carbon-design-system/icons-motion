import React, { useRef, useState, useEffect } from 'react'
import styles from './bookmark-filled--motion.module.scss'

const BookmarkFilledMotion = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  let iconStyles = {
    width: props.width,
    height: props.height
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
        className={styles.BookmarkFilledMotion}
      >
        <title>bookmark filled</title>
        <path
          className={styles.BookmarkFilledBottom}
          d="M6,13.8V30l10-5.1L26,30V13.8"
        />
        <path
          className={styles.BookmarkFilledTop}
          d="M24,2H8C6.9,2,6,2.9,6,4v12h20V4C26,2.9,25.1,2,24,2z"
        />
      </svg>
    </div>
  )
}
 
  

export default BookmarkFilledMotion
