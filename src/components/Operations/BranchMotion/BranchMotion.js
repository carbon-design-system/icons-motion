import React, { useRef, useState, useEffect } from 'react'
import styles from './branch--motion.module.scss'

const BranchMotion = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  let iconStyles = {
    width: props.width,
    height: props.height
  }

  React.useEffect(() => {
    setIsAnimating(props.isAnimating)
  }, [props.isAnimating])

  const shouldAnimate = isAnimating ? styles.isAnimating : ''

  return (
    <div ref={iconRef} className={`${shouldAnimate}`}>
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.BranchMotion}>
        <title>Branch</title>
        <path className={styles.Branch1} d="M18,21c-1.7,0-3-1.3-3-3v-4c0-1.1-0.4-2.1-1-3h8.2c0.6,2.1,2.7,3.4,4.9,2.9c2.1-0.6,3.4-2.7,2.9-4.9
		c-0.6-2.1-2.7-3.4-4.9-2.9c-1.4,0.4-2.5,1.5-2.9,2.9H9.9C9.3,6.9,7.1,5.6,5,6.1C2.8,6.7,1.6,8.9,2.1,11c0.6,2.1,2.7,3.4,4.9,2.9
		c1.4-0.4,2.5-1.5,2.9-2.9H10c1.7,0,3,1.3,3,3v4c0,2.8,2.2,5,5,5h4c0-1,0-1,0-2H18z M26,8c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2
		C24,8.9,24.9,8,26,8z M6,12c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2C8,11.1,7.1,12,6,12z M26,18c-1.8,0-3.4,1.2-3.9,3H22c0,1,0,1,0,2
		h0.1c0.6,2.1,2.7,3.4,4.9,2.9c2.1-0.6,3.4-2.7,2.9-4.9C29.4,19.2,27.8,18,26,18z M26,24c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2
		C28,23.1,27.1,24,26,24z" />
        <path className={styles.Branch2} d="M18,21c-1.7,0-3-1.3-3-3v-4c0-1.1-0.4-2.1-1-3h8.2c0.6,2.1,2.7,3.4,4.9,2.9c2.1-0.6,3.4-2.7,2.9-4.9
		c-0.6-2.1-2.7-3.4-4.9-2.9c-1.4,0.4-2.5,1.5-2.9,2.9H9.9C9.3,6.9,7.1,5.6,5,6.1C2.8,6.7,1.6,8.9,2.1,11c0.6,2.1,2.7,3.4,4.9,2.9
		c1.4-0.4,2.5-1.5,2.9-2.9H10c1.7,0,3,1.3,3,3v4c0,2.8,2.2,5,5,5h0C18,22,18,22,18,21L18,21z M26,8c1.1,0,2,0.9,2,2s-0.9,2-2,2
		s-2-0.9-2-2C24,8.9,24.9,8,26,8z M6,12c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2C8,11.1,7.1,12,6,12z M20.6,18
		c-1.8-0.3-3.5,0.7-4.2,2.4l-0.1,0c-0.1,1-0.1,1-0.3,2l0.1,0c0.2,2.2,2.2,3.8,4.4,3.5c2.2-0.2,3.8-2.2,3.5-4.4
		C23.8,19.7,22.4,18.3,20.6,18z M19.7,24c-1.1-0.2-1.9-1.2-1.7-2.3c0.2-1.1,1.2-1.9,2.3-1.7s1.9,1.2,1.7,2.3
		C21.8,23.4,20.8,24.1,19.7,24z" />
        <path className={styles.Branch3} d="M15,18v-4c0-1.1-0.4-2.1-1-3h8.2c0.6,2.1,2.7,3.4,4.9,2.9c2.1-0.6,3.4-2.7,2.9-4.9c-0.6-2.1-2.7-3.4-4.9-2.9
		c-1.4,0.4-2.5,1.5-2.9,2.9H9.9C9.3,6.9,7.1,5.6,5,6.1C2.8,6.7,1.6,8.9,2.1,11c0.6,2.1,2.7,3.4,4.9,2.9c1.4-0.4,2.5-1.5,2.9-2.9H10
		c1.7,0,3,1.3,3,3v4H15z M26,8c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2C24,8.9,24.9,8,26,8z M6,12c-1.1,0-2-0.9-2-2s0.9-2,2-2
		s2,0.9,2,2C8,11.1,7.1,12,6,12z M18.1,20.9c-0.1-1.8-1.4-3.4-3.1-3.8l0-0.1c-1,0-1,0-2,0.1l0,0.1c-2.1,0.6-3.3,2.9-2.7,5
		c0.6,2.1,2.9,3.3,5,2.7C17,24.4,18.2,22.8,18.1,20.9z M12.1,21.1c0-1.1,0.8-2,1.9-2.1c1.1,0,2,0.8,2.1,1.9c0,1.1-0.8,2-1.9,2.1
		C13.1,23.1,12.2,22.2,12.1,21.1z" />
        <path className={styles.Branch4} d="M17.9,13.9c-0.5-1.7-2.2-2.9-4-2.8l0-0.1c-1,0.3-1,0.3-1.9,0.6l0,0.1c-1.9,1.2-2.5,3.6-1.3,5.5c1.2,1.9,3.6,2.5,5.5,1.3
		C17.8,17.5,18.5,15.6,17.9,13.9z M12.2,15.7c-0.3-1.1,0.3-2.2,1.3-2.5c1.1-0.3,2.2,0.3,2.5,1.3c0.3,1.1-0.3,2.2-1.3,2.5
		C13.6,17.3,12.5,16.7,12.2,15.7z M14.6,12.1c-0.2-0.4-0.4-0.8-0.7-1.1h8.2c0.6,2.1,2.7,3.4,4.9,2.9c2.1-0.6,3.4-2.7,2.9-4.9
		c-0.6-2.1-2.7-3.4-4.9-2.9c-1.4,0.4-2.5,1.5-2.9,2.9H9.9C9.3,6.9,7.1,5.6,5,6.1C2.8,6.7,1.6,8.9,2.1,11c0.6,2.1,2.7,3.4,4.9,2.9
		c1.4-0.4,2.5-1.5,2.9-2.9H10c1.1,0,2.1,0.6,2.6,1.6C12.9,13,14.9,12.7,14.6,12.1z M26,8c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2
		C24,8.9,24.9,8,26,8z M6,12c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2C8,11.1,7.1,12,6,12z" />
        <path className={styles.Branch5} d="M13.9,6.1C12,6,10.4,7.3,10,9L9.8,9c0,1,0,1,0,2l0.1,0c0.5,2.1,2.7,3.4,4.8,2.9c2.1-0.5,3.4-2.7,2.9-4.8
		C17.3,7.3,15.7,6.1,13.9,6.1z M13.8,12.1c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2C15.8,11.2,14.9,12.1,13.8,12.1z M9.9,9
		C9.3,6.9,7.1,5.6,5,6.1C2.8,6.7,1.6,8.9,2.1,11c0.6,2.1,2.7,3.4,4.9,2.9c1.4-0.4,2.5-1.5,2.9-2.9H10c1.1,0,1.1,0,1.1,0
		c0-1,0.1-1,0.1-2H9.9z M6,12c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2C8,11.1,7.1,12,6,12z M29.9,9c-0.6-2.1-2.7-3.4-4.9-2.9
		c-1.4,0.4-2.5,1.5-2.9,2.9h-5.6c0,1,0,1,0,2h5.6c0.6,2.1,2.7,3.4,4.9,2.9C29.2,13.3,30.4,11.1,29.9,9z M26,12c-1.1,0-2-0.9-2-2
		c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2S27.1,12,26,12z" />
		
      </svg>
    </div>
  )
}

export default BranchMotion
