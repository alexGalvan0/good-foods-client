import axios from "axios"
import { useState, useEffect } from 'react'



function Profile() {

    const [userData, setUserData] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            const encoded_jwt = localStorage.getItem('token');
            const config = { headers: { Authorization: `Bearer ${encoded_jwt}` } }

            const url = "http://127.0.0.1:8000/api/user"

            fetch(url, config)
                .then(resp => resp.json())
                .then(data => setUserData(data))
        }
        fetchData()
    }
        , [])



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