import React, { useEffect, useState } from "react";
//URL
import { API_URL } from "./Constants/URL";
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
//axios
import axios from "axios";
//toast
import { ToastContainer, toast } from 'react-toastify';

function Crud() {

    // const [input, setInput] = useState({ username: '', password: '', phone: '' });

    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
    const [phone, setphone] = useState("");
    const [id, setId] = useState('');

    const [userNameErr, setuserNameErr] = useState("");
    const [passwordErr, setpasswordErr] = useState("");
    const [phoneErr, setphoneErr] = useState("");


    // const handvalue = (e) => {
    //     setInput({ ...input, [e.target.name]: e.target.value });
    // }

    const [apiData, setAPIData] = useState([]);

    const callGetAPI = async () => {
        const resp = await axios.get(API_URL);
        setAPIData(resp.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        toast.error('Successful Delete', { autoClose: 3000 })
        callGetAPI();
    }

    const updateUser = ({ id, userName, password, phone }) => {
        localStorage.setItem('id', id)
        localStorage.setItem('userName', userName)
        localStorage.setItem('password', password)
        localStorage.setItem('phone', phone)
    }    

    useEffect(() => {
        callGetAPI();
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
    }


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
        // const cond1 = /(?=.*?[A-Z])/;
        // const cond2 = /(?=.*?[a-z])/;
        // const cond3 = /(?=.*?[0-9])/;
        // const cond4 = /(?=.*?[#?!@$%^&*-])/;
        // if (!password) {
        //     setpasswordErr('Password Field is required');
        // } else if (password.length < 4) {
        //     setpasswordErr('Too short');
        // } else if (password.length >= 10) {
        //     setpasswordErr('Too long');
        // } else if (!password.match(cond1)) {
        //     setpasswordErr('Uppercase Missing');
        // } else if (!password.match(cond2)) {
        //     setpasswordErr('Lowercase Missing');
        // } else if (!password.match(cond3)) {
        //     setpasswordErr('Number Missing');
        // } else if (!password.match(cond4)) {
        //     setpasswordErr('Special character Missing');
        // } else {
        //     setpasswordErr('');
        // }

        if (phone) {
            setphoneErr('');
        } else {
            setphoneErr('Phone Number Field is required');
        }
        if (userName !== "" && password !== "" && phone !== "") {
            await axios.post(API_URL, {
                userName,
                password,
                phone
            })
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
                                    onChange={(e) => { setphone(e.target.value) }}
                                    onFocus={(e) => { setphoneErr('') }}
                                    inputProps={{ maxLength: 12 }}
                                />
                                <div style={{ color: 'red', marginTop: '10px' }}>{phoneErr}</div>
                            </div>
                            <div className='text-center'>
                                <Button variant="contained" color="success" className='mt-3 mb-3' onClick={savefield}>Save</Button>
                                <Button variant="contained" color="info" className='mt-3 mb-3' onClick={updatevalue}>Update</Button>
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
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Action</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            apiData.map(data => (
                                <TableRow key={data.id}>
                                    <TableCell>{data.userName}</TableCell>
                                    <TableCell>{data.password}</TableCell>
                                    <TableCell>{data.phone}</TableCell>
                                    <TableCell><Button data-toggle="modal" data-target="#myModal" onClick={() => updateUser(data)}>Edit</Button></TableCell>
                                    <TableCell><Button onClick={() => deleteUser(data.id)}>Delete</Button></TableCell>                                    
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <ToastContainer />
        </div>
    )
}

export default Crud;