import React, { useRef, useState, useEffect } from "react";
import styles from "./connection-signal--motion.scss";

const ConnectionSignalMotion = (props) => {
 const iconRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  let iconStyles = {
    width: props.size,
    height: props.size
  }

  React.useEffect(() => {
    setIsAnimating(props.isAnimating)
  }, [props.isAnimating])

  const shouldAnimate = isAnimating ? styles.isAnimating : ''

  return (
    <div ref={iconRef} className={`${shouldAnimate}`}>
      <svg
        style={iconStyles}
        viewBox="0 0 32 32"
      >
        <title>connection signal</title>
        <rect x="15" y="12" width="2" height="18" />
        <path
          className={styles.ConnectionInner}
          d="M11.33,18.22a7,7,0,0,1,0-10.44l1.34,1.49a5,5,0,0,0,0,7.46Z"
        />
        <path
          className={styles.ConnectionInner}
          d="M20.67,18.22l-1.34-1.49a5,5,0,0,0,0-7.46l1.34-1.49a7,7,0,0,1,0,10.44Z"
        />
        <path
          className={styles.ConnectionOuter}
          d="M8.4,21.8a11,11,0,0,1,0-17.6L9.6,5.8a9,9,0,0,0,0,14.4Z"
        />
        <path
          className={styles.ConnectionOuter}
          d="M23.6,21.8l-1.2-1.6a9,9,0,0,0,0-14.4l1.2-1.6a11,11,0,0,1,0,17.6Z"
        />
      </svg>
    </div>
  );
};

export default ConnectionSignalMotion;