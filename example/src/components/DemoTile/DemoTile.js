import React, { useState, useRef } from 'react'
import '@carbon/icons-motion/dist/index.css'

const DemoTile = (props) => {
	const [iconAnimating, setIconAnimating] = useState(false)
	const iconRef = useRef()

	const iconWithRef = React.cloneElement(props.icon,  {isAnimating: iconAnimating, ref: iconRef }, null );

 	return (
	 	<li
	    	className='icon-tile'
	        onMouseEnter={() => setIconAnimating(true)}
	        onMouseLeave={() => setIconAnimating(false)}
	    >
			<h3>{props.tileTitle}</h3>
			{iconWithRef}
		</li>         
 	)
}

export default DemoTile;
