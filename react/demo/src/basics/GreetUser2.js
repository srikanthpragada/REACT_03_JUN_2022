import React from 'react'

export default class GreetUser2 extends React.Component {

    constructor() {
        super()
        // Bind this with greet method 
        this.greet = this.greet.bind(this);
    }

    greet() {
        var username = document.getElementById("username").value
        alert("Hello " + username)
        console.log(this)
    }

    render() {
        return (
            <>
                What's your name : <input type="text" id="username" />
                <p />
                <button onClick={this.greet}>Greet</button>
            </>
        )
    }
}
