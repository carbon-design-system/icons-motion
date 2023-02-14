import React, { useRef, useState, useEffect } from "react";
import styles from "./settings--motion.module.scss";

const SettingsMotion = (props) => {
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
				className={styles.SettingsMotion}
			>
				<title>settings</title>
				<path
					className={styles.SettingsOuterGear}
					d="M27 16.76V16v-.77l1.92-1.68A2 2 0 0029.3 11l-2.36-4a2 2 0 00-1.73-1 2 2 0 00-.64.1l-2.43.82a11.35 11.35 0 00-1.31-.75l-.51-2.52a2 2 0 00-2-1.61h-4.68a2 2 0 00-2 1.61l-.51 2.52a11.48 11.48 0 00-1.32.75l-2.38-.86A2 2 0 006.79 6a2 2 0 00-1.73 1L2.7 11a2 2 0 00.41 2.51L5 15.24v1.53l-1.89 1.68A2 2 0 002.7 21l2.36 4a2 2 0 001.73 1 2 2 0 00.64-.1l2.43-.82a11.35 11.35 0 001.31.75l.51 2.52a2 2 0 002 1.61h4.72a2 2 0 002-1.61l.51-2.52a11.48 11.48 0 001.32-.75l2.42.82a2 2 0 00.64.1 2 2 0 001.73-1l2.28-4a2 2 0 00-.41-2.51zM25.21 24l-3.43-1.16a8.86 8.86 0 01-2.71 1.57L18.36 28h-4.72l-.71-3.55a9.36 9.36 0 01-2.7-1.57L6.79 24l-2.36-4 2.72-2.4a8.9 8.9 0 010-3.13L4.43 12l2.36-4 3.43 1.16a8.86 8.86 0 012.71-1.57L13.64 4h4.72l.71 3.55a9.36 9.36 0 012.7 1.57L25.21 8l2.36 4-2.72 2.4a8.9 8.9 0 010 3.13L27.57 20z"
				/>
				<path d="M16 22a6 6 0 116-6 5.94 5.94 0 01-6 6zm0-10a3.91 3.91 0 00-4 4 3.91 3.91 0 004 4 3.91 3.91 0 004-4 3.91 3.91 0 00-4-4z" />
			</svg>
		</div>
	);
};

export default SettingsMotion;