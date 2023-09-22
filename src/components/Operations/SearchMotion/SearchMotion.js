import React, { useRef, useState, useEffect } from 'react'
import styles from './search--motion.module.scss'

const SearchMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.SearchMotion}>
        <title>search</title>
        <path className={styles.Search}  fill="none" stroke="#000000" d="M13,3C7.4,3,2.9,7.5,2.9,13S7.4,23,13,23s10.1-4.5,10.1-10S18.6,3,13,3z M28.3,28.3l-7.9-7.9"   />
      </svg>
    </div>
  )
}

export default SearchMotion
