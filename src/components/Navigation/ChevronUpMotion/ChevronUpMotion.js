import React, { useRef, useState, useEffect } from 'react'
import styles from './chevron-up--motion.module.scss'

const ChevronUpMotion = (props) => {
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
        className={styles.ChevronUpMotion}
        x='0px'
        y='0px'
        viewBox='0 0 32 32'
      >
        <polygon
          className={styles.ChevronUp}
          points='16,10 26,20 24.6,21.4 16,12.8 7.4,21.4 6,20 '
        />
        <rect fill='none' x='0' y='0' width='32' height='32'></rect>
      </svg>
    </div>
  )
}

export default ChevronUpMotion
