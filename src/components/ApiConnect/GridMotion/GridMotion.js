import React, { useRef } from "react";
import styles from "./grid--motion.module.scss";

const GridMotion = (props) => {
  const iconRef = useRef(null);
 
  return (
    <div ref={iconRef} className={props.isAnimating ? styles.isAnimating : null}>
      <svg 
        width={props.size}
        height={props.size}
        viewBox="0 0 32 32">
        <title>grid</title>
        <path className={styles.GridBoxOne} d="M12,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,12 C4,13.1045695 4.8954305,14 6,14 L12,14 C13.1045695,14 14,13.1045695 14,12 L14,6 C14,4.8954305 13.1045695,4 12,4 Z M12,12 L6,12 L6,6 L12,6 L12,12 Z"/>
        <path className={styles.GridBoxTwo} d="M26,4 L20,4 C18.8954305,4 18,4.8954305 18,6 L18,12 C18,13.1045695 18.8954305,14 20,14 L26,14 C27.1045695,14 28,13.1045695 28,12 L28,6 C28,4.8954305 27.1045695,4 26,4 Z M26,12 L20,12 L20,6 L26,6 L26,12 Z" />
        <path className={styles.GridBoxThree} d="M12,18 L6,18 C4.8954305,18 4,18.8954305 4,20 L4,26 C4,27.1045695 4.8954305,28 6,28 L12,28 C13.1045695,28 14,27.1045695 14,26 L14,20 C14,18.8954305 13.1045695,18 12,18 Z M12,26 L6,26 L6,20 L12,20 L12,26 Z" />
        <path className={styles.GridBoxFour} d="M26,18 L20,18 C18.8954305,18 18,18.8954305 18,20 L18,26 C18,27.1045695 18.8954305,28 20,28 L26,28 C27.1045695,28 28,27.1045695 28,26 L28,20 C28,18.8954305 27.1045695,18 26,18 Z M26,26 L20,26 L20,20 L26,20 L26,26 Z" />
      </svg>
    </div>
  );
};

export default GridMotion;