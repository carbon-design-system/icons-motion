import React, { useRef } from "react";
import styles from "./connection-signal--motion.scss";

const ConnectionSignalMotion = (props) => {
 const iconRef = useRef(null);

  return (
    <div ref={iconRef} className={props.isAnimating ? styles.isAnimating : null}>
      <svg viewBox="0 0 32 32" width={props.size} height={props.size}>
        <title>connection signal</title>
        <rect className={styles.Tower} width="2" height="18" x="15" y="12"/>
        <path className={styles.SignalInner} d="M12,17.5c-1.2-1.1-2-2.7-2-4.5c0-1.8,0.8-3.4,2-4.5" />
        <path className={styles.SignalInner} d="M20,8.5c1.2,1.1,2,2.7,2,4.5c0,1.8-0.8,3.4-2,4.5" />
        <path className={styles.SignalOuter} d="M9,21.4c-2.4-2-4-5.1-4-8.4c0-3.4,1.5-6.4,4-8.4"/>
        <path className={styles.SignalOuter} d="M23,4.6c2.4,2,4,5.1,4,8.4s-1.5,6.4-4,8.4" />
      </svg>
    </div>
  );
};

export default ConnectionSignalMotion;