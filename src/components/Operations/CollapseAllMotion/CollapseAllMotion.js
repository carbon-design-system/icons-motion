import React, { useRef, useState, useEffect } from 'react'
import styles from './collapse-all--motion.module.scss'

const CollapseAllMotion = (props) => {
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
      <svg
        style={iconStyles}
        viewBox='0 0 32 32'
        className={styles.CollapseAllMotion}
      >
        <title>collapse all</title>
        <path
          className={styles.CollapseAll}
          d='M18,27H4c-1.1,0-2-0.9-2-2v-8c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v8C20,26.1,19.1,27,18,27z M4,17v8h14l0-8H4z'
        />
        <path
          className={styles.CollapseAllLine1}
          d="M25,20h-2v-8L8.8,12v-2L23,10c1.1,0,2,0.9,2,2V20z"
        />
        <path
          className={styles.CollapseAllLine2}
          d="M30,15h-2V7H13.8V5H28c1.1,0,2,0.9,2,2V15z"
        />
      </svg>
    </div>
  )
}
 
  

export default CollapseAllMotion
