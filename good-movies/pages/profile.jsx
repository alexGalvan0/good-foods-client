import axios from "axios"
import { useState, useEffect } from 'react'



function Profile() {
    const token = () => {
        if (typeof window !== "undefined") {
            if (localStorage.getItem("token")) {
                return JSON.parse(localStorage.getItem("token"))
            } else {
                return []
            }
        }
    }
    const config = { headers: { Authorization: `Bearer ${token}` } }

    const [userData, setUserData] = useState('')

    useEffect(() => {
        const url = "http://127.0.0.1:8000/api/user"
        const req = async () => {
            const data = axios.get(url)
            const response = await data.JSON
            setUserData(response)
        }
        req()
    }, [])

    console.log(userData)

    return (
        <>
            <h1>
                h2
            </h1>
        </>
    )

}
export default Profile


        // Perform localStorage action
        // let encoded_jwt = localStorage.getItem('token');
        // const config = { headers: { Authorization: `Bearer ${encoded_jwt}` } }
        // const url = "http://127.0.0.1:8000/api/user"
        // let req = axios.get(url, config)