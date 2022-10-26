import React, { useRef, useState, useEffect } from 'react'
import styles from './zoom-out-area--motion.module.scss'

const ZoomOutAreaMotion = (props) => {
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
			className={styles.IconZoomOutArea}
			viewBox='0 0 32 32'>
			<path className={styles.ZoomOutAreaCursor} d="M16,19h8v2h-8V19z M31,29.6l-4.7-4.7c2.7-3.5,2.1-8.5-1.4-11.3s-8.5-2.1-11.3,1.4s-2.1,8.5,1.4,11.3c2.9,2.3,7,2.3,9.9,0
    l4.7,4.7L31,29.6z M20,26c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6C26,23.3,23.3,26,20,26z" />   
			<path className={styles.ZoomOutArea1} d="M8,26H4c-1.1,0-2-0.9-2-2v-4h2v4h4V26z M2,16h2v-4H2V16z M26,4c0-1.1-0.9-2-2-2h-4v2h4v4h2V4z M12,4h4V2h-4V4z M4,4h4V2H4
		C2.9,2,2,2.9,2,4v4h2V4z" />
			</svg>
    </div>
  )
}

export default ZoomOutAreaMotion
