import React, { useRef, useState, useEffect } from 'react'
import styles from './tag-group--motion.module.scss'

const TagGroupMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.TagGroupMotion}>
        <title>Tag group</title>
        <path className={styles.TagGroup} d="M10,12c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S8.9,12,10,12z M16,30c-0.3,0-0.5-0.1-0.7-0.3L4.6,19C4.2,18.6,4,18.1,4,17.6
		V10c0-1.1,0.9-2,2-2h7.6c0.5,0,1,0.2,1.4,0.6l10.7,10.7c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0l-9,9C16.5,29.9,16.3,30,16,30z M6,10v7.6
		l10,10l7.6-7.6l-10-10H6z" />   
        <path className={styles.TagGroupSecond} d="M27.7,13.3L17,2.6C16.6,2.2,16.1,2,15.6,2H8C6.9,2,6,2.9,6,4v2h2V4h7.6l10,10l-1.3,1.3l1.4,1.4l2-2
		C28.1,14.3,28.1,13.7,27.7,13.3C27.7,13.3,27.7,13.3,27.7,13.3z" />
      </svg>
    </div>
  )
}

export default TagGroupMotion
