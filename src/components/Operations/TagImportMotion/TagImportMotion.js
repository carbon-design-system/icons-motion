import React, { useRef, useState, useEffect } from 'react'
import styles from './tag-import--motion.module.scss'

const TagImportMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.TagImportMotion}>
        <title>Tag import</title>
        <path className={styles.TagImport} d="M10,14c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4C14,12.2,12.2,14,10,14z M10,8c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2
		c1.1,0,2-0.9,2-2C12,8.9,11.1,8,10,8z M20.1,26l-2,2L4,13.9V4h9.9l6,6l1.4-1.4l-6-6C15,2.2,14.5,2,13.9,2H4C2.9,2,2,2.9,2,4v9.9
		c0,0.5,0.2,1,0.6,1.4l14.1,14.1c0.8,0.8,2,0.8,2.8,0l2-2L20.1,26z M19.8,17H30v2H19.8V17z" />   
        <path className={styles.TagImportArrow} d="M16,18l6-6l1.4,1.4L19.8,17H30v2H19.8l3.6,3.6L22,24L16,18z" />
      </svg>
    </div>
  )
}

export default TagImportMotion
