import React, { useRef, useState, useEffect } from 'react'
import styles from './filter-reset--motion.module.scss'

const FilterResetMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.FilterResetMotion}>
        <title>Filter reset</title>
        <line
				className={styles.FilterResetDots}
				x1='14'
				y1='26'
				x2='14'
				y2='32'
				stroke='#000000'
				strokeWidth='2'
				strokeMiterlimit='10'
				strokeDasharray='2,6'
		    />
        <path className={styles.FilterReset} d="M26,4H4v3.2l7.4,7.4l0.6,0.6V24h4v-2h2v2c0,1.1-0.9,2-2,2h-4c-1.1,0-2-0.9-2-2v-8L2.6,8.6C2.2,8.2,2,7.7,2,7.2V4
		c0-1.1,0.9-2,2-2h22V4z M22.5,7c-2.7,0-5.2,1.4-6.5,3.8l1.6,1.2C19,9.3,22.3,8.2,25,9.6s3.8,4.7,2.4,7.4c-0.9,1.8-2.8,3-4.9,3H22v2
		h0.5c4.1,0,7.5-3.4,7.5-7.5S26.6,7,22.5,7z" />
        <path className={styles.FilterResetArrow} d="M22.5,7c-2.7,0-5.2,1.4-6.5,3.8V6h-2v8h8v-2h-4.4C19,9.3,22.3,8.2,25,9.6s3.8,4.7,2.4,7.4c-0.9,1.8-2.8,3-4.9,3H22v2h0.5
		  c4.1,0,7.5-3.4,7.5-7.5S26.6,7,22.5,7z" />
    
      </svg>
    </div>
  )
}

export default FilterResetMotion
