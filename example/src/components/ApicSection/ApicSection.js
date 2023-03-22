import React from 'react'
import * as icons  from '@carbon/icons-motion'
import DemoTile from '../DemoTile'
import '@carbon/icons-motion/dist/index.css'

const ApicSection = () => {

	return (
		<section className="icon-section">
      <div className='bx--grid'>
        <ul className='bx--row icon-tiles-grid'>
          <DemoTile
            tileTitle="Archive" 
            icon={<icons.ArchiveMotion size={32}/>}
          />
          <DemoTile
            tileTitle="Binoculars" 
            icon={<icons.BinocularsMotion size={32}/>}
          /> 
          <DemoTile
            tileTitle="Connection signal" 
            icon={<icons.ConnectionSignalMotion size={32}/>}
          /> 
          <DemoTile
            tileTitle="Dashboard" 
            icon={<icons.DashboardMotion size={32}/>}
          /> 
          <DemoTile
            tileTitle="Download" 
            icon={<icons.DownloadMotion size={32}/>}
          /> 
          <DemoTile
            tileTitle="Edit" 
            icon={<icons.EditMotion size={32}/>}
          /> 
          <DemoTile
            tileTitle="Events" 
            icon={<icons.EventsMotion size={32}/>}
          /> 
          <DemoTile
            tileTitle="Globe" 
            icon={<icons.GlobeMotion size={32}/>}
          /> 
          <DemoTile
            tileTitle="Grid" 
            icon={<icons.GridMotion size={32}/>}
          /> 
          <DemoTile
            tileTitle="Settings" 
            icon={<icons.SettingsMotion size={32}/>}
          />
        </ul>
      </div>
    </section>
	 )

}

export default ApicSection
