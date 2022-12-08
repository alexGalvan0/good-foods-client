import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router'

const useUser = () => {
    const router = useRouter();
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const token = localStorage.getItem('token')

        const config = { headers: { Authorization: `Bearer ${token}` } }
        const url = "https://8000-alexgalvan0-goodmoviesa-b4acnd9aawy.ws-us78.gitpod.io/api/user"
        const req = async () => {
            if (token) {
                const data = axios.get(url, config)
                const response = await data
                setUserData(response.data[0])
            } else {
                router.push('/login');               
                
            }
        }
        req()

    }, [])
    return userData

}
export default useUser






// ction Profile() {
//     const token = () => {
//         if (typeof window !== "undefined") {
//             if (localStorage.getItem("token")) {
//                 return localStorage.getItem("token")
//             } else {
//                 return []
//             }
//         }
//     }
//     const config = { headers: { Authorization: `Bearer ${token()}` } }

//     const [userData, setUserData] = useState({})

//     useEffect(() => {
//         const url = "http://127.0.0.1:8000/api/user"
//         const req = async () => {
//             const data = axios.get(url,config)
//             const response = await data
//             setUserData(response.data[0])
//         }
//         req()
//     }, [userData.first_name])
