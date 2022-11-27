import axios from 'axios'
import { useState } from 'react'


//http://127.0.0.1:8000/api/register







function RegisterForm() {
    return (
        <form>
            <div class="col">
                <input type="text" class="form-control" placeholder="User name" />
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="First name" />
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Last name" />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
export default RegisterForm;