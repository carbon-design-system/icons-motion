import React, { useRef, useState, useEffect } from 'react'
import styles from './menu-to-close--motion.module.scss'

const MenuToCloseMotion = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  let iconStyles = {
<<<<<<< HEAD
    width: props.width,
    height: props.height
=======
    width: props.size,
    height: props.size
>>>>>>> 81ca42f41dfaacb1012bb58322dd8455e72d91db
  }

  React.useEffect(() => {
    setIsAnimating(props.isAnimating)
  }, [props.isAnimating])

  const shouldAnimate = isAnimating ? styles.isAnimating : ''

  return (
    <div ref={iconRef} className={`${shouldAnimate}`}>
      <svg
        style={iconStyles}
        className={styles.MenuToCloseMotion}
        x='0px'
        y='0px'
        viewBox='0 0 320 320'
      >
        <g className={styles.MenuBar4}>
          <line
            className={styles.MenuLines}
            x1='280'
            y1='250'
            x2='40'
            y2='250'
          />
        </g>
        <g className={styles.MenuBar3}>
          <line
            className={styles.MenuLines}
            x1='280'
            y1='190'
            x2='40'
            y2='190'
          />
        </g>
        <g className={styles.MenuBar2}>
          <line
            className={styles.MenuLines}
            x1='280'
            y1='130'
            x2='40'
            y2='130'
          />
        </g>
        <g className={styles.MenuBar1}>
          <line className={styles.MenuLines} x1='280' y1='70' x2='40' y2='70' />
        </g>
        <g className={styles.CloseBar1}>
          <line
            className={styles.CloseLines}
            x1='87.2'
            y1='86.8'
            x2='233.2'
            y2='232.8'
          />
        </g>
        <g className={styles.CloseBar2}>
          <line
            className={styles.CloseLines}
            x1='233.2'
            y1='86.8'
            x2='87.2'
            y2='232.8'
          />
        </g>
        <rect fill='none' x='0' y='0' width='32' height='32'></rect>
      </svg>
    </div>
  )
}

export default MenuToCloseMotion
