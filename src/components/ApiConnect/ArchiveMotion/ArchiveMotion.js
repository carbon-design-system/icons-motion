import React, { useRef } from "react";
import styles from "./archive--motion.module.scss";

const ArchiveMotion = (props) => {
  const iconRef = useRef(null);

  return (
    <div ref={iconRef} className={props.isAnimating ? styles.isAnimating : null} >
      <svg
        height={props.size}
        width={props.size}
      >
        <title>archive</title>
        <rect className={styles.ArchiveHandle} x="14" y="19" width="4" height="2" />
        <path d="M6,2V28a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V2ZM24,28H8V16H24Zm0-14H8V10H24ZM8,8V4H24V8Z" />
      </svg>
    </div>
  );
};

export default ArchiveMotion;