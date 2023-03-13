import React, { useState } from 'react'
import * as icons from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'

const FormattingSection = () => {
  const [pasteAnimating, setPasteAnimating] = useState(false)

  return (
    <section className='icon-section'>
      <div className='bx--grid'>
        <div className='bx--row'>
          <h2>Formatting</h2>
        </div>
        <ul className='bx--row icon-tiles-grid'>
          <li
            className='icon-tile'
            onMouseEnter={() => setPasteAnimating(true)}
            onMouseLeave={() => setPasteAnimating(false)}
          >
            <h3>Paste</h3>
            <icons.PasteMotion isAnimating={pasteAnimating} size={32} />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default FormattingSection
