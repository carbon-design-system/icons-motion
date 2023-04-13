import React, { useRef } from "react";
import styles from "./dashboard--motion.module.scss";

const DashboardMotion = (props) => {
  const iconRef = useRef(null);
 
  return (
    <div ref={iconRef} className={ props.isAnimating ? styles.isAnimating : null}>
      <svg viewBox="0 0 32 32"
      	width={props.size}
        height={props.size}>
        <title>dashboard</title>
				<path className={styles.GraphCircle} d="M7,21a4,4 0 1,0 8,0a4,4 0 1,0 -8,0"/>
				<path className={styles.GraphBarLeft} d="M21 16v10" /> 
				<path className={styles.GraphBarRight} d="M25 16v10" />
				<path id="_Transparent_Rectangle_" fill="none" d="M0 0h32v32H0z"/>
				<path d="M28,2H4C2.9,2,2,2.9,2,4v24c0,1.1,0.9,2,2,2h24c1.1,0,2-0.9,2-2V4C30,2.9,29.1,2,28,2z M28,11H14V4h14V11z M12,4v7H4V4H12z
			 M4,28V13h24v15H4z"/>
      </svg>
    </div>
  )
};

export default DashboardMotion;



