import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export default function JQueryDemo() {
    const [now, setNow] = useState('')

    function getDateTime() {
        $.getJSON('http://worldclockapi.com/api/json/utc/now',
                  (data) => setNow(data.currentDateTime) )
    }


    useEffect(getDateTime, []);

    return (
        <>
            <h2>Fetch Demo</h2>
            <h1>{now}</h1>
        </>
    )
}
