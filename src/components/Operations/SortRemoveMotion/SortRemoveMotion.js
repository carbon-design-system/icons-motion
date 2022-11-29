import React, { useRef, useState, useEffect } from 'react'
import styles from './sort-remove--motion.module.scss'

const SortRemoveMotion = (props) => {
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
        className={styles.SortRemoveMotion}
      >
        <title>Sort remove</title>
        <g className={styles.SortRemoveShaft}>
          <path d="M10,18h6v2h-6V18z M6,12h10v2H6V12z M2,6h14v2H2V6z" />
        </g>
        <g className={styles.SortRemoveVertical}>
          <path d="M26,22l0-5.1l-2,0l0,5.1v2v5.1h2V24L26,22z" />
        </g>
        <g className={styles.SortRemoveHorizontal}>
          <path d="M31.1,24l0-2L26,22l-2,0h-5.1v2H24h2L31.1,24z" />
        </g>
        <g className={styles.SortRemoveLine1}>
          <path d="M2,6h14v2H2V6z" />
        </g>
        <g className={styles.SortRemoveLine2}>
          <path d="M6,12h10v2H6V12z" />
        </g>
        <g className={styles.SortRemoveLine3}>
          <path d="M10,18h6v2h-6V18z" />
        </g>
      </svg>
    </div>
  )
}

export default SortRemoveMotion
