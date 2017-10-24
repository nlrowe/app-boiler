import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './app'

ReactDOM.render(
    <AppContainer>
        <Router>
            <Route exact path="/home" component={App}/>
        </Router>
    </AppContainer>,
    document.querySelector('#app')
)


// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept()
}
