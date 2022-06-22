import React from 'react'

export default function ShowDate() {

    function showDateTime() {
        alert(new Date())
    }

    return (
        <>
            <button onClick={showDateTime}>Show Date and Time</button>
        </>
    )
}
