import useUser from "../hooks/useUser"
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from "react"
import axios from "axios"

function Profile() {
    let user = useUser()
    const url = `http://127.0.0.1:8000/api/getUserLikedMovies/${user.id}`

    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const request =  await axios.get(url)
            const response = request
            setData(response.data)
        }
        try{
            getData()
        }catch{
             return
        }
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

            <div className="row">
                <h3 className="text-light">Liked: </h3>
                <div className="col text-center mb-5">
                {data.map((m) => (
                                <Image src={m.poster} alt='' height={200} width={150}/>
                            ))}
                </div>
            </div>


        </div>
    )
}
export default Profile 
