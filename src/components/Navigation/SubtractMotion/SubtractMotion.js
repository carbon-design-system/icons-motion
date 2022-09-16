import React, { useRef, useState, useEffect } from 'react'
import styles from './subtract--motion.module.scss'

const SubtractMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.SubtractMotion}>
        <title>subtract</title>
        <path className={styles.SubtractMinus} d="M8,15h16v2H8V15z" />
      </svg>
    </div>
  )
}

export default SubtractMotion
