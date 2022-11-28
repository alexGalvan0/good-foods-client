import LoginForm from "../components/login/LoginForm"
function Login() {
    return (
        <div className="container">
            <h2 className="text-light">Login</h2>
            <div className="row">
                <div className="col-4">
                    <LoginForm />
                </div>
            </div>
        </div>

    )
}

export default Login;