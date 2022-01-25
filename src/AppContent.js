import React, { Component } from "react";

export default class AppContent extends Component {

    constructor(props) {
        super(props)
        this.listRef = React.createRef()
    }

    anotherFunction = () => {
        console.log("another function")
    }

    leftParagraph = () => {
        console.log("left the paragraph")
    }

    // function
    fetchList = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await res.json()
        console.log(json)

        // let posts = document.getElementById("post-list")
        const posts = this.listRef.current
        json.forEach((obj) => {
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(obj.title))
            posts.appendChild(li)
        })

        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => res.json())
        //     .then(json => {
        //         console.log(json)
        //     })
    }

    render(){
        return (
            <div>
                <p>This is the content</p>
                
                <br/>

                <hr />

                <p onMouseEnter={this.anotherFunction} onMouseLeave={this.leftParagraph}>This is some text</p>

                <button onClick={this.fetchList} className="btn btn-primary">Fetch Data</button>

                <hr />

                <ul id="post-list" ref={this.listRef}></ul>
            </div>
        )
    }
}