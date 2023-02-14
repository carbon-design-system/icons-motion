import React, { useRef, useState, useEffect } from "react";
import styles from "./edit--motion.module.scss";

const EditMotion = (props) => {

  const iconRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  let iconStyles = {
    width: props.size,
    height: props.size
  }

  React.useEffect(() => {
    setIsAnimating(props.isAnimating)
  }, [props.isAnimating])

  const shouldAnimate = isAnimating ? styles.isAnimating : ''

  return (
    <div ref={iconRef} className={`${shouldAnimate}`}>
      <svg
        viewBox="0 0 32 32"
        className={styles.EditMotion}
      >
        <title>edit</title>
        <rect x="2" y="26" width="28" height="2" />
        <path
          className={styles.EditPencil}
          d="M25.4,9c0.8-0.8,0.8-2,0-2.8c0,0,0,0,0,0l-3.6-3.6c-0.8-0.8-2-0.8-2.8,0c0,0,0,0,0,0l-15,15V24h6.4L25.4,9z M20.4,4L24,7.6
    l-3,3L17.4,7L20.4,4z M6,22v-3.6l10-10l3.6,3.6l-10,10H6z"
        />
      </svg>
    </div>
  );
};

export default EditMotion;