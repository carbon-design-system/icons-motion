import React, { useState } from 'react'
import * as icons from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'

const FormattingSection = () => {
  const [copyAnimating, setCopyAnimating] = useState(false)
  const [cropAnimating, setCropAnimating] = useState(false)
  const [cutAnimating, setCutAnimating] = useState(false)
  const [magicWandAnimating, setMagicWandAnimating] = useState(false)
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
            onMouseEnter={() => setCopyAnimating(true)}
            onMouseLeave={() => setCopyAnimating(false)}
          >
            <h3>Copy</h3>
            <icons.CopyMotion isAnimating={copyAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setCropAnimating(true)}
            onMouseLeave={() => setCropAnimating(false)}
          >
            <h3>Crop</h3>
            <icons.CropMotion isAnimating={cropAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setCutAnimating(true)}
            onMouseLeave={() => setCutAnimating(false)}
          >
            <h3>Cut</h3>
            <icons.CutMotion isAnimating={cutAnimating} size={32} />
          </li>
        <li
            className='icon-tile'
            onMouseEnter={() => setMagicWandAnimating(true)}
            onMouseLeave={() => setMagicWandAnimating(false)}
          >
            <h3>Magic wand</h3>
            <icons.MagicWandMotion isAnimating={magicWandAnimating} size={32} />
          </li>
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
