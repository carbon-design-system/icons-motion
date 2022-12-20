import React, { useRef, useState, useEffect } from 'react'
import styles from './chat-off--motion.module.scss'

const ChatOffMotion = (props) => {
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
        className={styles.ChatOffMotion}
      >
        <title>chat off</title>
        <path
          className={styles.ChatOff}
          d="M28,8v13h2V8c0-2.2-1.8-4-4-4c0,0,0,0,0,0H8.2l2,2H26C27.1,6,28,6.9,28,8C28,8,28,8,28,8z M30,28.6L3.4,2
	L2,3.4l1.5,1.5C2.6,5.7,2,6.8,2,8v12c0,2.2,1.8,4,4,4c0,0,0,0,0,0h6v-2H6c-1.1,0-2-0.9-2-2c0,0,0,0,0,0V8c0-0.7,0.3-1.3,0.9-1.7
	L20.6,22H17l-4,7l1.7,1l3.4-6h4.4l6,6L30,28.6z"
        />
      </svg>
    </div>
  )
}
 
  

export default ChatOffMotion
