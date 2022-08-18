import React,{useState} from 'react'
import "./FrontPage.css"
function SecondPage() {
  const [message,setMessage]=useState('');
  const handleClick=event=>{
    setMessage(event.target.value)
    console.log(event.target.value)


  }
  return (
    <div className="body">
        <h1 style={{color:"white"}}>That's a great goal. How long have you been struggling with your sleep </h1>
        <button className='button-second-page ' style={{backgroundColor:"lightblue"}} onClick={handleClick} value="Less than 2 weeks">Less than 2 weeks</button>
        <button className='button-second-page ' style={{backgroundColor:"darkblue"}} onClick={handleClick} value="2 to 8 weeks">2 to 8 weeks</button>
        <button className='button-second-page ' style={{backgroundColor:"purple"}} onClick={handleClick} value="More than 8 weeks">More than 8 weeks</button>
    </div>
  )
}

export default SecondPage