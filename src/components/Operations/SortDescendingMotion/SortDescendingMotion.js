import React, { useRef, useState, useEffect } from 'react'
import styles from './sort-descending--motion.module.scss'

const SortDescendingMotion = (props) => {
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
        className={styles.SortDescendingMotion}
      >
        <title>Sort descending</title>
        <g className={styles.SortDescendingArrow}>
          <path d="M18,22l1.4-1.4l3.6,3.6V4h2v20.2l3.6-3.6L30,22l-6,6L18,22z" />
        </g>
        <g className={styles.SortDescendingShaft}>
          <path d="M23,24.2V4h2v20.2H23z M10,18h6v2h-6V18z M6,12h10v2H6V12z M2,6h14v2H2V6z" />
        </g>
        <g className={styles.SortDescendingLine1}>
          <path d="M2,6h14v2H2V6z" />
        </g>
        <g className={styles.SortDescendingLine2}>
          <path d="M6,12h10v2H6V12z" />
        </g>
        <g className={styles.SortDescendingLine3}>
          <path d="M10,18h6v2h-6V18z" />
        </g>
      </svg>
    </div>
  )
}

export default SortDescendingMotion
