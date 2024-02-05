import React, { useRef, useState, useEffect } from 'react'
import styles from './magic-wand--motion.module.scss'

const MagicWandMotion = (props) => {
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
      <svg style={iconStyles} viewBox="0 0 32 32" className={styles.MagicMotion}>
        <title>Magic</title>
        <path className={styles.Wand} d="M29.4141,24,12,6.5859a2.0476,2.0476,0,0,0-2.8281,0l-2.586,2.586a2.0021,2.0021,0,0,0,0,2.8281L23.999,29.4141a2.0024,2.0024,0,0,0,2.8281,0l2.587-2.5865a1.9993,1.9993,0,0,0,0-2.8281ZM8,10.5859,10.5859,8l5,5-2.5866,2.5869-5-5ZM25.4131,28l-11-10.999L17,14.4141l11,11Z"/>
        <g className={styles.SparkleLeftContainer}>
          <path className={styles.SparkleLeft} d="M2.586 14.586H5.414V17.414H2.586z"/>
        </g>
        <path className={styles.SparkleCenter} d="M2.586 2.586H5.414V5.414H2.586z" />
        <g className={styles.SparkleRightContainer}>    
          <path className={styles.SparkleRight} d="M14.586 2.586H17.414V5.414H14.586z" />
        </g>  
      </svg>
    </div>
  )
}

export default MagicWandMotion


