import React, { useRef, useState, useEffect } from 'react'
import styles from './subtract-large--motion.module.scss'

const SubtractLargeMotion = (props) => {
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
        className={styles.SubtractLargeMotion}
      >
        <title>subtract large</title>
        <path
          className={styles.SubtractLargeMinus}
          d='M7,16.1 7,17 25,17 25,16.1 25,15.9 25,15 7,15 7,15.9'
        />
      </svg>
    </div>
  )
}

export default SubtractLargeMotion
