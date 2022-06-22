import React, { useState } from 'react'

export default function Names() {
    var [names, setNames] = useState([])

    function addName() {
        var name = document.getElementById("fullname").value 
        setNames( [...names, name])
    }
    function deleteName(idx)
    {
        var newNames = names.filter((n, i) => idx !== i)
        setNames(newNames)
    }

    return (
        <>
            <h2>Names</h2>
            Fullname : <input type="text" id="fullname" />
            <button onClick={addName}>Add</button>
            <p></p>
            <ul>
                {
                    names.map((n, idx) =>
                        <li>{n} &nbsp; <button onClick={() => deleteName(idx)}>Delete</button></li>)
               }
            </ul>
        </>
    )
}
