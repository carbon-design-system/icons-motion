import React, { useRef } from "react";
import styles from "./globe--motion.module.scss";

const GlobeMotion = (props) => {
  const iconRef = useRef(null);

  return (
    <div ref={iconRef} className={props.isAnimating ? styles.isAnimating : null}>
      <svg
        viewBox="0 0 32 32"
        className={styles.GlobeMotion}
        width={props.size}
        height={props.size}>
        <title>globe</title>
      <path className={styles.Globe} d="M14,4c3.9,0,7,3.1,7,7s-3.1,7-7,7s-7-3.1-7-7S10.1,4,14,4 M14,2c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S19,2,14,2z"/>
      <path className={styles.GlobeBase} d="M28,11c0-3.7-1.5-7.3-4.1-9.9l-1.4,1.4c4.7,4.7,4.7,12.3,0,17c-4.7,4.7-12.3,4.7-17,0l0,0l-1.4,1.4
  C6.7,23.5,10.3,25,14,25v3h-4v2h10v-2h-4v-3.2C22.9,23.8,28,18,28,11z"/>
      <circle className={styles.GlobeLine} cx="14" cy="11" r="8"/>
    </svg>
  </div>
  );
};

export default GlobeMotion;
