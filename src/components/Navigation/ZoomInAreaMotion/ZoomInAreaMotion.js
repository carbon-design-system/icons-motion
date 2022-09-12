import React, { useRef, useState, useEffect } from 'react'
import styles from './zoom-in-area--motion.module.scss'

const ZoomInAreaMotion = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  let iconStyles = {
    width: props.width,
    height: props.height,
  }

  React.useEffect(() => {
    setIsAnimating(props.isAnimating);
  }, [props.isAnimating])

  const shouldAnimate = isAnimating ? styles.isAnimating : ''

  return (
    <div ref={iconRef} className={`${shouldAnimate}`}>
      <svg
        style={iconStyles}
        x='0px'
        y='0px'
        viewBox='0 0 32 32'
      >
        <g className={styles.ZoomInAreaBorder}>
          <path d="M4,8H2V4c0-1.1,0.9-2,2-2h4v2H4V8z M26,4c0-1.1-0.9-2-2-2h-4v2h4v4h2V4z M12,4h4V2h-4V4z M8,24H4v-4H2v4c0,1.1,0.9,2,2,2h4
		V24z M2,16h2v-4H2V16z" />
        </g>

        <g className={styles.ZoomInAreaGlass}>
          <path d="M24,21h-3v3h-2v-3h-3v-2h3v-3h2v3h3V21z M29.6,31l-4.7-4.7c-2.9,2.3-7,2.3-9.9,0c-3.5-2.7-4.1-7.8-1.4-11.3
		s7.8-4.1,11.3-1.4s4.1,7.8,1.4,11.3l4.7,4.7L29.6,31z M26,20c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6C23.3,26,26,23.3,26,20z" />
        </g>
      </svg>
    </div>
  )
}

export default ZoomInAreaMotion
