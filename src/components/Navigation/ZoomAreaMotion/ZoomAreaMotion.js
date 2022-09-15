import React, { useRef, useState, useEffect } from 'react'
import styles from './zoom-area--motion.module.scss'

const ZoomAreaMotion = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  let iconStyles = {
    width: props.size,
    height: props.size,
  }

  React.useEffect(() => {
    setIsAnimating(props.isAnimating);
  }, [props.isAnimating])

  const shouldAnimate = isAnimating ? styles.isAnimating : ''

  return (
    <div ref={iconRef} className={`${shouldAnimate}`}>
      <svg
        style={iconStyles}
        className={styles.IconSelectWindow}
        x='0px'
        y='0px'
        viewBox='0 0 32 32'
      >
        <g className={styles.ZoomAreaBorder}>
          <path d="M4,8H2V4c0-1.1,0.9-2,2-2h4v2H4V8z M26,4c0-1.1-0.9-2-2-2h-4v2h4v4h2V4z M12,4h4V2h-4V4z M8,24H4v-4H2v4c0,1.1,0.9,2,2,2h4
		V24z M2,16h2v-4H2V16z" />
        </g>

        <g className={styles.ZoomAreaGlass}>
          <path d="M31,29.6l-4.7-4.7c2.7-3.5,2.1-8.5-1.4-11.3s-8.5-2.1-11.3,1.4s-2.1,8.5,1.4,11.3c2.9,2.3,7,2.3,9.9,0l4.7,4.7L31,29.6z
		 M20,26c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6C26,23.3,23.3,26,20,26z" />
        </g>
      </svg>
    </div>
  )
}

export default ZoomAreaMotion
