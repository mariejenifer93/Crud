import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { Button } from '@mui/material';
import {useFormik} from 'formik';
function Formik() {
    const validate = values =>{
        const errors = {};
        if(!values.name){
            errors.name = "Name is Required"
        }
        if(!values.email){
            errors.email = "Email is Required"
        }
        if(!values.password){
            errors.password = "password is Required"
        }
        return errors;
    }
    // const onSubmit = values =>{
    //     alert('test');
    // }
    const formik = useFormik({
        initialValues: {
            name:'',
            email:'',
            password:''
        },
        validate,
        // onSubmit
        onSubmit : values =>{
            alert('Successfully SignIn');
        }
    });    
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
                <form className='login-page container' onSubmit={formik.handleSubmit}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Formik Form</h2>
                    <div className='mb-3'>
                        <TextField
                            name="name"
                            id="name"
                            label="Name"
                            fullWidth
                            autoComplete='off'
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : ''}
                    </div>                    
                    <div className='mb-3'>
                        <TextField
                            name="email"
                            id="email"
                            label="Email"
                            fullWidth
                            autoComplete='off'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : ''}
                    </div>
                    <div className='mb-3'>
                        <TextField
                            name="password"
                            id="password"
                            label="Password"
                            fullWidth
                            autoComplete='off'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : ''}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        {/* <Button variant="contained" color="primary" className='mt-4 mb-3'>Sign Up</Button> */}
                        <input type="submit" value="Sign Up" className='mt-4 mb-3 input-submit'/>
                    </div>
                </form>
            </Box>
        </>
    )
}

export default Formik;