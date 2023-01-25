import LoginForm from "../components/login/LoginForm"

function Login() {
    return (
        <div className="container flex-column justify-content-center mt-xl-5 pt-xl-5">
            <div className="row">
                <div className="d-flex justify-content-around flex-column flex-md-row p-5">
                    <div className="pb-5 text-center">
                        <LoginForm />

                        {/* testing */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;