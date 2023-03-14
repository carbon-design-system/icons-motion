import React, { useRef, useState, useEffect } from 'react'
import styles from './paste--motion.module.scss'

const PasteMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.PasteMotion}>
        <title>Paste</title>
        <path
          className={styles.PasteTop}
          d="M23.7,9.3l-7-7C16.5,2.1,16.3,2,16,2H6C4.9,2,4,2.9,4,4v24c0,1.1,0.9,2,2,2h8v-2H6V4h8v6c0,1.1,0.9,2,2,2h6v2h2v-4
          C24,9.7,23.9,9.5,23.7,9.3z M16,4.4l5.6,5.6H16V4.4z"
        />
        <path
          className={styles.PasteBottomArrow}
          d="M25.4,20h-7.6l2.6-2.6L19,16l-5,5l5,5l1.4-1.4L17.8,22h7.6"
        />
        <path className={styles.PasteBottomLine} d="M17.8,22H26v8h2v-8c0-1.1-0.9-2-2-2h-8.2" />
        <rect id='_Transparent_Rectangle_' fill='none' width='32' height='32' />
      </svg>
    </div>
  )
}

export default PasteMotion

