import axios from "axios"
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from '@mui/material/Button';
import {  Typography } from "@mui/material";

function LoginForm() {
    const router = useRouter();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const userNameInput = (e) => {
        setUsername(e.target.value)
    }
    const passwordInput = (e) => {
        setPassword(e.target.value)
    }
    const submit = async (e) => {
        const user = axios.post('http://127.0.0.1:8000/api/token', {
            "username": username,
            "password": password
        })
        const res = await user
        localStorage.setItem('token', res.data.access)
        e.preventDefault();
        router.push('/profile');
    }
    return (
        <>
            
            <div  className=' container d-flex flex-column justify-content-center gap-1 border p-2 rounded' >
                <input onChange={userNameInput} type="text" className="form-control bg-light" placeholder="User name" value={username} />
                <input onChange={passwordInput} type="password" className="form-control bg-light" id="exampleInputPassword1" placeholder="Password" value={password} />
                <Button onClick={submit} color="primary" variant="contained">Login</Button>

                <Typography color='secondary'>No account?</Typography>
                <Button color="success" variant="contained"><Link style={{ textDecoration: 'none' }} href='/register'><Typography color='secondary'>GET STARTED — ITS FREE!</Typography></Link></Button>

            </div>

            
        </>
    )
}

export default LoginForm