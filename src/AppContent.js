import React, { Component } from "react";

export default class AppContent extends Component {

    state = {posts: []}

    constructor(props) {
        super(props)
        this.listRef = React.createRef()
    }

    // function
    fetchList = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await res.json()
        this.setState({posts: json})
    }

    clickedItem = (x) => {
        console.log("clicked", x)
    }

    render(){
        return (
            <div>
                <p>This is the content</p>
                
                <br/>

                <hr />

                <p>This is some text</p>

                <button onClick={this.fetchList} className="btn btn-primary">Fetch Data</button>

                <hr />

               <ul>
                   {this.state.posts.map(c => (
                       <li key={c.id}>
                           <a href="#!" onClick={() => this.clickedItem(c.id)}>
                                {c.title}
                           </a>
                       </li>
                   ))}
               </ul>
            </div>
        )
    }
}