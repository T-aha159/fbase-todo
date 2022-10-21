import React, { useState } from 'react'
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { SignupUser } from '../firebase/firebasemethod';
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUsername] = useState("")
    const [number, setNumber] = useState("")
    let navigate = useNavigate();


    let signUp = () => {
        SignupUser({
            userName,
            email,
            password,
            number
        }).then((success)=>{
            console.log(success)
            navigate('/home')
        }).catch((error)=>{
            console.log(error)
            alert(error)
        })
    }

    let clickEv = () =>{
      navigate('/login')
    }

   


  return (
   <>
   <div className='container'>
   <div className='main'>
    <h1>Sign Up </h1>
    <Box>
   <Box sx={{width:'100%'}}>
          <TextField
          className='center'
            label="Username"
            onChange={(e)=>setUsername(e.target.value)}
            variant="standard"
            sx={{width:'70%'}}
          />
        </Box>
   <Box>
          <TextField
            label="Email"
            onChange={(e)=>setEmail(e.target.value)}
            type='email'
            variant="standard"
            sx={{width:'70%'}}
          />
        </Box>
   <Box>
          <TextField
            label="Password"
            onChange={(e)=>setPassword(e.target.value)}
            type='password'
            variant="standard"
            size='70'
            sx={{width:'70%'}}
          />
        </Box>
   <Box>
          <TextField
            label="Number"
            onChange={(e)=>setNumber(e.target.value)}
            type='number'
            variant="standard"
            sx={{width:'70%'}}
          />
        </Box>
        </Box>
        <button onClick={signUp}>Sign Up</button>
        <p>Already a user? <span onClick={clickEv}>LOGIN</span></p>
   </div>
   </div>
   </>
  )
}

export default Signup