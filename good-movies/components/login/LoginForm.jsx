import axios from "axios"
import { useState } from 'react'

function LoginForm() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const userNameInput = (e) => {
        setUsername(e.target.value)
    }
    const passwordInput = (e) => {
        setPassword(e.target.value)
    }
    const submit =  async () => {
        const user = axios.post('http://127.0.0.1:8000/api/token',{
            "username":username,
            "password":password
        })
        const res = await user
        localStorage.setItem('token',res.data.access)
        window.location.href = "/profile";

    }
    return (
        <>
            <div className="col">
                <input onChange={userNameInput} type="text" className="form-control" placeholder="User name" value={username} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input onChange={passwordInput} type="password" className="form-control" id="exampleInputPassword1" value={password} />
                <button onClick={submit} type="button" className="btn btn-primary">Submit</button>
            </div>
        </>
    )
}

export default LoginForm