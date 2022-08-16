import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Form.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


const Forms = (props) => {
  const navigate = useNavigate();

  const formItems={
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    checkbox: "",
  };

  const [formIsValid, setFormIsValid] = useState(formItems);

  const [inputValues, setInputValues] = useState(formItems);

  const[isSubmit,setIsSubmit]=useState(false);

  const onInputChangeHandler = (event) => {
    let value = event.target.value;
    if(event.target.id=='checkbox'){
      if(event.target.checked==true){
        value='1';
      }else{
        value='';
      }
    }
    console.log(value);
    setInputValues({
      ...inputValues,
      [event.target.id]: value
    });
    setFormIsValid({
      ...formIsValid,
      [event.target.id]:''
    })
  };

  const saveFormHandler=(event)=>{
    event.preventDefault();
    setFormIsValid(validate(inputValues));
    setIsSubmit(true);
  }

  useEffect(()=>{
    if(Object.keys(formIsValid).length===0 && isSubmit){
      var existingEntries = JSON.parse(localStorage.getItem("lists"));
      if(existingEntries == null) existingEntries = [];
      var entry = inputValues;
      existingEntries.push(entry);
      localStorage.setItem("lists", JSON.stringify(existingEntries));
      navigate("/lists");
    }
  },[formIsValid])

  const validate = (event) => {
    const errors={};
      if(event.firstName.length===0){
        errors.firstName="First Name is Required";
      }
      if(event.lastName.length===0){
       errors.lastName="Last Name is Required";
      }
      if(event.email.length===0){
       errors.email="E-mail is Required";
      }
      else if(!event.email.includes("@") || !event.email.includes(".")){
        errors.email="Invalid email Format!"
      }
      if(event.password.length === 0){
        errors.password="Password is Required";
      }
      else if(event.password.length < 6){
        errors.password="Password should be at least 6 Charecters"
      }
      if(event.checkbox.length === 0){
        errors.checkbox="Checkbox is Required";
      }
      return errors;
  };

  return (
    <div className={classes.card}>
      <Form className="col-6" onSubmit={saveFormHandler}>
        <fieldset >
        <legend>Login Form</legend>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="firstName">First Name</Form.Label>
            <Form.Control onChange={onInputChangeHandler}
            type="text"
            id="firstName"
            value={inputValues.firstName}
            placeholder="Enter First Name" />
          </Form.Group>
          {formIsValid.firstName!=='' && (
            <p className="text-danger">{formIsValid.firstName}</p>
          )}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="lastName">Last Name</Form.Label>
            <Form.Control onChange={onInputChangeHandler}
            type="text"
            id="lastName"
            value={inputValues.lastName}
            placeholder="Enter Last Name" />
          </Form.Group>
          {formIsValid.lastName!=='' && (
            <p className="text-danger">{formIsValid.lastName}</p>
          )}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">E-mail</Form.Label>
            <Form.Control onChange={onInputChangeHandler}
            type="text"
            id="email"
            value={inputValues.email}
            placeholder="example@xyz.com" />
          </Form.Group>
          {formIsValid.email!=='' && (
            <p className="text-danger">{formIsValid.email}</p>
          )}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control onChange={onInputChangeHandler}
            type="password"
            id="password"
            value={inputValues.password}
            placeholder="******" />
          </Form.Group>
          {formIsValid.password!=='' && (
            <p className="text-danger">{formIsValid.password}</p>
          )}
          <Form.Group className="mb-3">
            <Form.Check onChange={onInputChangeHandler}
            type="checkbox"
            id="checkbox"
            label="Terms and conditions."
            value='1'/>
          </Form.Group>
          {formIsValid.checkbox!=='' && (
            <p className="text-danger">{formIsValid.checkbox}</p>
          )}
          <Button type="submit">Submit</Button>
        </fieldset>
      </Form>
    </div>
  );
};

export default Forms;
