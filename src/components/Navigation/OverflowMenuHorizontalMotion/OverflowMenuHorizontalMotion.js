import React from 'react'
import styles from './overflow-menu-horizontal--motion.module.css'

const OverflowMenuHorizontalMotion = () => {
  return (
    <svg viewBox='0 0 32 32' className={styles.overflowMenuHorizontalMotion}>
      <title>overflow menu horizontal</title>
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='overflow-menu-horizontal--motion'>
          <circle
            className={styles.circleLeft}
            fill='#000000'
            fillRule='nonzero'
            cx='8'
            cy='16'
            r='2'
          ></circle>
          <circle
            className={styles.circleMiddle}
            fill='#000000'
            fillRule='nonzero'
            cx='16'
            cy='16'
            r='2'
          ></circle>
          <circle
            className={styles.circleRight}
            fill='#000000'
            fillRule='nonzero'
            cx='24'
            cy='16'
            r='2'
          ></circle>
          <rect x='0' y='0' width='32' height='32'></rect>
        </g>
      </g>
    </svg>
  )
}

export default OverflowMenuHorizontalMotion
