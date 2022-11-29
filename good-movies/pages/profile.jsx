import useUser from "../hooks/useUser"
import Link from 'next/link'

function Profile() {
    const user = useUser()
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div class="p-5 mb-4 bg-alert rounded-3">
                        <div class="container-fluid py-5">
                            <h1 class="display-5 fw-bold">Hello {user.first_name}!</h1>

                            <Link href={'movie/search'}><button class="btn btn-primary btn-lg text-light" type="button">Search Movies</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile
