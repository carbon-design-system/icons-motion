import React, { useRef, useState, useEffect } from 'react'
import styles from './down-to-bottom--motion.module.scss'

const DownToBottomMotion = (props) => {
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
      <svg viewBox='0 0 32 32' className={styles.DownToBottomMotion}  style={iconStyles}>
        <title>down to bottom</title>
        <path
          className={styles.DownToBottomArrow}
          d='M16,18L6,8l1.4-1.4l8.6,8.6l8.6-8.6L26,8L16,18z'
        />
        <path d='M4,22h24v2H4V22z' />
      </svg>
    </div>
  )
}

export default DownToBottomMotion
