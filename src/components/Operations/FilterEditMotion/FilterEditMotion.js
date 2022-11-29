import React, { useRef, useState, useEffect } from 'react'
import styles from './filter-edit--motion.module.scss'

const FilterEditMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.FilterEditMotion}>
        <title>Filter edit</title>
        <line
				className={styles.FilterEditDots}
				x1='14'
				y1='26'
				x2='14'
				y2='32'
				stroke='#000000'
				strokeWidth='2'
				strokeMiterlimit='10'
				strokeDasharray='2,6'
		    />
        <path className={styles.FilterEdit} d="M26,4H4v3.2l7.4,7.4l0.6,0.6V24h4v-2h2v2c0,1.1-0.9,2-2,2h-4c-1.1,0-2-0.9-2-2v-8L2.6,8.6C2.2,8.2,2,7.7,2,7.2V4
			c0-1.1,0.9-2,2-2h22V4z" />
        <path className={styles.FilterEditPencil} d="M29.7,9.3l-3-3c-0.4-0.4-1-0.4-1.4,0l0,0L16,15.6V20h4.4l9.3-9.3C30.1,10.3,30.1,9.7,29.7,9.3L29.7,9.3z M19.6,18H18v-1.6
			l5-5l1.6,1.6L19.6,18z M26,11.6L24.4,10L26,8.4l1.6,1.6L26,11.6z" />
    
      </svg>
    </div>
  )
}

export default FilterEditMotion
