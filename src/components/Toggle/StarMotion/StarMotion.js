import React, { useRef, useState, useEffect } from 'react'
import styles from './star--motion.module.scss'

const StarMotion = (props) => {
  const iconRef = useRef(null)
  const [ starFilled, setStarFilled ] = useState(props.fillStatus)

  let iconStyles = {
    width: props.size,
    height: props.size
  }
  
  React.useEffect(() => {
    setStarFilled(props.fillStatus)
  }, [props.fillStatus])

  const toggleStarBorderClass = starFilled ? styles.StarBorderFilled :  styles.StarBorderUnfilled; 
  const toggleStarInnerClass = starFilled ? styles.StarInnerFilled : styles.StarInnerUnfilled;

  return (
    <div ref={iconRef}>
      <svg style={iconStyles} viewBox='0 0 32 32'>
        <title>Star</title>
        <path className={` ${toggleStarBorderClass}`} d="M16,6.5l2.8,5.6l0.5,1l1,0.1l6.2,0.9L22,18.4l-0.8,0.7l0.2,1l1,6.1L17,23.4L16,23l-0.9,0.5l-5.5,2.9l1-6.1l0.2-1L10,18.4
	l-4.4-4.4l6.2-0.9l1-0.1l0.5-1L16,6.5 M16,2l-4.6,9.2L1.3,12.7l7.4,7.2L6.9,30l9.1-4.8l9.1,4.8l-1.7-10.1l7.4-7.2l-10.2-1.5L16,2z" />
        <path className={` ${toggleStarInnerClass}`} d="M16,2l-4.6,9.2L1.3,12.7l7.4,7.2L6.9,30l9.1-4.8l9.1,4.8l-1.7-10.1l7.4-7.2l-10.2-1.5L16,2z" />
      </svg>
    </div>
  )
}

export default StarMotion

