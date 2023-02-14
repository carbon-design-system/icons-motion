import React, { useRef, useState, useEffect } from "react";
import styles from "./globe--motion.module.scss";

const GlobeMotion = (props) => {

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
        viewBox="0 0 32 32"
        className={styles.GlobeMotion}
      >
        <title>globe</title>
        <path
          d="M14,4a7,7,0,1,1-7,7,7,7,0,0,1,7-7m0-2a9,9,0,1,0,9,9A9,9,0,0,0,14,2Z"
          className={styles.GlobeBall1}
        />
        <path d="M28,11a13.9563,13.9563,0,0,0-4.1051-9.8949L22.4813,2.5187A11.9944,11.9944,0,0,1,5.5568,19.5194l-.0381-.0381L4.1051,20.8949A13.9563,13.9563,0,0,0,14,25v3H10v2H20V28H16V24.84A14.0094,14.0094,0,0,0,28,11Z" />
        <rect id="_Transparent_Rectangle_" fill="none" width="32" height="32" />
      </svg>
    </div>
  );
};

export default GlobeMotion;