import React, { useRef, useState, useEffect } from 'react'
import styles from './crop--motion.module.scss'

const CropMotion = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  let iconStyles = {
    width: props.size,
    height: props.size
  }

  useEffect(() => {
    setIsAnimating(props.isAnimating)
  }, [props.isAnimating])

  const shouldAnimate = isAnimating ? styles.isAnimating : ''

  return (
    <div ref={iconRef} className={`${shouldAnimate}`}>
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.CropMotion}>
        <title>Crop</title>
        <path
          className={styles.CropTop}
          d='M25,20H23V9H12V7H23a2,2,0,0,1,2,2Z'
        />
        <path
          className={styles.CropBottom}
          d='M9,23V2H7V7H2V9H7V23a2,2,0,0,0,2,2H23v5h2V25h5V23Z'
        />
        <rect id='_Transparent_Rectangle_' fill='none' width='32' height='32' />
      </svg>
    </div>
  )
}

export default CropMotion
