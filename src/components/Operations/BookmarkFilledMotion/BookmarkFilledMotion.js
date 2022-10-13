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
          className={styles.BookmarkFilledBottom} fill="black"
          d="M26,4v12H6V4c0-1.1,0.9-2,2-2h16C25.1,2,26,2.9,26,4z"
        />
        <path
          className={styles.BookmarkFilledTop} fill="black"
          d="M26,7v21l-10-5.1L6,28V7H26z"
        />
      </svg>
    </div>
  )
}

export default BookmarkFilledMotion
