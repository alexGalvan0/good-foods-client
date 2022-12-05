import LoginForm from "../components/login/LoginForm"
import GoogleLogin from "../components/login/GoogleLogin";
import SignIn from "../components/login/SignIn";
function Login() {
    return (
        <div className="container flex-column justify-content-center mt-xl-5 pt-xl-5">
            <h3 className="text-light">Login</h3>
            <div className="row">
                <div className="d-flex justify-content-around flex-column flex-md-row p-5">
                    <div className="pb-5 text-center">
                        <LoginForm />
                        {/* <SignIn /> */}
                        {/* <GoogleLogin /> */}

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;