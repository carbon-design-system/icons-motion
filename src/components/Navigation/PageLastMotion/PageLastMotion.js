import React from 'react'
import styles from './page-last--motion.module.css'

const PageLastMotion = () => {
  return (
    <svg viewBox='0 0 32 32' className={styles.PageLastMotion}>
      <title>page last</title>
      <path
        className={styles.PageLastArrow}
        d='M18,16L8,26l-1.4-1.4l8.6-8.6L6.6,7.4L8,6L18,16z'
      />
      <path d='M22,4h2v24h-2V4z' />
    </svg>
  )
}

export default PageLastMotion
