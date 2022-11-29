import React, { useRef, useState, useEffect } from 'react'
import styles from './undo--motion.module.scss'

const UndoMotion = (props) => {
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
        className={styles.UndoMotion}
      >
        <title>undo</title>
        <path
          className={styles.UndoArrow}
          d="M13,10c0,0.7,0,1.3,0,2H7.8l3.6,3.6L10,17l-6-6l6-6l1.4,1.4L7.8,10H13z"
        />
        <path
          className={styles.UndoShaft}
          d="M20,10H7.8l0,2H20c3.3,0,6,2.7,6,6s-2.7,6-6,6h-8v2h8c4.4,0,8-3.6,8-8S24.4,10,20,10z"
        />
      </svg>
    </div>
  )
}
 
  

export default UndoMotion
