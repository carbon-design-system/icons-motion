import React, { useRef, useState, useEffect } from 'react'
import styles from './filter-remove--motion.module.scss'

const FilterRemoveMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.FilterRemoveMotion}>
        <title>Filter remove</title>
        <line
				className={styles.FilterRemoveDots}
				x1='14'
				y1='26'
				x2='14'
				y2='32'
				stroke='#000000'
				strokeWidth='2'
				strokeMiterlimit='10'
				strokeDasharray='2, 6'
		    />
        <path className={styles.FilterRemove} d="M4,4C2.9,4,2,4.9,2,6v3.2c0,0.5,0.2,1,0.6,1.4L10,18v8c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2v-2h-2v2h-4v-8.8l-0.6-0.6L4,9.2
		V6h20v2h2V6c0-1.1-0.9-2-2-2H4z" />
        <path className={styles.FilterRemoveVertical} d="M25,8.5h-2l0,15h2L25,8.5z" />
        <path className={styles.FilterRemoveHorizontal} d="M31.5,17v-2l-15,0v2L31.5,17z" />
    
      </svg>
    </div>
  )
}

export default FilterRemoveMotion
