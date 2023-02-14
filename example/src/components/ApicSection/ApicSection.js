import React, { useState } from 'react'
import * as icons from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'

const ApicSection = () => {
  const [archiveAnimating, setArchiveAnimating] = useState(false)
  const [binocularsAnimating, setBinocularsAnimating] = useState(false)
  const [connectionSignalAnimating, setConnectionSignalAnimating] = useState(false)
  const [downloadAnimating, setDownloadAnimating] = useState(false)
  const [editAnimating, setEditAnimating] = useState(false)
  const [eventsAnimating, setEventsAnimating] = useState(false)
  const [globeAnimating, setGlobeAnimating] = useState(false)
  const [gridAnimating, setGridAnimating] = useState(false)
  const [settingsAnimating, setSettingsAnimating] = useState(false)

	return (
		<section className="icon-section">  
      <div className='bx--grid'>
        <div className='bx--row'>
          <h2>API Connect</h2>
        </div>
        <ul className='bx--row icon-tiles-grid'>
          <li
            className='icon-tile'
            onMouseEnter={() => setArchiveAnimating(true)}
            onMouseLeave={() => setArchiveAnimating(false)}
          >
          <h3>Archive</h3>
          <icons.ArchiveMotion 
            isAnimating={archiveAnimating} 
            size={32} />
          </li>         
          <li
            className='icon-tile'
            onMouseEnter={() => setBinocularsAnimating(true)}
            onMouseLeave={() => setBinocularsAnimating(false)}
          >
          <h3>Binoculars</h3>
            <icons.BinocularsMotion 
              isAnimating={binocularsAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setConnectionSignalAnimating(true)}
            onMouseLeave={() => setConnectionSignalAnimating(false)}
          >
          <h3>Connection signal</h3>
            <icons.ConnectionSignalMotion 
              isAnimating={connectionSignalAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setDownloadAnimating(true)}
            onMouseLeave={() => setDownloadAnimating(false)}
          >
          <h3>Download</h3>
            <icons.DownloadMotion 
              isAnimating={downloadAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setEditAnimating(true)}
            onMouseLeave={() => setEditAnimating(false)}
          >
          <h3>Edit</h3>
            <icons.EditMotion 
              isAnimating={editAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setEventsAnimating(true)}
            onMouseLeave={() => setEventsAnimating(false)}
          >
          <h3>Events</h3>
            <icons.EventsMotion 
              isAnimating={eventsAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setGlobeAnimating(true)}
            onMouseLeave={() => setGlobeAnimating(false)}
          >
          <h3>Globe</h3>
            <icons.GlobeMotion 
              isAnimating={globeAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setGridAnimating(true)}
            onMouseLeave={() => setGridAnimating(false)}
          >
          <h3>Grid</h3>
          <icons.GridMotion 
            isAnimating={gridAnimating} 
            size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setSettingsAnimating(true)}
            onMouseLeave={() => setSettingsAnimating(false)}
          >
          <h3>Settings</h3>
          <icons.SettingsMotion 
            isAnimating={settingsAnimating} 
            size={32} />
          </li>       
        </ul>
      </div>
    </section>
	 )
}

export default ApicSection
