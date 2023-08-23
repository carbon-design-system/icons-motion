import React, { useRef, useState, useEffect } from 'react'
import styles from './add-large--motion.module.scss'

const AddLargeMotion = (props) => {
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
        className={styles.AddLargeMotion}
      >
        <title>add large</title>
        <path
          className={styles.AddLargeVertical}
          d='M15,17.1 15,25 17,25 17,17.1 17,14.9 17,7 15,7 15,14.9'
        />
        <path
          className={styles.AddLargeHorizontal}
          d='M7,16.1 7,17 25,17 25,16.1 25,15.9 25,15 7,15 7,15.9'
        />
      </svg>
    </div>
  )
}

export default AddLargeMotion
