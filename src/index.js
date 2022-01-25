import React, { Component } from 'react'
import ReactDom from 'react-dom'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './index.css'
import AppContent from './AppContent'

class App extends Component {

  render() {
    const myProps = {
      title: "My app",
      subject: "My subject",
      fav_color: "red",
    }

    return (
      <div className="greeting">
        <AppHeader {...myProps} />
        <AppContent />
        <AppFooter />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))