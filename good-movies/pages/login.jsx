import LoginForm from "../components/login/LoginForm"
import Image from "next/image";
function Login() {
    return (
        <div className="container flex-column">
            <h2 className="text-light">Login</h2>
            <div className="row">
                <div className="d-flex justify-content-around flex-column flex-md-row p-5">
                    <div className="pb-5 text-center">
                        <LoginForm />
                    </div>
                    <Image className="rounded" src="/../public/img/home-cinema.jpg" alt="camera" width={400} height={300}></Image>
                </div>
            </div>
        </div>

    )
}

export default Login;