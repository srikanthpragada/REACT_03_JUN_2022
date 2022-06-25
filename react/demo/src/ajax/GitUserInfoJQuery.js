import React, { useState } from 'react'
import $ from 'jquery'

export default function GitUserInfoJQuery() {
    const userid = React.createRef()
    const [data, setData] = useState({})
    const [message, setMessage] = useState('')
    
    function getInfo() {
        setMessage('')
        setData({})
        $.get(
            {
                url: `https://api.github.com/users/${userid.current.value}`,
                success: function (resp) {
                    setData(resp)
                },
                error: function (error) {
                    setMessage("Sorry! Invalid userid")
                    //console.log(error.responseJSON.message)
                }
            }
        );
    }
    return (
        <>
            <h1>Github User Info</h1>
            <input type="text" ref={userid} defaultValue="srikanthpragada" />
            <button onClick={getInfo}>Get Info</button> 
            <span>{message}</span>
            <p></p>
            {data.name}
            <p></p>
            {data.location}
        </>
    )
}
