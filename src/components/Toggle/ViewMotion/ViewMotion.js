import React, { useRef, useState, useEffect } from 'react'
import styles from './view--motion.module.scss'

const ViewMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.ViewMotion}>
        <title>View</title>
        <path className={styles.ViewEye} d="M30.9,15.7C28.5,9.4,22.7,5.3,16,5C9.3,5.3,3.5,9.4,1.1,15.7c-0.1,0.2-0.1,0.5,0,0.7C3.5,22.6,9.3,26.7,16,27
		c6.7-0.3,12.5-4.4,14.9-10.7C31,16.1,31,15.9,30.9,15.7z M16,25c-5.3,0-10.9-3.9-12.9-9c2-5.1,7.6-9,12.9-9s10.9,3.9,12.9,9
		C26.9,21.1,21.3,25,16,25z" />
        <path className={styles.ViewIris} d="M16,10c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S19.3,10,16,10z M16,20c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S18.2,20,16,20z" />
        <path className={styles.ViewFilledEye} d="M30.9,15.7C28.5,9.4,22.7,5.3,16,5C9.3,5.3,3.5,9.4,1.1,15.7c-0.1,0.2-0.1,0.5,0,0.7C3.5,22.6,9.3,26.7,16,27
		c6.7-0.3,12.5-4.4,14.9-10.7C31,16.1,31,15.9,30.9,15.7z" />
        <path className={styles.ViewFilledIris} fill="#ffffff" d="M16,9.5c3.6,0,6.5,2.9,6.5,6.5s-2.9,6.5-6.5,6.5S9.5,19.6,9.5,16S12.4,9.5,16,9.5z" />
        <path className={styles.ViewFilledPupil} d="M16,12c2.2,0,4,1.8,4,4s-1.8,4-4,4s-4-1.8-4-4S13.8,12,16,12z" />
      </svg>
    </div>
  )
}

export default ViewMotion

