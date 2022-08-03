import React from 'react'
import styles from './up-to-top--motion.module.css'

const UpToTopMotion = () => {
  return (
    <svg viewBox='0 0 32 32' className={styles.UpToTopMotion}>
      <title>up to top</title>
      <path
        className={styles.UpToTopArrow}
        d='M16,14L6,24l1.4,1.4l8.6-8.6l8.6,8.6L26,24L16,14z'
      />
      <path d='M4,8h24v2H4V8z' />
    </svg>
  )
}

export default UpToTopMotion
