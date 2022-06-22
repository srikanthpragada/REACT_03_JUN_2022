import React from 'react'

export default function Team(props) {
  return (
      <>
          <h2>{props.title}</h2>
          {
            props.players.map( p => <Player name={p.fullname} role={p.role} />)  
          }
      </>
  )
}

function Player(props) 
{
    return (
        <> 
            <h2>{props.name}</h2>   
            <h3>{props.role}</h3>
            <hr/>
        </>

    )
}