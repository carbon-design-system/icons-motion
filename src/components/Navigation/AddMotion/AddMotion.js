import React, { useRef, useState, useEffect } from 'react'
import styles from './add--motion.module.scss'

const AddMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.AddMotion}>
        <title>add</title>
        <path className={styles.AddPlus} d="M17,15V8h-2v7H8v2h7v7h2v-7h7v-2H17z" />
      </svg>
    </div>
  )
}

export default AddMotion
