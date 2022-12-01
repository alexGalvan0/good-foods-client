import useUser from "../hooks/useUser"
import Link from 'next/link'
import { useState, useEffect } from "react"
import axios from "axios"

function Profile() {
    let user = useUser()
    const url = `http://127.0.0.1:8000/api/getUserLikedMovies/${user.id}`

    const [data, setData] = useState('')

    useEffect(() => {
        const getData = async () => {
            console.log(user)
            const request =  await axios.get(url)
            const response = request
            setData(response.data)
        }
        getData()
    }, [user])


    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="p-5 mb-4 bg-primary rounded-3">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold text-light">Hello {user.first_name}!</h1>

                            <Link href='movie/search'><button className="btn btn-alert btn-lg text-light" type="button">Search Movies</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile
