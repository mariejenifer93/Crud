import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
function View() {
    // view start 
        const [userName, setuserName] = useState("");
        const [password, setpassword] = useState("");
        const [phone, setphone] = useState("");
        const [ , setId] = useState('');

        useEffect(() => {
            setId(localStorage.getItem('id'))
            setuserName(localStorage.getItem('userName'))
            setpassword(localStorage.getItem('password'))
            setphone(localStorage.getItem('phone'))
        }, []);
    // view end
   
    return (
        <>
            <div className="flex-column container d-flex justify-content-center" style={{height:'100vh'}}> 
                <div className="mb-4">
                    <label>UserName</label>
                    <div>{userName}</div>
                </div>
                <div className="mb-4">
                    <label>Password</label>
                    <div>{password}</div>
                </div>
                <div className="mb-4">
                    <label>Phone</label>
                    <div>{phone}</div>
                </div>    
                <Button variant="contained" color="success" className='mt-3 mb-3' style={{width: '100px',margin: 'auto',}}>
                    <Link to='/Crudcreate' style={{color:'#000'}}>Save</Link>
                </Button>     
            </div>
        </>
    )
}

export default View