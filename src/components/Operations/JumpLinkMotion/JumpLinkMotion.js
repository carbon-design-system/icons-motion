import React, { useRef, useState, useEffect } from 'react'
import styles from './jump-link--motion.module.scss'

const JumpLinkMotion = (props) => {
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
        className={styles.JumpLinkMotion}
      >
        <title>Jump Link</title>
        <g className={styles.ArrowShaft}>
          <path d='M18,22.2V8H8V6h10c1.1,0,2,0.9,2,2v14.2H18z' />
        </g>
        <g className={styles.ArrowHead}>
          <path d='M13.4,17.6l4.6,4.6v-10h2v10l4.6-4.6L26,19l-7,7l-7-7L13.4,17.6z' />
        </g>
      </svg>
    </div>
  )
}

export default JumpLinkMotion
