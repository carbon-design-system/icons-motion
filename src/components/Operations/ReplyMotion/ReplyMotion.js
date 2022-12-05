import React, { useRef, useState } from 'react'
import styles from './reply--motion.module.scss'

const ReplyMotion = (props) => {
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
        className={styles.ReplyMotion}
      >
        <title>Reply</title>
        <path  className={styles.Reply} d="M18,29c-0.3,0-0.6-0.1-0.8-0.4l-10-12c-0.3-0.4-0.3-0.9,0-1.3l10-12c0.4-0.4,1-0.5,1.4-0.1C18.9,3.4,19,3.7,19,4v7
		c7,0.5,11,5.9,11,15c0,0.6-0.4,1-1,1c-0.3,0-0.6-0.1-0.8-0.4c-2.8-3.8-5.4-5.3-9.2-5.6v7C19,28.6,18.6,29,18,29z M9.3,16l7.7,9.2
		V20c0-0.6,0.4-1,1-1c3.7-0.1,7.3,1.4,9.8,4.1C27.1,16.6,23.7,13,18,13c-0.6,0-1-0.4-1-1V6.8L9.3,16z"/>
      </svg>
    </div>
  )
}
  

export default ReplyMotion
