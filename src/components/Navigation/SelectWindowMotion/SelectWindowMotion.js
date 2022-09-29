import React, { useRef, useState, useEffect } from 'react'
import styles from './select-window--motion.module.scss'

const SelectWindowMotion = (props) => {
	const iconRef = useRef(null)
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
			style={iconStyles}
			className={styles.IconSelectWindow}
			viewBox='0 0 32 32'>
			<path className={styles.SelectWindowCursor} d="M27,32c-0.3,0-0.5-0.1-0.7-0.3l-6.1-6.1l-3.3,5c-0.3,0.5-0.9,0.6-1.4,0.3c-0.2-0.1-0.3-0.3-0.4-0.5l-6-20
		C8.9,9.8,9.2,9.2,9.7,9C9.9,9,10.1,9,10.3,9l20,6c0.5,0.2,0.8,0.7,0.7,1.2c-0.1,0.2-0.2,0.4-0.4,0.5l-5,3.3l6.1,6.1
		c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0l-4,4C27.5,31.9,27.3,32,27,32z M27,29.6l2.6-2.6l-7.2-7.2l5.2-3.5l-16.2-4.9l4.9,16.2l3.5-5.2
		L27,29.6z" />   
			<path className={styles.SelectWindow1} d="M8,26H4c-1.1,0-2-0.9-2-2v-4h2v4h4V26z M2,16h2v-4H2V16z M26,4c0-1.1-0.9-2-2-2h-4v2h4v4h2V4z M12,4h4V2h-4V4z M4,4h4V2H4
		C2.9,2,2,2.9,2,4v4h2V4z" />
        	<path className={styles.SelectWindow2} d="M6,26H4c-1.1,0-2-0.9-2-2v-6h2v6h2V26z M2,14h2v-4H2V14z M26,4c0-1.1-0.9-2-2-2h-2v2h2v4h2V4z M14,4h4V2h-4V4z M4,4h6V2H4
		C2.9,2,2,2.9,2,4v2h2V4z" />
        	<path className={styles.SelectWindow3} d="M4,26L4,26c-1.1,0-2-0.9-2-2v-8h2v8l0,0V26z M2,12h2V8H2V12z M26,4c0-1.1-0.9-2-2-2l0,0v2l0,0v4h2V4z M16,4h4V2h-4V4z M4,4
		h8V2H4C2.9,2,2,2.9,2,4l0,0H4L4,4z" />
       		<path className={styles.SelectWindow4} d="M2,24V14h2v10H2z M6,26h2v-2H6V26z M2,10h2V6H2V10z M26,4h-2l0,0v4h2V4z M18,4h4V2h-4V4z M4,4h10V2H4C4,2,4,2.9,4,4L4,4
		L4,4L4,4z"/>
        	<path className={styles.SelectWindow5} d="M2,22V12h2v10H2z M4,26h4v-2H4V26z M2,8h2V4H2V8z M26,6h-2l0,0v2h2V6z M20,4h4V2h-4V4z M6,4h10V2H6C6,2,6,2.9,6,4L6,4L6,4
		L6,4z" />
        	<path className={styles.SelectWindow6} d="M2,20V10h2v10H2z M8,4h10V2H8C8,2,8,2.9,8,4L8,4L8,4L8,4z M26,4c0-1.1-0.9-2-2-2l0,0h-2v2h2H26z M4,4V2C2.9,2,2,2.9,2,4v2
		h2V4z M6,24H4H2c0,1.1,0.9,2,2,2h2V24z" />
        	<path className={styles.SelectWindow7} d="M2,18V8h2v10H2z M10,4h10V2H10C10,2,10,2.9,10,4L10,4L10,4L10,4z M26,4c0-1.1-0.9-2-2-2l0,0v4h2V4z M6,2H4C2.9,2,2,2.9,2,4
		h4V2z M4,22H2v2c0,1.1,0.9,2,2,2l0-2L4,22z" />
        	<path className={styles.SelectWindow8} d="M2,16V6h2v10H2z M12,4h10V2H12C12,2,12,2.9,12,4L12,4L12,4L12,4z M26,4c0,0-0.9,0-2,0v4h2V4z M8,2H4c0,0,0,0.9,0,2h4V2z
		 M4,20H2v4h2l0-2L4,20z M8,24H6v2h2V24z" />
        	<path className={styles.SelectWindow9} d="M2,14V4h2v10H2z M14,4h10V2H14C14,2,14,2.9,14,4L14,4L14,4L14,4z M26,6c0,0-0.9,0-2,0v2h2V6z M10,2H6c0,0,0,0.9,0,2h4V2z
		 M4,18H2v4h2l0-2L4,18z M8,24H4v2h4V24z" /> 
		 	<path className={styles.SelectWindow10} d="M12,4H8c0-1.1,0-2,0-2h4V4z M4,16H2v4h2l0-2L4,16z M26,4c0-1.1-0.9-2-2-2h-8v2h8H26z M4,4V2C2.9,2,2,2.9,2,4v8h2V4z M8,24
		H2l0,0c0,1.1,0.9,2,2,2h4V24z" />  
			<path className={styles.SelectWindow11} d="M14,4h-4c0-1.1,0-2,0-2h4V4z M4,14H2v4h2l0-2L4,14z M24,6h2V4c0-1.1-0.9-2-2-2h-6v2h6V6z M4,4h2V2H4C2.9,2,2,2.9,2,4v5.9h2
		V4z M8,24H4l0-2H2v2l0,0c0,1.1,0.9,2,2,2h4V24z" /> 
			<path className={styles.SelectWindow12} d="M8,26H4c-1.1,0-2-0.9-2-2v-4h2v4h4V26z M2,16h2v-4H2V16z M26,4c0-1.1-0.9-2-2-2h-4v2h4v4h2V4z M12,4h4V2h-4V4z M4,4h4V2H4
		C2.9,2,2,2.9,2,4v4h2V4z" />
			 
			</svg>
		</div>
	)
}

export default SelectWindowMotion
