import React from 'react'

export default function Greet(props) {
  console.log(props)
  return (
    <h2>Hello {props.name} </h2>
  )
}
