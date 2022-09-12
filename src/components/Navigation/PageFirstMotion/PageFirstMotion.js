import React, { useRef, useState, useEffect } from 'react'
import styles from './page-first--motion.module.scss'

const PageFirstMotion = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  let iconStyles = {
<<<<<<< HEAD
    width: props.width,
    height: props.height
=======
    width: props.size,
    height: props.size
>>>>>>> 81ca42f41dfaacb1012bb58322dd8455e72d91db
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
        className={styles.PageFirstMotion}
      >
        <title>page first</title>
        <path
          className={styles.PageFirstArrow}
          d='M14,16L24,6l1.4,1.4L16.8,16l8.6,8.6L24,26L14,16z'
        />
        <path d='M8,4h2v24H8V4z' />
      </svg>
    </div>
  )
}

export default PageFirstMotion
