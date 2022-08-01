import React, { Component } from 'react'
import { passwordValidator } from './rgex';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class signUpForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            pass: '',
            phon: '',
            nameError: false,
            passWordError: false,
            phoneError: false,
            errors: '',
            succMsg: false,
            confirmpass: '',
            confirmError: '',
            matchError: false,
            toastmsg: ''

        }
    }

    formValidation = () => {
        let testname = this.state.username;
        let testpassword = this.state.pass;
        let testphone = this.state.phon;
        let testconfirm = this.state.confirmpass;

        if (testname) {
            this.setState({ nameError: false });
        } else {
            this.setState({ nameError: true });
        }

        if (!passwordValidator(testpassword)) {
            this.setState({ passWordError: true })
        } else {
            this.setState({ passWordError: false })
        }

        if (testphone) {
            this.setState({ phoneError: false });
        } else {
            this.setState({ phoneError: true });
        }

        if (testconfirm === "") {
            this.setState({ confirmError: true });
            this.setState({ matchError: false });
        } else if (testpassword !== testconfirm) {
            this.setState({ confirmError: false });
            this.setState({ matchError: true });
        }

        if (testname !== '' && testpassword !== '' && testphone !== '' && testconfirm !== '') {
            this.setState({ toastmsg: toast.success('successful', { autoClose: 3000 }) });
        } else {
            this.setState({ toastmsg: '' });
        }
    }
    submitValue = (event) => {
        event.preventDefault();
        this.formValidation();
    }
    handValue = (e) => {
        let n = e.target.name;
        let v = e.target.value;
        this.setState({
            [n]: v
        })
    }
    render() {
        return (
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>SignUp Page</h1>
                <form autoComplete='off'>
                    <div className="form-group">
                        <label htmlFor="uname">UserName</label>
                        <input type="text" maxLength={10} value={this.state.username} onChange={this.handValue} onFocus={(e) => (this.setState({ nameError: false }))} className="form-control" name="username" id="uname" placeholder="Enter your name" />
                        {this.state.nameError ? <span style={{ color: "red" }}>Name is required</span> : ''}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" value={this.state.pass} onChange={this.handValue} onFocus={(e) => (this.setState({ passWordError: false }))} className="form-control" name="pass" id="password" placeholder="Enter your Password" />
                        {this.state.passWordError ? <span style={{ color: "red" }}>password should have minimum 8 character with the combination of uppercase,lowsercase, numbers and specialcharaters</span> : ''}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="confirmpassword">Confirm Password</label>
                        <input type="text" value={this.state.confirmpass} onChange={this.handValue} onFocus={(e) => (this.setState({ confirmError: false, matchError: false }))} className="form-control" name="confirmpass" id="confirmpassword" placeholder="Enter your Confirm Password" />
                        {this.state.confirmError ? <span style={{ color: "red" }}>Confirm Password is required</span> : ''}
                        {this.state.matchError ? <span style={{ color: "red" }}>Passwords don't match</span> : ''}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" maxLength={12} value={this.state.phon} onChange={this.handValue} onFocus={(e) => { this.setState({ phoneError: false }) }} className='form-control' name="phon" id="phone" placeholder='Enter Your Phone Number' />
                        {this.state.phoneError ? <span style={{ color: "red" }}>phone number is required</span> : ''}
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn btn-primary mr-3 " onClick={this.submitValue}>Submit</button>
                        <button type="button" className='btn btn-primary' data-toggle="modal" data-target="#myModal">Create</button>
                    </div>
                    <ToastContainer />
                </form>

                <div className="modal fade" id="myModal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Create</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="uname">UserName</label>
                                    <input type="text" maxLength={10} className="form-control" name="username" id="uname" placeholder="Enter your name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="text" className="form-control" name="pass" id="password" placeholder="Enter your Password" />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="confirmpassword">Confirm Password</label>
                                    <input type="text" className="form-control" name="confirmpass" id="confirmpassword" placeholder="Enter your Confirm Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" maxLength={12} className='form-control' name="phon" id="phone" placeholder='Enter Your Phone Number' />
                                </div>
                                <div className='text-center'>
                                    <button type="button" className='btn btn-success'>Save</button>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default signUpForm