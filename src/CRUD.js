import React, { useState } from "react";
// Rgex 
import { passwordValidator } from "./rgex";
// Textfield 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// Table 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Crud() {

    const [input, setInput] = useState({ username: '', password: '', phone: '' });
    const [userNameErr, setuserNameErr] = useState("");
    const [passwordErr, setpasswordErr] = useState("");
    const [phoneErr, setphoneErr] = useState("");

    const handvalue = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const savefield = (e) => {
        e.preventDefault();
        validation();
    }

    const validation = () => {
        if (input.username) {
            setuserNameErr('');            
        } else {
            setuserNameErr('Name Field is required');           
        }
        // if(!passwordValidator(input.password)){
        //     setpasswordErr('password should have minimum 8 character with the combination of uppercase,lowsercase, numbers and specialcharaters')
        // } else{
        //     setpasswordErr('')
        // }  
        const cond1 = /(?=.*?[A-Z])/;
        const cond2 = /(?=.*?[a-z])/;
        const cond3 = /(?=.*?[0-9])/;
        const cond4 = /(?=.*?[#?!@$%^&*-])/;
        if(!(input.password)){
            setpasswordErr('Password Field is required');  
        } else if((input.password).length < 4){
            setpasswordErr('Too short');  
        }else if((input.password).length >= 10){
            setpasswordErr('Too long');
        }else if(!(input.password).match(cond1)){
            setpasswordErr('Uppercase Missing');
        }else if(!(input.password).match(cond2)){
            setpasswordErr('Lowercase Missing');
        }else if(!(input.password).match(cond3)){
            setpasswordErr('Number Missing');
        }else if(!(input.password).match(cond4)){
            setpasswordErr('Special character Missing');
        }else{
            setpasswordErr('');
        }       

        if (input.phone) {           
            setphoneErr('');
        } else {           
            setphoneErr('Phone Number Field is required');
        }
    }

    return (
        <div className="container">
            <Button variant="contained" className='mt-5 mb-5' data-toggle="modal" data-target="#myModal">Create</Button>
            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Create</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-4">
                                <TextField
                                    id="username"
                                    name="username"
                                    label="UserName"
                                    type="text"
                                    fullWidth
                                    placeholder="Enter your name"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="standard"
                                    className="inputfield"
                                    onChange={handvalue}
                                    onFocus = {(e)=>{setuserNameErr('')}}
                                />
                                <div style={{ color: 'red', marginTop: '10px' }}>{userNameErr}</div>
                            </div>
                            <div className="mb-4">
                                <TextField
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="text"
                                    fullWidth
                                    placeholder="Enter your Password"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="standard"
                                    className="inputfield"
                                    onChange={handvalue}
                                    onFocus = {(e)=>{setpasswordErr('')}}
                                />
                                <div style={{ color: 'red', marginTop: '10px' }}>{passwordErr}</div>
                            </div>
                            <div className="mb-4">
                                <TextField
                                    id="phone"
                                    name="phone"
                                    label="Phone Number"
                                    type="number"
                                    fullWidth
                                    placeholder="Enter Your Phone Number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="standard"
                                    className="inputfield"
                                    onChange={handvalue}
                                    onFocus = {(e)=>{setphoneErr('')}}
                                />
                                <div style={{ color: 'red', marginTop: '10px' }}>{phoneErr}</div>
                            </div>
                            <div className='text-center'>
                                <Button variant="contained" color="success" className='mt-3 mb-3' onClick={savefield}>Save</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TableContainer className='CustomizedTables table-striped' component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>UserName</TableCell>
                            <TableCell>Password</TableCell>
                            <TableCell>Phone NUmber</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>3</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>3</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>3</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Crud;