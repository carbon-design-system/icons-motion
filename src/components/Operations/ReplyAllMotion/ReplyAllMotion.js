import React, { useRef, useState } from 'react'
import styles from './reply-all--motion.module.scss'

const ReplyAllMotion = (props) => {
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
        className={styles.ReplyAllMotion}
      >
        <title>Reply all</title>
        <path  className={styles.ReplyAllArrow} d="M19,29c-0.3,0-0.6-0.1-0.8-0.4l-10-12c-0.3-0.4-0.3-0.9,0-1.3l10-12c0.4-0.4,1-0.5,1.4-0.1C19.9,3.4,20,3.7,20,4v7
		c7,0.5,11,5.9,11,15c0,0.6-0.4,1-1,1c-0.3,0-0.6-0.1-0.8-0.4c-2.8-3.8-5.4-5.3-9.2-5.6v7C20,28.6,19.6,29,19,29z M10.3,16l7.7,9.2
		V20c0-0.6,0.4-1,1-1c3.7-0.1,7.3,1.4,9.8,4.1C28.1,16.6,24.7,13,19,13c-0.6,0-1-0.4-1-1V6.8L10.3,16z"/>
    <path  className={styles.ReplyAllHead} d="M11.5,28.9L1.2,16.6c-0.3-0.4-0.3-0.9,0-1.3L11.5,3.1L13,4.4L3.3,16L13,27.6L11.5,28.9z"/>
      </svg>
    </div>
  )
}
  

export default ReplyAllMotion
