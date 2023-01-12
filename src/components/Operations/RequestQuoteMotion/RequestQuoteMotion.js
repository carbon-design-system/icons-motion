import React, { useRef, useState } from 'react'
import styles from './request-quote--motion.module.scss'

const RequestQuoteMotion = (props) => {
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
        className={styles.RequestQuoteMotion}
      >
        <title>request quote</title>
        <path className={styles.RequestQuotePencil} d="M30.5,5.8l-3.3-3.3c-0.6-0.6-1.6-0.6-2.2,0l-14,14V22h5.5l14-14C31.1,7.4,31.1,6.4,30.5,5.8L30.5,5.8z M15.7,20
	H13v-2.7l9.4-9.4l2.7,2.7L15.7,20z M26.6,9.1l-2.7-2.7l2.3-2.3l2.7,2.7L26.6,9.1z"/>
        <path className={styles.RequestQuotePaper} d="M22,22v6H6V4h10V2H6C4.9,2,4,2.9,4,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-6H22z"/>      
      </svg>
    </div>
  )
}
  

export default RequestQuoteMotion
