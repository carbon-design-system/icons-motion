import React, { useRef, useState, useEffect } from 'react'
import styles from './image-search--motion.module.scss'

const ImageSearchMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.ImageSearchMotion}>
        <title>Image search</title>
        <path className={styles.ImageSearchGlass} d="M23,13c-3.3,0-6,2.7-6,6c0,1.3,0.4,2.5,1.1,3.5L13,27.6l1.4,1.4l5.1-5.1c2.7,1.9,6.4,1.3,8.4-1.4s1.3-6.4-1.4-8.4
		C25.5,13.4,24.2,13,23,13z M23,23c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4C27,21.2,25.2,23,23,23z" />
        <path className={styles.ImageSearch} d="M16,11c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3C13,9.7,14.3,11,16,11z M16,7c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1
		C15,7.4,15.4,7,16,7z M11,23H3v-6l5-5l5.6,5.6l1.4-1.4l-5.6-5.6c-0.8-0.8-2-0.8-2.8,0L3,14.2V3h20v6h2V3c0-1.1-0.9-2-2-2H3
		C1.9,1,1,1.9,1,3v20c0,1.1,0.9,2,2,2h8V23z" />
    
      </svg>
    </div>
  )
}

export default ImageSearchMotion
