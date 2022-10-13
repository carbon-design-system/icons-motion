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
          d="M26,7V28L16,22.9,6,28V7Z"
        />
        <path
          className={styles.BookmarkFilledTop}
         d="M26,4V16H6V4A2,2,0,0,1,8,2H24A2,2,0,0,1,26,4Z"
        />
      </svg>
    </div>
  )
}
 
  

export default BookmarkFilledMotion
