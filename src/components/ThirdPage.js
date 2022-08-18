import React, { useState } from 'react'
import TimePicker from 'react-time-picker'
import "./FrontPage.css"
function ThirdPage(props) {
  const [value,onChange]=useState('00:00')
  return (
    <div className="body">
        <h1 style={{color:"white"}}>{props.heading}</h1>
        <TimePicker onChange={onChange} value={value}/>
        <button className="button">Next</button>

    </div>
  )
}

export default ThirdPage