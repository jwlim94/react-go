import React, { Component } from 'react'
import ReactDom from 'react-dom'
import AppHeader from './AppHeader'
import AppContent from './AppContent'
// import AppFooterFunctionalComponent from './AppFooterFunctionalComponent'
import AppFooter from './AppFooter'

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
        <AppContent posts={this.state.posts} handlePostChange={this.handlePostChange}/>
        <AppFooter />
        {/* <AppFooterFunctionalComponent /> */}
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))