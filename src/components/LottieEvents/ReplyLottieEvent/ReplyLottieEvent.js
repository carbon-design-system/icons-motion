import React, { useRef, useState, useEffect } from 'react'
import lottie from "lottie-web";
import LottieData from "./ReplyLottieEvent.json";

const ReplyLottieEvent = (props) => {

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

    anim.current.goToAndStop(1, true)
  }, [])

  React.useEffect(() => {
    if (props.toggleOn == true) {
      anim.current.playSegments([60,90], false)
    }
    else if (props.toggleOn == false) {
      anim.current.playSegments([120,140], false)
    }
    else {
        anim.current.goToAndStop(1, true)
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

export default ReplyLottieEvent