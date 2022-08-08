import React, { useEffect, useState } from "react";
// Textfield 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//axios
import axios from "axios";
import { useNavigate } from "react-router-dom";
//URL
import { API_URL } from "../Constants/URL";
//toast
import { ToastContainer, toast } from 'react-toastify';

function Update() {

    const navigate = useNavigate();

    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
    const [phone, setphone] = useState("");
    const [id, setId] = useState('');


    useEffect(() => {
        setId(localStorage.getItem('id'))
        setuserName(localStorage.getItem('userName'))
        setpassword(localStorage.getItem('password'))
        setphone(localStorage.getItem('phone'))
    }, []);

    const updatevalue = async () =>{        
        await axios.put(`${API_URL}/${id}` , {
            userName,
            password,
            phone
        })
        toast.success('Successful Update', { autoClose: 3000 })
        setTimeout(() => {
            navigate('/read')
        }, 4000);
        
    }

    return (
        <>
            <div className="align-items-center container d-flex justify-content-center" style={{ height: '100vh' }}>
                <div className="modal-body">
                    <div className="mb-4">
                        <TextField
                            id="UserName" name="UserName" label="UserName" type="text" fullWidth placeholder="Enter your name"
                            InputLabelProps={{ shrink: true, }}
                            variant="standard" autoComplete="off" className="inputfield" value={userName}
                            onChange={(e) => { setuserName(e.target.value) }}
                            inputProps={{ maxLength: 12 }}
                        />
                    </div>
                    <div className="mb-4">
                        <TextField
                            id="password" name="password" label="Password" type="text" fullWidth placeholder="Enter your Password"
                            InputLabelProps={{ shrink: true, }}
                            variant="standard" autoComplete="off" className="inputfield" value={password}
                            onChange={(e) => { setpassword(e.target.value) }}
                        />
                    </div>
                    <div className="mb-4">
                        <TextField
                            id="phone" name="phone" label="Phone Number" type="tel" fullWidth placeholder="Enter Your Phone Number"
                            InputLabelProps={{ shrink: true, }}
                            variant="standard" autoComplete="off" className="inputfield" value={phone}
                            onChange={(e) => { setphone(e.target.value) }}
                            inputProps={{ maxLength: 12 }}
                        />
                    </div>
                    <div className='text-center'>
                        <Button variant="contained" color="success" className='mt-3 mb-3' onClick={updatevalue}>Update</Button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Update;