import React ,{useState} from 'react'
// import {useNavigate} from 'react-router-dom'

import "./FrontPage.css"
function FrontPage() {
    
    const [message,setMessage]=useState('');
    const handleChange=event=>{
        setMessage(event.target.value)
        console.log(event.target.value)
    }

    const PostData=async(e)=>{
    e.preventDefault();
    console.log(message)
    const res=await fetch("/",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name:message
          })
       })
       const data=await res.json();
       console.log(data)
       if(data.status ===400 ||!data){
         window.alert("Invalid Registration");
         console.log("Invalid Registration");
       }else{
         window.alert("Registration Successfull");
         console.log("Successfull Registration");
         
        
}
            
        
        
      }
  return (
    <div className="body">
        <h1 style={{color:"white"}}>Welcome to the Sleepy Wysa</h1>
        <form method="POST" id="register-form">
        <input type="text" className="input-element" id="message" placeholder='nickname' name="nickname" onChange={handleChange} value={message}/>
        
        <input type="submit" name="signup" id="signup" className="button" value="Next" onClick={PostData}/>
        </form>
    
    </div>
  )
}

export default FrontPage


