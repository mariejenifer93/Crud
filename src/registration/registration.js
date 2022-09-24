import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import { emailValidator , passwordValidator } from '../rgex';
import { API_SIGH } from '../Constants/URL';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Registration() {

  const navigate = useNavigate();

  const inital = {
    name:'',
    email:'',
    password:''
  }

  const [valuecommon , setValueCommon] = useState(inital);
  const [nameError , setNameError] = useState(false);
  const [emailError , setEmailError] = useState(false);
  const [passwordError , setPasswordError] = useState('');
  const [validError, setValidError]= useState(false);
  const [pvalidError, setPvalidError]= useState(false);



  onchange = (e) =>{
    const {name,value} = e.target;
    setValueCommon({...valuecommon , [name]:value});
  }

  const sigup = (e) =>{
    e.preventDefault();
    regvalid();    
  }

  const regvalid = async () =>{
    if(valuecommon.name === ''){
        setNameError(true)
    }else{
      setNameError(false)
    }  
    if(valuecommon.email === ''){
      setEmailError(true)
    }else if(!emailValidator(valuecommon.email)){
      setValidError(true)
    }else{
      setEmailError(false)
      setValidError(false)
    } 
    if(valuecommon.password === ''){
      setPasswordError(true)
    }else if(!passwordValidator(valuecommon.password)){
      setPvalidError(true)
    }else{
      setPasswordError(false)
      setPvalidError(false)
    } 

    // await axios.post(API_SIGH,{
    //   valuecommon.email,
    //   valuecommon.password,
    // })
    // navigate('/')
  }



  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div className='login-page container'>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Registration Form</h2>
          <h5 style={{ textAlign: 'center', marginBottom: '3rem' }}>Already have an account? <Link to="/">Login</Link></h5>
          <div className='mb-3'>
            <TextField
              name="name"
              id="name"
              label="Name"
              fullWidth
              autoComplete='off'
              value={valuecommon.name}  
              onChange={onchange}
              onFocus={(e)=>{setNameError(false)}}            
            /> 
            {nameError ? <div style={{color:'red',marginTop:'0.5rem'}}>Name is required</div> : ''}
          </div>
          <div className='mb-3'>
            <TextField
              name="email"
              id="email"
              label="Email"
              fullWidth
              autoComplete='off'
              value={valuecommon.email}  
              onChange={onchange}   
              onFocus={(e)=>{setEmailError(false)}}         
            />
            {emailError ? <div style={{color:'red',marginTop:'0.5rem'}}>Email is required</div> : ''}
            {validError ? <div style={{color:'red',marginTop:'0.5rem'}}>Please Enter Valid Email ID</div> : ''}
          </div>
          <div className='mb-3'>
            <TextField
              name="password"
              id="password"
              label="Password"
              fullWidth
              autoComplete='off'
              value={valuecommon.password}
              onChange={onchange} 
              onFocus={(e)=>{setPasswordError(false)}}
            />
            {passwordError ? <div style={{color:'red',marginTop:'0.5rem'}}>Password is required</div> : ''}
            {pvalidError ? <div style={{color:'red',marginTop:'0.5rem'}}>password should have minimum 8 character with the combination of uppercase,lowsercase, numbers and specialcharaters</div> : ''}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" className='mt-4 mb-3' onClick={sigup}>Sign Up</Button>
          </div>
        </div>
      </Box>
    </>
  )
}

export default Registration