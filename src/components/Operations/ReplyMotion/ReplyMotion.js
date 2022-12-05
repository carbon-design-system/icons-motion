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
        <path  className={styles.Reply} d="M30.9,30c-0.4,0-0.7-0.2-0.9-0.5c-2.7-4.6-7.6-7.5-13-7.5v6c0,0.4-0.2,0.8-0.6,0.9c-0.4,0.2-0.8,0.1-1.1-0.2l-12-12
		c-0.4-0.4-0.4-1,0-1.4c0,0,0,0,0,0l12-12C15.6,3,16,2.9,16.4,3.1C16.8,3.2,17,3.6,17,4v6.1c8.6,1.1,15,8.4,15,17c0,0.7,0,1.3-0.1,2
		c-0.1,0.4-0.4,0.8-0.8,0.9L30.9,30z M16.5,20c5.2-0.1,10.1,2.1,13.5,6c-0.6-7.5-6.6-13.4-14.1-14c-0.5,0-0.9-0.5-0.9-1V6.4L5.4,16
		l9.6,9.6V21c0-0.6,0.4-1,1-1H16.5L16.5,20z"/>
      </svg>
    </div>
  )
}
  

export default ReplyMotion
