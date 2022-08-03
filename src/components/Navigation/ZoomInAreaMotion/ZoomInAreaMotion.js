import React from 'react'
import styles from './zoom-in-area--motion.module.css'

const ZoomInAreaMotion = () => {
  return (
    <svg
      className={styles.IconSelectWindow}
      x='0px'
      y='0px'
      viewBox='0 0 32 32'
    >
      <g>
        <rect className={styles.FillNone} width='32' height='32' />
      </g>
      <g className={styles.Window1}>
        <path d='M8,26H4c-1.1,0-2-0.9-2-2v-4h2v4h4V26z' />
        <rect x='2' y='12' width='2' height='4' />
        <path d='M26,8h-2V4h-4V2h4c1.1,0,2,0.9,2,2V8z' />
        <rect x='12' y='2' width='4' height='2' />
        <path d='M4,8H2V4c0-1.1,0.9-2,2-2h4v2H4V8z' />
      </g>

      <g className={styles.Window2}>
        <path d='M6,26H4c-1.1,0-2-0.9-2-2v-6h2v6h2V26z' />
        <rect x='2' y='10' width='2' height='4' />
        <path d='M26,8h-2V4h-2V2h2c1.1,0,2,0.9,2,2V8z' />
        <rect x='14' y='2' width='4' height='2' />
        <path d='M4,6H2V4c0-1.1,0.9-2,2-2h6v2H4V6z' />
      </g>

      <g className={styles.Window3}>
        <path d='M4,26L4,26c-1.1,0-2-0.9-2-2v-8h2v8l0,0V26z' />
        <rect x='2' y='8' width='2' height='4' />
        <path d='M26,8h-2V4l0,0V2l0,0c1.1,0,2,0.9,2,2V8z' />
        <rect x='16' y='2' width='4' height='2' />
        <path d='M4,4H2l0,0c0-1.1,0.9-2,2-2h8v2H4L4,4z' />
      </g>

      <g className={styles.Window4}>
        <path d='M2,24V14h2v10H2z' />
        <rect x='6' y='24' width='2' height='2' />
        <rect x='2' y='6' width='2' height='4' />
        <path d='M26,8h-2V4l0,0h2V8z' />
        <rect x='18' y='2' width='4' height='2' />
        <path d='M4,4L4,4L4,4c0-1.1,0-2,0-2h10v2H4L4,4z' />
      </g>

      <g className={styles.Window5}>
        <path d='M2,22V12h2v10H2z' />
        <rect x='4' y='24' width='4' height='2' />
        <rect x='2' y='4' width='2' height='4' />
        <path d='M26,8h-2V6l0,0h2V8z' />
        <rect x='20' y='2' width='4' height='2' />
        <path d='M6,4L6,4L6,4c0-1.1,0-2,0-2h10v2H6L6,4z' />
      </g>

      <g className={styles.Window6}>
        <g>
          <path d='M2,20V10h2v10H2z' />
          <path d='M8,4L8,4L8,4c0-1.1,0-2,0-2h10v2H8L8,4z' />
        </g>
        <path d='M24,4h-2V2h2l0,0c1.1,0,2,0.9,2,2H24z' />
        <path d='M4,6H2V4c0-1.1,0.9-2,2-2v2V6z' />
        <path d='M6,26H4c-1.1,0-2-0.9-2-2h2h2V26z' />
      </g>

      <g className={styles.Window7}>
        <g>
          <path d='M2,18V8h2v10H2z' />
          <path d='M10,4L10,4L10,4c0-1.1,0-2,0-2h10v2H10L10,4z' />
        </g>
        <path d='M26,6h-2V2l0,0c1.1,0,2,0.9,2,2V6z' />
        <path d='M6,4H2c0-1.1,0.9-2,2-2h2V4z' />
        <path d='M4,24l0,2c-1.1,0-2-0.9-2-2v-2h2L4,24z' />
      </g>

      <g className={styles.Window8}>
        <path d='M2,16V6h2v10H2z' />
        <path d='M12,4L12,4L12,4c0-1.1,0-2,0-2h10v2H12L12,4z' />

        <path d='M26,8h-2V4c1.1,0,2,0,2,0V8z' />
        <path d='M8,4H4c0-1.1,0-2,0-2h4V4z' />
        <path d='M4,22l0,2H2v-4h2L4,22z' />
        <path d='M8,26H6v-2h2V26z' />
      </g>

      <g className={styles.Window9}>
        <path d='M2,14V4h2v10H2z' />
        <path d='M14,4L14,4L14,4c0-1.1,0-2,0-2h10v2H14L14,4z' />

        <path d='M26,8h-2V6c1.1,0,2,0,2,0V8z' />
        <path d='M10,4H6c0-1.1,0-2,0-2h4V4z' />
        <path d='M4,20l0,2H2v-4h2L4,20z' />
        <path d='M8,26H4v-2h4V26z' />
      </g>

      <g className={styles.Window10}>
        <path d='M12,4H8c0-1.1,0-2,0-2h4V4z' />
        <path d='M4,18l0,2H2v-4h2L4,18z' />
        <path d='M24,4h-8V2h8c1.1,0,2,0.9,2,2H24z' />
        <path d='M4,12H2V4c0-1.1,0.9-2,2-2v2V12z' />
        <path d='M8,26H4c-1.1,0-2-0.9-2-2l0,0h6V26z' />
      </g>

      <g className={styles.Window11}>
        <path d='M14,4h-4c0-1.1,0-2,0-2h4V4z' />
        <path d='M4,16l0,2H2v-4h2L4,16z' />
        <path d='M24,4h-6V2h6c1.1,0,2,0.9,2,2v2h-2V4z' />
        <path d='M4,9.9H2V4c0-1.1,0.9-2,2-2h2v2H4V9.9z' />
        <path d='M8,26H4c-1.1,0-2-0.9-2-2l0,0v-2h2l0,2h4V26z' />
      </g>

      <g className={styles.Window12}>
        <path d='M8,26H4c-1.1,0-2-0.9-2-2v-4h2v4h4V26z' />
        <rect x='2' y='12' width='2' height='4' />
        <path d='M26,8h-2V4h-4V2h4c1.1,0,2,0.9,2,2V8z' />
        <rect x='12' y='2' width='4' height='2' />
        <path d='M4,8H2V4c0-1.1,0.9-2,2-2h4v2H4V8z' />
      </g>

      <g className={styles.Glass}>
        <path d='M31,29.5859l-4.6885-4.6884a8.028,8.028,0,1,0-1.414,1.414L29.5859,31ZM20,26a6,6,0,1,1,6-6A6.0066,6.0066,0,0,1,20,26Z' />
        <polygon points='24,19 21,19 21,16 19,16 19,19 16,19 16,21 19,21 19,24 21,24 21,21 24,21  ' />
      </g>
    </svg>
  )
}

export default ZoomInAreaMotion
