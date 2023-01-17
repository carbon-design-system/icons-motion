import React, { useRef, useState, useEffect } from 'react'
import styles from './favorite--motion.module.scss'

const FavoriteMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.FavoriteMotion}>
        <title>Favorite</title>
        <path className={styles.Favorite} d="M22.5,6c1.5,0,2.9,0.6,3.9,1.6c2.2,2.2,2.2,5.8,0,8L16,26.1L5.6,15.6c-2.2-2.2-2.2-5.8,0-8c2.1-2.2,5.6-2.2,7.7-0.1
		c0,0,0,0,0.1,0.1l2.5,2.6l2.5-2.6C19.6,6.6,21,6,22.5,6 M22.5,4c-2,0-3.9,0.8-5.3,2.2L16,7.4l-1.1-1.1C12,3.3,7.2,3.3,4.3,6.2
		c0,0-0.1,0.1-0.1,0.1c-3,3-3,7.8,0,10.8L16,29l11.8-11.9c3-3,3-7.8,0-10.8C26.4,4.8,24.5,4,22.5,4z" />
        <path className={styles.FavoriteFilled } d="M22.5,4c-2,0-3.9,0.8-5.3,2.2L16,7.4l-1.1-1.1c-2.9-3-7.7-3-10.6-0.1L4.2,6.3c-3,3-3,7.8,0,10.8L16,29l11.8-11.9
	c3-3,3-7.8,0-10.8C26.4,4.8,24.5,4,22.5,4z" />
      </svg>
    </div>
  )
}

export default FavoriteMotion

