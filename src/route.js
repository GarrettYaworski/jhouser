import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Wizard from './components/Wizard'
import Dashboard from './components/Dashboard'
import Wizard2 from './components/Wizard2'
import Wizard3 from './components/Wizard3'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/wizard' component={Wizard}/>
        <Route path='/wizard2' component={Wizard2}/>
        <Route path='/wizard3' component={Wizard3}/>
    </Switch>
)