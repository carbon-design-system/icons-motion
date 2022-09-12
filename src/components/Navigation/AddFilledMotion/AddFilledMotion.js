import React, { useRef, useState, useEffect } from 'react'
import styles from './add-filled--motion.module.scss'

const AddFilledMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.AddFilledMotion}>
        <title>add filled</title>
        <path className={styles.AddFilledCircle} fill="black" d="M16,2C8.3,2.1,2.1,8.3,2,16c0.1,7.7,6.3,13.9,14,14c7.7-0.1,13.9-6.3,14-14C29.9,8.3,23.7,2.1,16,2z" />
        <path className={styles.AddFilledPlus} fill="white" d="M8,15h7V8h2v7h7v2h-7v7h-2v-7H8V15z" />      
      </svg>
    </div>
  )
}

export default AddFilledMotion
