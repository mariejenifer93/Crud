import React, {Component} from 'react';
// import {useState} from "react";
class Crud extends Component{    
    render(){
        // const [name,setName] = useState("");
        // const [id,setId] = useState("");
        // const [role,setRole] = useState("");
        return(
           <div className='container employee'>
               <h1 style={{textAlign:"center"}}>Employee Detials</h1>
               <div className='form-group'>
                   <label>Employee Number</label>
                   <input type="text" className="form-control" placeholder='Enter Employee Number'/>
               </div>
               <div className='form-group'>
                   <label>Employee Name</label>
                   <input type="text" className="form-control" placeholder='Enter Employee Name'/>
               </div>
               <div className='form-group'>
                   <label>Employee Age</label>
                   <input type="text" className="form-control" placeholder='Enter Employee Age'/>
               </div>
               <div style={{display:"flex",justifyContent:"center"}}>
                   <button className='mr-4'>Add</button>
                   <button>Delete All</button>
               </div>
           </div>
        )        
    }
}
export default Crud;