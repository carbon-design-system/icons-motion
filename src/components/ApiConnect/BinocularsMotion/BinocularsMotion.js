import React, { useRef, useState, useEffect } from "react";
import styles from "./binoculars--motion.scss";

const BinocularsMotion = (props) => {
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
        className={styles.Binoculars}
      >
        <path
 d="M28 8V5a1 1 0 00-1-1h-6a1 1 0 00-1 1v3a2 2 0 00-2 2v2h-4v-2a2 2 0 00-2-2V5a1 1 0 00-1-1H5a1 1 0 00-1 1v3a2 2 0 00-2 2v12a2 2 0 001 1.72V27a1 1 0 001 1h8a1 1 0 001-1v-3.28A2 2 0 0014 22v-2h4v2a2 2 0 001 1.72V27a1 1 0 001 1h8a1 1 0 001-1v-3.28A2 2 0 0030 22V10a2 2 0 00-2-2zM11 26H5v-2h6zm1-4H4V10h2V6h4v4h2zm2-4v-4h4v4zm13 8h-6v-2h6zm1-4h-8V10h2V6h4v4h2z" />
      </svg>
    </div>
  );
};

export default BinocularsMotion;