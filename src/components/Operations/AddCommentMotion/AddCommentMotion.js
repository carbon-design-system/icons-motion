import React, { useRef, useState, useEffect } from 'react'
import styles from './add-comment--motion.module.scss'

const AddCommentMotion = (props) => {
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
      <svg style={iconStyles} viewBox='0 0 32 32' className={styles.AddCommentMotion}>
        <title>Add comment</title>
        <path vector-effect="non-scaling-stroke" className={styles.AddCommentPlus}  fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M11,14h10 M16,9v10"   />
        <path className={styles.AddComment} d="M17.7,30L16,29l4-7h6c1.1,0,2-0.9,2-2V8c0-1.1-0.9-2-2-2H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h9v2H6c-2.2,0-4-1.8-4-4V8
		c0-2.2,1.8-4,4-4h20c2.2,0,4,1.8,4,4v12c0,2.2-1.8,4-4,4h-4.8L17.7,30z" />
      </svg>
    </div>
  )
}

export default AddCommentMotion
