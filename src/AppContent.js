import React, { Component } from "react";

export default class AppContent extends Component {

    constructor(props) {
        super(props)
        this.state = {posts: []}
        this.handlePostChange = this.handlePostChange.bind(this)
    }

    handlePostChange(posts) {
        this.props.handlePostChange(posts)
    }

    fetchList = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await res.json()
        this.setState({posts: json})
        this.handlePostChange(json)
    }

    clickedItem = (x) => {
        console.log("clicked", x)
    }

    render(){
        return (
            <div>
                <button onClick={this.fetchList} className="btn btn-primary">Fetch Data</button>
                <br />
                <ul>
                    {this.state.posts.map(c => (
                        <li key={c.id}>
                            <a href="#!" onClick={() => this.clickedItem(c.id)}>
                                    {c.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <hr />
            </div>
        )
    }
}