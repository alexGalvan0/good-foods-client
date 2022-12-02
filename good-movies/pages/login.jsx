import LoginForm from "../components/login/LoginForm"
import GoogleLogin from "../components/login/GoogleLogIn";
function Login() {
    return (
        <div className="container flex-column justify-content-center mt-5 pt-5">
            <h2 className="text-light">Login</h2>
            <div className="row">
                <div className="d-flex justify-content-around flex-column flex-md-row p-5">
                    <div className="pb-5 text-center">
                        <LoginForm />
                        <GoogleLogin />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;