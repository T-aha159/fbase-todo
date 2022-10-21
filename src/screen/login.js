import React, { useState } from 'react'
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { loginUser } from '../firebase/firebasemethod';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()


    let login = ()=>{
        loginUser({email,password}).then((res)=>{
            console.log(res)
            navigate('/home')

        }).catch((err)=>{
            console.log(err)
            alert(err)
        })
    }
    let clickEv = () =>{
      navigate('/')
    }

  return (
    <>
     <div className='container'>
   <div className='main'>
    <h1>Login </h1>
    <Box sx={{width:'100%'}}>
  
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
  
        </Box>
        <button onClick={login}>login</button>
        <p>Need a member <span onClick={clickEv}>SIGNUP</span></p>
   </div>
   </div>
    </>
  )
}

export default Login