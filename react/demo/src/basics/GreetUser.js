import React from 'react'

export default function GreetUser() {

    function greet() {
        var username = document.getElementById("username").value 
        alert("Hello " + username )
    }

    return (
        <>
            What's your name : <input type="text" id="username" />
            <p/>
            <button onClick={greet}>Greet</button>
        </>
    )
}
