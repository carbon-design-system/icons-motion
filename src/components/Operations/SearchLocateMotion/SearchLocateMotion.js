import React, { useRef, useState, useEffect } from 'react'
import styles from './search-locate--motion.module.scss'

const SearchLocateMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.SearchLocateMotion}>
        <title>search locate</title>
        <path className={styles.SearchLocate} d="M30,27.6l-4.7-4.7c2.7-3.5,2.1-8.5-1.4-11.3S15.4,9.5,12.6,13s-2.1,8.5,1.4,11.3c2.9,2.3,7,2.3,9.9,0l4.7,4.7
	L30,27.6z M19,24c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6C25,21.3,22.3,24,19,24z" />
        <path className={styles.SearchLocateLine1} d="M2,1h16v2H2V1z" />
        <path className={styles.SearchLocateLine2} d="M2,6h16v2H2V6z" />
        <path className={styles.SearchLocateLine3} d="M2,11h8v2H2V11z" />
    
      </svg>
    </div>
  )
}

export default SearchLocateMotion
