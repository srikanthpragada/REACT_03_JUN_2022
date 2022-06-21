import React from 'react'

export default class Greet2 extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <h2>Hello {this.props.name.toUpperCase()}, you are {this.props.age} years old!!</h2>
    )
  }

}

