import React from 'react'

export default class Clock extends React.Component {

    constructor() {
        super()
        this.state = { time: new Date().toLocaleTimeString() }
        this.changeTime =  this.changeTime.bind(this);
        setInterval(this.changeTime, 1000)
    }

    changeTime() {
        this.setState({ time : new Date().toLocaleTimeString() })
    }

    render() {
        return (
            <h1>{this.state.time}</h1>
        )
    }
}