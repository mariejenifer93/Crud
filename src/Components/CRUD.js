import React, { useState } from "react";
//URL
import { API_URL } from "../Constants/URL";
// Rgex 
import { passwordValidator } from "../rgex";
// Textfield 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//axios
import axios from "axios";

import {useNavigate} from "react-router-dom";


function Crudcreate() {

    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
    const [phone, setphone] = useState("");
    const navigate = useNavigate();

    const [userNameErr, setuserNameErr] = useState("");
    const [passwordErr, setpasswordErr] = useState("");
    const [phoneErr, setphoneErr] = useState("");

    const savefield = (e) => {
        e.preventDefault();
        validation();
    }

    const validation = async () => {
        if (userName) {
            setuserNameErr('');
        } else {
            setuserNameErr('Name Field is required');
        }
        if (!passwordValidator(password)) {
            setpasswordErr('password should have minimum 8 character with the combination of uppercase,lowsercase, numbers and specialcharaters')
        } else {
            setpasswordErr('')
        }
        if (phone) {
            setphoneErr('');
        } else {
            setphoneErr('Phone Number Field is required');
        }
        
        if(userName !== '' && password !=='' && phone !==''){
            await axios.post(API_URL,{
                userName,
                password,
                phone
            })
            navigate('/Read')
        }       
        
    }
    const funPhone = (e) =>{
        const re = /^[0-9\b]+$/;       
        if (re.test(e.target.value)){
            setphone(e.target.value);  
        }        
    }

    return (
        <div className="align-items-center container d-flex justify-content-center" style={{height:'100vh'}}>            
            <div className="modal-body">
                <div className="mb-4">
                    <TextField
                        id="UserName" name="UserName" label="UserName" type="text" fullWidth placeholder="Enter your name"
                        InputLabelProps={{ shrink: true, }}
                        variant="standard" autoComplete="off" className="inputfield" value={userName}
                        onChange={(e) => { setuserName(e.target.value) }}
                        onFocus={(e) => { setuserNameErr('') }}
                        inputProps={{ maxLength: 12 }}
                    />
                    <div style={{ color: 'red', marginTop: '10px' }}>{userNameErr}</div>
                </div>
                <div className="mb-4">
                    <TextField
                        id="password" name="password" label="Password" type="text" fullWidth placeholder="Enter your Password"
                        InputLabelProps={{ shrink: true, }}
                        variant="standard" autoComplete="off" className="inputfield" value={password}
                        onChange={(e) => { setpassword(e.target.value) }}
                        onFocus={(e) => { setpasswordErr('') }}
                    />
                    <div style={{ color: 'red', marginTop: '10px' }}>{passwordErr}</div>
                </div>
                <div className="mb-4">
                    <TextField
                        id="phone" name="phone" label="Phone Number" type="tel" fullWidth placeholder="Enter Your Phone Number"
                        InputLabelProps={{ shrink: true, }}
                        variant="standard" autoComplete="off" className="inputfield" value={phone}
                        // onChange={(e) => { setphone(e.target.value) }}
                        onChange={funPhone}
                        onFocus={(e) => { setphoneErr('') }}
                        inputProps={{ maxLength: 12 }}
                    />
                    <div style={{ color: 'red', marginTop: '10px' }}>{phoneErr}</div>
                </div>
                <div className='text-center'>
                    <Button variant="contained" color="success" className='mt-3 mb-3' onClick={savefield}>Save</Button>
                </div>
            </div>            
        </div>
    )
}
export default Crudcreate;