import React, { useRef, useState, useEffect } from 'react'
import styles from './up-to-top--motion.module.scss'

const UpToTopMotion = (props) => {
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
        className={styles.UpToTopMotion}
      >
        <title>up to top</title>
        <path
          className={styles.UpToTopArrow}
          d='M16,14L6,24l1.4,1.4l8.6-8.6l8.6,8.6L26,24L16,14z'
        />
        <path d='M4,8h24v2H4V8z' />
      </svg>
    </div>
  )
}

export default UpToTopMotion
