import React from 'react'

export default class Clock2 extends React.Component {

    constructor() {
        super()
        this.state = { time: new Date().toLocaleTimeString() }
        this.changeTime = this.changeTime.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(this.changeTime, 1000)
        console.log("Mounted!")
    }

    changeTime() {
        this.setState({ time: new Date().toLocaleTimeString() })
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log("About to be unmounted!")
    }
    
    render() {
        return (
            <h1>{this.state.time}</h1>
        )
    }
}