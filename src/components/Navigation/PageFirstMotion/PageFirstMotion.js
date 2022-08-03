import React from 'react'
import styles from './page-first--motion.module.css'

const PageFirstMotion = () => {
  return (
    <svg viewBox='0 0 32 32' className={styles.PageFirstMotion}>
      <title>page first</title>
      <path
        className={styles.PageFirstArrow}
        d='M14,16L24,6l1.4,1.4L16.8,16l8.6,8.6L24,26L14,16z'
      />
      <path d='M8,4h2v24H8V4z' />
    </svg>
  )
}

export default PageFirstMotion
