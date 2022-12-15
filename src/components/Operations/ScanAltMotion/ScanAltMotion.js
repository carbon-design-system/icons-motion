import React, { useRef, useState, useEffect } from 'react'
import styles from './scan-alt--motion.module.scss'

const ScanAltMotion = (props) => {
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
        className={styles.ScanAltMotion}
      >
        <title>scan alt</title>
        <path
          className={styles.ScanAltTopRight}
          d="M30,10h-2V4h-6V2h8V10z"
        />
         <path
          className={styles.ScanAltTopLeft}
          d="M4,10H2V2h8v2H4V10z"
        />
         <path
          className={styles.ScanAltBottomRight}
          d="M30,30h-8v-2h6v-6h2V30z"
        />
         <path
          className={styles.ScanAltBottomLeft}
          d="M10,30H2v-8h2v6h6V30z"
        />
        <path
          className={styles.ScanAltBar}
          d="M1.7,14.7h28v2h-28V14.7z"
        />
        <path
          className={styles.ScanAltImage}
          d="M22,24H10c-1.1,0-2-0.9-2-2v-3h2v3h12v-3h2v3C24,23.1,23.1,24,22,24z M24,13h-2v-3H10v3H8v-3c0-1.1,0.9-2,2-2h12
		c1.1,0,2,0.9,2,2V13z"
        />
      </svg>
    </div>
  )
}
 
  

export default ScanAltMotion
