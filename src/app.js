import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import configureStore from './store/store'
import reducer from './store/reducer'

const store = configureStore(reducer)
import App from './view/App'

const render = Component => {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <BrowserRouter>
                    <Component />
                </BrowserRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}

render(App)

if(module.hot) {
    module.hot.accept('./view/App', () => {
        const NextApp = require('./view/App').default // eslint-disable-line
        render(NextApp)
    })
}