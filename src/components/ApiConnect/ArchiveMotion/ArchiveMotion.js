import React, { useRef, useState, useEffect } from "react";
import styles from "./archive--motion.module.scss";

const ArchiveMotion = (props) => {
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
        <title>archive</title>
        <rect className={styles.ArchiveHandle} x="14" y="19" width="4" height="2" />
        <path d="M6,2V28a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V2ZM24,28H8V16H24Zm0-14H8V10H24ZM8,8V4H24V8Z" />
      </svg>
    </div>
  );
};

export default ArchiveMotion;