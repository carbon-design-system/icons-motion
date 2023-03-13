import React from 'react'
import ApicSection from '../../components/ApicSection'
import '../../app.scss'

const ApicDemoPage = () => {
  return (
    <div className='bx--grid'>
      <div className='bx--row'>
        <div className='header'>
          <h1>API Connect Demo Page</h1>
        </div>
      </div>
      <ApicSection></ApicSection>
    </div>
  )
}

export default ApicDemoPage
