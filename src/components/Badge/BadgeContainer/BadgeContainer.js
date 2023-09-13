// OLD VERSION - USE BadgeContainerTwo instead

import React, { useRef, useState, useEffect, cloneElement } from "react";
import styles from "./badge-container.module.scss";
// import PropTypes from 'prop-types';

const BadgeContainer = (props) => {
	const [status, setStatus] = useState(null);

	useEffect(() => {
	   	setStatus(props.status)
	}, [props.status])

	const clonedSvg = React.cloneElement(  props.svg, { size: 20, ... props}, null )

	return (
		<div className={styles.BadgeContainer}>
			<div className={styles.BadgeSvg}> { clonedSvg } </div>
			<div className={styles.Badge}> { props.number } </div>
		</div>
	)
}

export default BadgeContainer;
