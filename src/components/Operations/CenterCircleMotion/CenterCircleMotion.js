import React, { useRef, useState, useEffect } from 'react'
import styles from './center-circle--motion.module.scss'

const CenterCircleMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.CenterCircleMotion}>
        <title>Center circle</title>
        <path className={styles.CenterCircle}  fill="none" stroke="#000000" d="M27,16c0,6.1-4.9,11-11,11S5,22.1,5,16S9.9,5,16,5S27,9.9,27,16z"   />
        <path className={styles.CenterCircleTop}  d="M17,2h-2v8h2V2z" />
        <path className={styles.CenterCircleRight} d="M10.1,17v-2h-8v2H10.1z" />
        <path className={styles.CenterCircleBottom} d="M15,29.9h2v-8h-2V29.9z" />
        <path className={styles.CenterCircleLeft} d="M29.9,17v-2h-8v2H29.9z" />
        <path className={styles.CenterCircleStatic} d="M29.9,17v-2h-8v2H29.9z M15,29.9h2v-8h-2V29.9z M10.1,17v-2h-8v2H10.1z M17,2h-2v8h2V2z" />
      </svg>
    </div>
  )
}

export default CenterCircleMotion
