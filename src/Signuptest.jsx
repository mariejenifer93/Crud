import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import React, {Component,  useState, Fragment,useEffect, } from "react";
import { useLocation, useParams } from "react-router-dom";
import staticstyle from "./Form.module.css";
import  Home from './Home';
import './Home.css';
import classes from "./Form.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import {  Typography, Container, Paper,  Box, Grid, TextField,FormControlLabel, Checkbox,  FormControl, Button,  RadioGroup, Radio,  Select, MenuItem, InputLabel, Card} from "@mui/material";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [checkbox, setCheckbox] = useState('');


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
    const response =  await createUser(email, password);
      if(response){
        toast.success('User Added Successfully');    
        navigate('/lists')

       }
    } catch (e) {
      setError(e.message);
      toast.success('Invalid User');    

      console.log(e.message);
    }
  };

  return (
    <Fragment>
    <Container variant="outlined" >
      <Home/>
    <ToastContainer />
 <form onSubmit={handleSubmit}>
    <Paper className={staticstyle.papercolor}>
    <Box  px={3} py={2} className={classes.form}> <label className={staticstyle.title} variant="h5" margin="dense">
REGISTRATION FORM</label>
<Grid container spacing={1}> 

<Grid item xs={12} sm={12}textAlign="left" >
    <TextField InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}  
              onChange={(e) => setFname(e.target.value)}
                    color="secondary"
                    id="fname"
                    name="fname"
                    label="First Name"
                    placeholder="Type here..."
                  variant="standard"
                    fullWidth
                    margin="dense"
            value={fname}
            />
            </Grid>  

            <Grid item xs={12} sm={12}textAlign="left" >
     <TextField InputProps={{ style: { fontSize: 20} }}
              InputLabelProps={{ style: { fontSize: 20 } }}  className={staticstyle.textsize} 
              type="lname"
              name="lname"
              value={lname}
              placeholder="Last Name"
            id="lname"
            onChange={(e) => setLname(e.target.value)}
            label="Last Name"
            variant="standard"
            fullWidth
            margin="dense"
              />
              </Grid>
<Grid item xs={12} sm={12}textAlign="left">
         <TextField InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}  className={staticstyle.textsize} 
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            label="E-mail"
            variant="standard"
            fullWidth
            margin="dense"
            placeholder="Email"
            />
            </Grid>


            <Grid item xs={12} sm={12}textAlign="left">

<TextField InputProps={{ style: { fontSize: 20 } }}
      InputLabelProps={{ style: { fontSize: 20 } }}  className={staticstyle.textsize} 
            onChange={(e) => setPassword(e.target.value)}
            id="password"
                    name="password"
                    label="Password"
                    type="password"
                    variant="standard"
                    fullWidth
                    margin="dense" 
                    color="secondary" 
                    value={password}

          />
        

</Grid>


  <Grid item xs={12} sm={12}textAlign="left" sx={{ pr: 50 }}>
          <FormControl color="secondary">
          <label className={staticstyle.gender}>Gender</label>
          <RadioGroup
            row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="gender"
              id="gender"
              color="secondary"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            >
              <FormControlLabel
                value="female"
                control={<Radio color="secondary"  />}
                label={<Typography variant="body2"  style={{ fontSize: '1.5rem' }} color="textSecondary">Female</Typography>}
              />
              <FormControlLabel
             
                value="male"
                control={<Radio color="secondary"  />}
                label={<Typography variant="body2"  style={{ fontSize: '1.5rem' }} color="textSecondary">Male</Typography>}
              />
              <FormControlLabel
                value="other"
                control={<Radio color="secondary"  />}
                label={<Typography variant="body2"  style={{ fontSize: '1.5rem' }} color="textSecondary">Other</Typography>}
              />
            </RadioGroup>
          </FormControl>
   </Grid>   

    <Grid item xs={6} sm={6}  textAlign="left" >
        <label >Role</label>
          <FormControl fullWidth>
        
            <Select
              color="secondary"
              onChange={(e) => setRole(e.target.value)}
              value={role}
              labelId="demo-simple-select-label"
              id="role"
              name="role"
              label="Role"
              fullWidth
              margin="dense"
            >
              <MenuItem style={{ fontSize: '1.5rem' }} value="User">User</MenuItem>
              <MenuItem style={{ fontSize: '1.5rem' }} value="Admin">Admin</MenuItem>
            </Select>
          </FormControl>    
    </Grid>
      
    <Grid item xs={12} sm={12} textAlign="left">
          <FormControlLabel 
            control={
              <Checkbox 
                name="checkbox"
                id="checkbox"
                  color="secondary"
                  onChange={(e) => setCheckbox(e.target.value)}
                 
                value={checkbox}
              />
            }
            label={<Typography variant="body2"  style={{ fontSize: '1.5rem' }} color="textSecondary">Terms and Conditions.</Typography>}
          />
        
        </Grid>
        <Box mt={5}>
                <Button className={staticstyle.loginButton}  variant="contained" color="primary" type="submit">
                  Register
                </Button>
              </Box>
     
  
    </Grid>
    </Box> 
   
    </Paper> 
    </form>
    </Container>
    </Fragment>
  );
};

export default Signup;
