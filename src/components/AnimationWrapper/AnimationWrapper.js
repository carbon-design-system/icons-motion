import React, { useRef, useState, useEffect } from 'react'
// import styles from './animation-wrapper.module.scss'

const AnimationWrapper = (props) => {
  const iconRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(props.isPlaying)

  console.log(props)

  // let iconStyles = {
  //   width: props.width,
  //   height: props.height,
  // }

  React.useEffect(() => {
    setIsPlaying(props.isPlaying)
    // console.log(isPlaying)
  }, [props.isPlaying])

  // const shouldAnimate = isPlaying ? styles.isPlaying : ''
  // const shouldAnimate = isPlaying ? "test" : ''

  return <div ref={iconRef} className={`${shouldAnimate}`}></div>
}

export default AnimationWrapper
