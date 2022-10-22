import React, { useRef, useState, useEffect } from 'react'
import styles from './chat-launch--motion.module.scss'

const ChatLaunchMotion = (props) => {
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
        className={styles.ChatLaunchMotion}
      >
        <title>chat launch</title>
        <path
          className={styles.ChatLaunchHead}
          d="M20.7,4v2h4.6l-6.6,6.6l1.4,1.4l6.6-6.6V12h2V4H20.7z"
        />
        <path
          className={styles.ChatLaunchShaft}
          d="M25.3,6l-6.6,6.6l1.4,1.4l6.6-6.6L25.3,6z"
        />
        <path
          className={styles.ChatLaunch}
          d="M26.7,16v4c0,1.1-0.9,2-2,2c0,0,0,0,0,0h-6l-4,7l1.7,1l3.4-6h4.8c2.2,0,4-1.8,4-4c0,0,0,0,0,0v-4H26.7z M2.7,20V8
		c0-1.1,0.9-2,2-2c0,0,0,0,0,0h12V4h-12c-2.2,0-4,1.8-4,4c0,0,0,0,0,0v12c0,2.2,1.8,4,4,4c0,0,0,0,0,0h9v-2h-9
		C3.6,22,2.7,21.1,2.7,20C2.7,20,2.7,20,2.7,20z"
        />
      </svg>
    </div>
  )
}
 
  

export default ChatLaunchMotion
