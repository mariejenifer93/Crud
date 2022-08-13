import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { emailValidator, passwordValidator } from './rgex';
import {useNavigate} from "react-router-dom";

function Login() {

  const initialValues = {
    email: '',
    password: ''
  }

  var test = 0;
  var tests = 0;

  const [commonvalue, setCommonValue] = useState(initialValues);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    validlogin();
   
  }

  const onchange = (e) => {
    const { name, value } = e.target;
    setCommonValue({ ...commonvalue, [name]: value });
  }

  const validlogin = () => {
    if(!commonvalue.email) {
      setEmailError('Email is required');
    } else if (!emailValidator(commonvalue.email)) {
      setEmailError('Please Enter Valid Email ID');
    } else {
      test = 1
      setEmailError('');      
    }

    if(!commonvalue.password){
      setPasswordError('Password is required');
    } else if (!passwordValidator(commonvalue.password)) {
      setPasswordError('password should have minimum 8 character with the combination of uppercase,lowsercase, numbers and specialcharaters');
    } else {
      tests = 1
      setPasswordError('');
    }

    if(test === 1 && tests === 1){
      navigate('/Crudcreate');
    }
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
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Log In</h2>
          <div className='mb-3'>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={commonvalue.email}
              onChange={onchange}
              variant="outlined"
              autoComplete='off'
              onFocus={(e) => { setEmailError('') }}
            />
            <div style={{ color: 'red', marginTop: '10px' }}>{emailError}</div>
          </div>
          <div className='mb-3'>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              value={commonvalue.password}
              onChange={onchange}
              variant="outlined"
              autoComplete='off'
              onFocus={(e) => { setPasswordError('') }}
            />
            <div style={{ color: 'red', marginTop: '10px' }}>{passwordError}</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" className='mt-4 mb-3' onClick={login}>Login</Button>
          </div>
        </div>
      </Box>
    </>
  )
}

export default Login