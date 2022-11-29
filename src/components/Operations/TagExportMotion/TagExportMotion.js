import React, { useRef, useState, useEffect } from 'react'
import styles from './tag-export--motion.module.scss'

const TagExportMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.TagExportMotion}>
        <title>Tag export</title>
        <path className={styles.TagExport} d="M27.2,17H17v2h10.2V17z M10,14c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4C14,12.2,12.2,14,10,14z M10,8c-1.1,0-2,0.9-2,2
		c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2C12,8.9,11.1,8,10,8z M21.1,25l-3,3L4,13.9V4h9.9l7,7l1.4-1.4l-7-7C15,2.2,14.5,2,13.9,2H4
		C2.9,2,2,2.9,2,4v9.9c0,0.5,0.2,1,0.6,1.4l14.1,14.1c0.8,0.8,2,0.8,2.8,0l3-3L21.1,25z" />   
        <path className={styles.TagExportArrow} d="M31,18l-6-6l-1.4,1.4l3.6,3.6H17v2h10.2l-3.6,3.6L25,24L31,18z" />
      </svg>
    </div>
  )
}

export default TagExportMotion
