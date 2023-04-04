import React, { useRef } from "react";
import styles from "./download--motion.scss";

const DownloadMotion = (props) => {
  const iconRef = useRef(null);
 
  return (
    <div ref={iconRef} className={ props.isAnimating ? styles.isAnimating : null}
      >
      <svg className={styles.DownloadMotion}   
        width={props.size}
        height={props.size}
        viewBox='0 -5 32 35'
      >
        <title>download</title>
        <path
          className={styles.DownloadArrow}
          d='M26 15l-1.41-1.41L17 21.17V2h-2v19.17l-7.59-7.58L6 15l10 10 10-10z'
        />
        <path d='M26 24v4H6v-4H4v4a2 2 0 002 2h20a2 2 0 002-2v-4z' />
      </svg>
    </div>
  );
};

export default DownloadMotion;
