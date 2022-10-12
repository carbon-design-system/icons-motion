import React, { useState } from 'react'
import * as icons from 'carbon-motion'
import 'carbon-motion/dist/index.css'

const OperationsSection = () => {
  const [addAnimating, setAddAnimating] = useState(false)
 
	return (
		<section className="icon-section">	
			<div className='bx--grid'>
        <div className='bx--row'>
          <h2>Operations</h2>
        </div>
  			<ul className='bx--row'>
  				<li
            className='icon-tile'
            onMouseEnter={() => setAddAnimating(true)}
            onMouseLeave={() => setAddAnimating(false)}
          >
          <h3>Add</h3>
          <icons.AddMotion 
            isAnimating={addAnimating} 
            size={32} />
          </li>
  		  </ul>
		  </div>
		</section>
	)
}

export default OperationsSection
