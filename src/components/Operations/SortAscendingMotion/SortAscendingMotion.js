import React, { useRef, useState, useEffect } from 'react'
import styles from './sort-ascending--motion.module.scss'

const SortAscendingMotion = (props) => {
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
        className={styles.SortAscendingMotion}
      >
        <title>Sort Ascending</title>
        <g className={styles.SortAscendingArrow}>
          <path d="M18,22l1.4-1.4l3.6,3.6V4h2v20.2l3.6-3.6L30,22l-6,6L18,22z" />
        </g>
        <g className={styles.SortAscendingShaft}>
          <path d="M23,24.2V4h2v20.2H23z M2,18h14v2H2V18z M6,12h10v2H6V12z M10,6h6v2h-6V6z" />
        </g>
        <g className={styles.SortAscendingLine1}>
          <path d="M10,6h6v2h-6V6z" />
        </g>
        <g className={styles.SortAscendingLine2}>
          <path d="M6,12h10v2H6V12z" />
        </g>
        <g className={styles.SortAscendingLine3}>
          <path d="M2,18h14v2H2V18z" />
        </g>
      </svg>
    </div>
  )
}

export default SortAscendingMotion
