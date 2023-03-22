import React, { useRef } from "react";
import styles from "./dashboard--motion.scss";

const DashboardMotion = (props) => {
  const iconRef = useRef(null);
 
  return (
    <div ref={iconRef} className={ props.isAnimating ? styles.isAnimating : null}>
      <svg 
      	width={props.size}
        height={props.size}
      >
	    <title>dashboard</title>
		<path className={styles.Outline} d="M28,2H4C2.9,2,2,2.9,2,4v24c0,1.1,0.9,2,2,2h24c1.1,0,2-0.9,2-2V4C30,2.9,29.1,2,28,2z"/>
		<path className={styles.GraphCircle} d="M7,21a4,4 0 1,0 8,0a4,4 0 1,0 -8,0"/>
		<rect className={styles.RectangleHorizontal} width="26"  x="4" y="4" />
		<rect className={styles.RectangleVertical} width="2"  x="19" y="5" />
		<path className={styles.GraphBarLeft} d="M21 16v10" /> 
		<path className={styles.GraphBarRight} d="M25 16v10" />
		<path id="_Transparent_Rectangle_" fill="none" d="M0 0h32v32H0z"/>
      </svg>
    </div>
  );
};

export default DashboardMotion;