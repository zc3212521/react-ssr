import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './main/index'
import Page1 from './page1/index'

export default () => (
    <Switch>
        <Route path='/' component={Main} exact />
        <Route path='/page1' component={Page1} />
    </Switch>
)


