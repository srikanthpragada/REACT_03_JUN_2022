import React, { Component } from 'react'

// Class Component 
export default class Course extends Component {
    constructor() {
        super()
        this.name = "React"
        this.trainer = "Srikanth Pragada"
        this.topics = ["Properties", "Forms", "Ajax", "Routing"]
    }
    render() {
        return (
            <>
                <h2>Course Title : {this.name}</h2>
                <h3>Trainer : {this.trainer}</h3>
                <h4>Topics</h4>
                <ul>
                    {this.topics.map(t => <li>{t}</li>)}
                </ul>
            </>
        )
    }
}
