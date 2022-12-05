import { useState } from 'react';
import axios from 'axios'
import { Button } from '@mui/material';
import Link from 'next/link'
import Typography from '@mui/material';
function RegisterForm() {

    //http://127.0.0.1:8000/api/register

    const [username, setUsername] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userNameInput = (e) => {
        setUsername(e.target.value)
    }
    const FNameInput = (e) => {
        setFname(e.target.value)
    }
    const LameInput = (e) => {
        setLname(e.target.value)
    }
    const emailInput = (e) => {
        setEmail(e.target.value)
    }
    const passwordInput = (e) => {
        setPassword(e.target.value)
    }

    const submit = () => {
        axios.post('http://127.0.0.1:8000/api/register', {
            "username": username,
            "first_name": fname,
            "last_name": lname,
            "email": email,
            "password": password
        })
    }
    // const login = () =>{} Login after registering

    return (
        <form className='d-flex flex-column justify-content-center gap-1  p-3 bg-dark rounded' >
            <div className="col">
                <input onChange={userNameInput} type="text" className="form-control bg-light" placeholder="User name" value={username} />
            </div>
            <div className="col">
                <input onChange={FNameInput} type="text" className="form-control bg-light" placeholder="First name" value={fname} />
            </div>
            <div className="col">
                <input onChange={LameInput} type="text" className="form-control bg-light" placeholder="Last name" value={lname} />
            </div>
            <div className="form-group">
                <input onChange={emailInput} type="email" className="form-control bg-light" id="exampleInputEmail1" placeholder='Email' aria-describedby="emailHelp" value={email} />
            </div>
            <div className="form-group">
                <input onChange={passwordInput} type="password" className="form-control bg-light" id="exampleInputPassword1" placeholder='Password' value={password} />
            </div>
            <Link href="/login" style={{ textDecoration: 'none' }}><Button color="success" variant="contained" type='submit' onClick={submit} sx={{ bgcolor: 'success', marginTop: 2 }}>REGISTER!</Button></Link>
            <p style={{color:'white'}}>Already have an account?</p>
            <Link style={{ textDecoration: 'none' }} href="/login"><Button variant="contained">Login</Button></Link>

        </form>
    )
}
export default RegisterForm;