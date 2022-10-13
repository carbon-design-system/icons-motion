import React, { useRef, useState, useEffect } from 'react'
import styles from './bookmark-filled--motion.module.scss'

const BookmarkFilledMotion = (props) => {
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
        className={styles.BookmarkFilledMotion}
      >
        <title>bookmark filled</title>
        <path
          className={styles.BookmarkFilledBottom}
          d="M26,7v21l-10-5.1L6,28V7C12.7,7,19.3,7,26,7z"
        />
        <path
          className={styles.BookmarkFilledTop}
          d="M26,4v12c-7,0-13,0-20,0V4c0-1.1,0.9-2,2-2h16C25.1,2,26,2.9,26,4z"
        />
      </svg>
    </div>
  )
}
 
  

export default BookmarkFilledMotion
