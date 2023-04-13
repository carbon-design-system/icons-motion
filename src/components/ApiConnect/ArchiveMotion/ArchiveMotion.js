import React, { useRef } from "react";
import styles from "./archive--motion.module.scss";

const ArchiveMotion = (props) => {
  const iconRef = useRef(null);

  return (
    <div ref={iconRef} className={props.isAnimating ? styles.isAnimating : null} >   
      <svg viewBox="0 0 32 32"
        width={props.size} 
        height={props.size}>
        <title>archive</title>
        <rect className={ styles.Handle } x="14" y="19" width="4" height="2"/>
        <path className={ styles.DrawerBottomLeft } d="M6,18v10c0,1.1,0.9,2,2,2h14v-2H8V18H6z"/>
        <path className={ styles.DrawerBottomRight } d="M24,18v10H10v2h14c1.1,0,2-0.9,2-2V18H24z"/>
        <path className={ styles.DrawerTop } d="M6,16h20V2H6 M24,14H8v-4h16V14z M8,8V4h16v4H8z"/>
        <polygon className={ styles.DrawerTopLeft } points="22,16 8,16 8,20 6,20 6,14 22,14 "/>
        <polygon className={ styles.DrawerTopRight } points="10,16 24,16 24,20 26,20 26,14 10,14 "/>
      </svg>
    </div>
  );
};

export default ArchiveMotion;
