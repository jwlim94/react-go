import React, { Component } from 'react'
import ReactDom from 'react-dom'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import AppContent from './AppContent'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.handlePostChange = this.handlePostChange.bind(this)
    this.state = {posts: []}
  }

  handlePostChange(posts) {
    this.setState({posts: posts})
  }

  render() {
    return (
      <div>
        <AppHeader title='my app' posts={this.state.posts} handlePostChange={this.handlePostChange} />
        <AppContent handlePostChange={this.handlePostChange}/>
        <AppFooter />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))