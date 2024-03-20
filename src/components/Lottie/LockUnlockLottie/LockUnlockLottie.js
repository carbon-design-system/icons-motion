import React, { useRef, useState, useEffect } from 'react'
// import styles from './lock-unlock--motion.module.scss'
import lottie from "lottie-web";
// import LockUnlockLottieJson from "./lock2.json"; 

import LottieData from "./LockUnlock.json"; 

const LockUnlockLottie = (props) => {

  const animContainer = useRef(null)
  const anim = useRef(null)

  React.useEffect(() => {
    if (animContainer.current) {
      anim.current = lottie.loadAnimation({
        container: animContainer.current,
        animationData: LottieData,
        renderer: 'svg',
        autoplay: false,
        loop: props.loop,
      })
    }
  }, [])

  React.useEffect(() => {
    if (props.toggleOn == true) {
      anim.current.playSegments([60,120], true)
    }
    else {
      anim.current.playSegments([120,180], true)
    }
  }, [props.toggleOn])

  let iconStyles = {
    width: props.width,
    height: props.height
  }

  return (
    <div
      ref={animContainer}
      style={iconStyles}
    ></div>
  )
}

export default LockUnlockLottie

