import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CollectionPage from './pages/CollectionPage'
import TriggerDemoPage from './pages/TriggerDemoPage'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={CollectionPage} />
      <Route path='/collection' component={CollectionPage} />
      <Route path='/trigger-demo' component={TriggerDemoPage} />
    </Switch>
  )
}

export default App
