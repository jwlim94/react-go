import React, { Component } from 'react'
import ReactDom from 'react-dom'
import AppFooter from './AppFooter'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './index.css'
import AppContent from './AppContent'

class App extends Component {

  render() {
    return (
      <div>
        <div className="greeting">
          <h1>Hello world!</h1>
          <AppContent />
        </div>
        <AppFooter />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))