import React, { useEffect, useState } from "react";
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
//URL
import { API_URL } from "../Constants/URL";
//toast
import { ToastContainer, toast } from 'react-toastify';
// Textfield 
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
//icons
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Read() {
    const navigate = useNavigate();
    // read start 
    const [apiData, setAPIData] = useState([]);
    const callGetAPI = async () => {
        const resp = await axios.get(API_URL);
        setAPIData(resp.data);
    }
    useEffect(() => {
        callGetAPI();
    }, []);
    // read end 

    // delete start 
    const deleteUser = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        toast.error('Successful Delete', { autoClose: 3000 })
        callGetAPI();
    }
    // delete end 

    // update start     
    const editUser = ({ id, userName, password, phone }) => {
        navigate('/Update')
        localStorage.setItem('id', id)
        localStorage.setItem('userName', userName)
        localStorage.setItem('password', password)
        localStorage.setItem('phone', phone)
    }
    // update end 
    
    const viewclick = ({ id, userName, password, phone }) =>{
        navigate('/View');
        localStorage.setItem('id', id)
        localStorage.setItem('userName', userName)
        localStorage.setItem('password', password)
        localStorage.setItem('phone', phone)
    }

    return (
        <>
            <div className="flex-column container d-flex justify-content-center" style={{ height: '100vh' }}>
                <Button variant="contained" color="primary" className='mt-3 mb-3' style={{width:'150px'}} onClick={()=>{navigate('/Crudcreate')}}>Create</Button>
                <TableContainer className='CustomizedTables table-striped' component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{width:'200px'}} >UserName</TableCell>
                                <TableCell sx={{width:'200px'}} >Password</TableCell>
                                <TableCell sx={{width:'200px'}} >Phone Number</TableCell>
                                <TableCell sx={{width:'200px'}} >Action</TableCell>                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                apiData.map(data => (
                                    <TableRow key={data.id}>
                                        <TableCell>{data.userName}</TableCell>
                                        <TableCell>{data.password}</TableCell>
                                        <TableCell>{data.phone}</TableCell>
                                        <TableCell>
                                            <span className='mx-2'><EditIcon sx={{cursor:'pointer'}} onClick={() => editUser(data)} color="success"/></span>
                                            <span className='mx-2'><VisibilityIcon sx={{cursor:'pointer'}} color="primary" onClick={() => viewclick(data)}/></span>
                                            <span className='mx-2'><DeleteOutlineIcon sx={{cursor:'pointer'}} onClick={() => deleteUser(data.id)} color="error"/></span>                                                                                        
                                        </TableCell>                                        
                                    </TableRow>
                                ))}

                        </TableBody>
                    </Table>
                </TableContainer>                       
                <ToastContainer/>
            </div>
        </>

    )
}

export default Read;