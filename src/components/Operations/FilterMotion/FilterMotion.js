import React, { useRef, useState, useEffect } from 'react'
import styles from './filter--motion.module.scss'

const FilterMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.FilterMotion}>
        <title>Filter</title>
        <line
				className={styles.FilterDots}
				x1='16'
				y1='26'
				x2='16'
				y2='32'
				stroke='#000000'
				strokeWidth='2'
				strokeMiterlimit='10'
				strokeDasharray='2,6'
		    />
        <path className={styles.Filter} d="M18,26h-4c-1.1,0-2-0.9-2-2v-7.6L4.6,9C4.2,8.6,4,8.1,4,7.6V4c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v3.6c0,0.5-0.2,1-0.6,1.4
	L20,16.4V24C20,25.1,19.1,26,18,26z M6,4v3.6l8,8V24h4v-8.4l8-8V4H6z" />
    
      </svg>
    </div>
  )
}

export default FilterMotion
