import React, { useRef } from "react";
import styles from "./archive--motion.module.scss";

const ArchiveMotion = (props) => {
  const iconRef = useRef(null);

  return (
    <div ref={iconRef} className={props.isAnimating ? styles.isAnimating : null} >   
      <svg 
        viewBox="0 0 32 32"
        width={props.size} 
        height={props.size} >
        <path className={styles.TopDrawer} d="M7 3h18v5.9H7z" />
        <path className={styles.BottomDrawer} d="M24 16v12H8V16h16m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V16c0-1.1-.9-2-2-2z" />
        <path className={styles.Handle} d="M14 19h4v2h-4z"/>
        <path className={styles.Line} d="M7 16.2v-7 7z" />
        <path className={styles.Line} d="M25 16.2v-7 7z" />
      </svg>
    </div>
  );
};

export default ArchiveMotion;