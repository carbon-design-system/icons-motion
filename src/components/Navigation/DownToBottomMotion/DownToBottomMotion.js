import React from 'react'
import styles from './down-to-bottom--motion.module.css'

const DownToBottomMotion = () => {
  return (
    <svg viewBox='0 0 32 32' className={styles.DownToBottomMotion}>
      <title>down to bottom</title>
      <path
        className={styles.DownToBottomArrow}
        d='M16,18L6,8l1.4-1.4l8.6,8.6l8.6-8.6L26,8L16,18z'
      />
      <path d='M4,22h24v2H4V22z' />
    </svg>
  )
}

export default DownToBottomMotion
