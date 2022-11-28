import RegisterForm from "../components/register/RegisterForm"

function Register() {
    return (
        <div className="container">
            <h3 className="text-light">Register</h3>
            <div className="row">
                <div className="col-4">
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default Register