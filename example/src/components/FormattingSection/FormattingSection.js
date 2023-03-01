import React, { useState } from 'react'
import * as icons from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'

const FormattingSection = () => {
  const [cropAnimating, setCropAnimating] = useState(false)

  return (
    <section className='icon-section'>
      <div className='bx--grid'>
        <div className='bx--row'>
          <h2>Formatting</h2>
        </div>
        <ul className='bx--row icon-tiles-grid'>
          <li
            className='icon-tile'
            onMouseEnter={() => setCropAnimating(true)}
            onMouseLeave={() => setCropAnimating(false)}
          >
            <h3>Crop</h3>
            <icons.CropMotion isAnimating={cropAnimating} size={32} />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default FormattingSection
