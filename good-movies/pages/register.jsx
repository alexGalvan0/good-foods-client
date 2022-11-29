import RegisterForm from "../components/register/RegisterForm"
import Image from 'next/image'
function Register() {
    return (
        <div className="container">
            <h3 className="text-light">Register</h3>
            <div className="row">
                <div className="d-flex justify-content-around flex-column flex-md-row p-5" >
                    <div className="pb-5 text-center"><RegisterForm /></div>
                    
                    <Image className="rounded" src="/../public/img/home-cinema.jpg" width={400} height={300}></Image>

                </div>
            </div>
        </div>
    )
}

export default Register