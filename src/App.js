import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import route from './route'
import store from './ducks/store'

export default class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header/>
            {route}
          </div>
        </Router>
      </Provider>
    );
  }
}

