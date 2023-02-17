import React, { useRef } from "react";
import styles from "./events--motion.module.scss";

const EventsMotion = (props) => {
 
  const iconRef = useRef(null);
 
  return (
    <div ref={iconRef} className={props.isAnimating ? styles.isAnimating : null}>
      <svg
        viewBox="0 0 32 32"
        className={styles.EventsMotion}
        width={props.size}
        height={props.size}
      >
        <title>events</title>
        <g className={styles.EventsPerson}>
          <path
            d="M26,14H24v2h2a3.0033,3.0033,0,0,1,3,3v4h2V19A5.0058,5.0058,0,0,0,26,14Z"
            transform="translate(0 0)"
          />
          <path
            d="M24,4a3,3,0,1,1-3,3,3,3,0,0,1,3-3m0-2a5,5,0,1,0,5,5A5,5,0,0,0,24,2Z"
            transform="translate(0 0)"
          />
        </g>

        <g className={styles.EventsPerson2}>
          <path
            d="M23,30H21V28a3.0033,3.0033,0,0,0-3-3H14a3.0033,3.0033,0,0,0-3,3v2H9V28a5.0059,5.0059,0,0,1,5-5h4a5.0059,5.0059,0,0,1,5,5Z"
            transform="translate(0 0)"
          />
          <path
            d="M16,13a3,3,0,1,1-3,3,3,3,0,0,1,3-3m0-2a5,5,0,1,0,5,5A5,5,0,0,0,16,11Z"
            transform="translate(0 0)"
          />
        </g>

        <g className={styles.EventsPerson3}>
          <path
            d="M8,14H6a5.0059,5.0059,0,0,0-5,5v4H3V19a3.0033,3.0033,0,0,1,3-3H8Z"
            transform="translate(0 0)"
          />

          <path
            d="M8,4A3,3,0,1,1,5,7,3,3,0,0,1,8,4M8,2a5,5,0,1,0,5,5A5,5,0,0,0,8,2Z"
            transform="translate(0 0)"
          />

          <rect id="_Transparent_Rectangle_" fill="none" width="32" height="32" />
        </g>
      </svg>
    </div>
  );
};

export default EventsMotion;