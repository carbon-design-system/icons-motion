import React, { useRef, useState, useEffect } from "react";
import getSvgTitle from '../../../helpers/getSvgTitle';


const RuleMotion = (props) => {

	const iconRef = useRef(null)
	const [saveStatus, setSaveStatus] = useState(props.status);

	useEffect(() => {
	   setSaveStatus(props.status)
	 }, [props.status])

	// let fillColor = "#" + props.fillColor

	return (
		<div ref={iconRef}>
			<svg width={props.size} 
			 	height={props.size}  
			 	viewBox="0 0 32 32">
				{((props.title == true ) || (typeof props.title === 'string')) ? <title>{getSvgTitle(props.title, "Save successful")}</title> : null}
		 		<rect  width="12" height="2" x="10" y="16"/>
	  			<rect width="12" height="2" x="10" y="10"/>
	  			<path d="M16,30,9.8242,26.7071A10.9815,10.9815,0,0,1,4,17V4A2.0022,2.0022,0,0,1,6,2H26a2.0022,2.0022,0,0,1,2,2V17a10.9815,10.9815,0,0,1-5.8242,9.7069ZM6,4V17a8.9852,8.9852,0,0,0,4.7656,7.9423L16,27.7333l5.2344-2.791A8.9852,8.9852,0,0,0,26,17V4Z"/>
			</svg>
		</div>
	)
}

export default RuleMotion;