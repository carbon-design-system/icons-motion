import React, { useRef, useState, useEffect } from 'react'
import styles from './bookmark-add--motion.module.scss'

const BookmarkAddMotion = (props) => {
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
        className={styles.BookmarkAddMotion}
      >
        <title>bookmark add</title>
        <path
          className={styles.BookmarkAddBottom}
          d="M24,17v7.8l-7.1-3.6L16,20.7l-0.9,0.5L8,24.7V17c-0.7,0-1.3,0-2,0v11l10-5.1L26,28V17C25,17,25,17,24,17z"
        />
        <path
          className={styles.BookmarkAddTop}
          d="M8,22c-0.7,0-1.3,0-2,0V4c0-1.1,0.9-2,2-2h10v2H8V22z M24,16v6c1,0,1,0,2,0v-6H24z"
        />
        <path
          className={styles.BookmarkAddHorizontal}
          d="M26,6h-2h-4v2h4h2h4V6H26z"
        />
        <path
          className={styles.BookmarkAddVertical}
          d="M26,6V2h-2v4v2v4h2V8V6z"
        />
      </svg>
    </div>
  )
}
 
  

export default BookmarkAddMotion
