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
				viewBox='0 0 32 32'
			>
			<g className={styles.SelectWindowCursor}>
        		<path d="M27,32c-0.3,0-0.5-0.1-0.7-0.3l-6.1-6.1l-3.3,5c-0.3,0.5-0.9,0.6-1.4,0.3c-0.2-0.1-0.3-0.3-0.4-0.5l-6-20
		C8.9,9.8,9.2,9.2,9.7,9C9.9,9,10.1,9,10.3,9l20,6c0.5,0.2,0.8,0.7,0.7,1.2c-0.1,0.2-0.2,0.4-0.4,0.5l-5,3.3l6.1,6.1
		c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0l-4,4C27.5,31.9,27.3,32,27,32z M27,29.6l2.6-2.6l-7.2-7.2l5.2-3.5l-16.2-4.9l4.9,16.2l3.5-5.2
		L27,29.6z" />
       		</g>
			<g className={styles.SelectWindowBorder}>
          		<path d="M4,8H2V4c0-1.1,0.9-2,2-2h4v2H4V8z M12,2h4v2h-4V2z M26,8h-2V4h-4V2h4c1.1,0,2,0.9,2,2V8z M2,12h2v4H2V12z M8,26H4
		c-1.1,0-2-0.9-2-2v-4h2v4h4V26z" />
        	</g>
			</svg>
		</div>
	)
}

export default SelectWindowMotion
