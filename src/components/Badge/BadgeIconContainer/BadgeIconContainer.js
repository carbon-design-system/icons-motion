import React, { useRef, useState, useEffect, cloneElement } from "react";
import styles from "./badge-icon-container.module.scss";

const BadgeIconContainer = (props) => {
	/// need to pass fill color as a prop here
	return (
		<div className={styles.BadgeContainer}>			
			{ props.svg }
			{ props.badge }	
		</div>
	)
}

export default BadgeIconContainer;
