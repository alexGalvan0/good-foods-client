import { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

const useUser = () => {
    const [userData, setUserData] = useState({})
    const [firstName, setfirstName] = useLocalStorage('name','Friend')
    const [lastName, setLastName] = useLocalStorage('last_name','')
    const [userName, setUserName] = useLocalStorage('username','')
    useEffect(() => {
        const token = localStorage.getItem('token')
        
        const config = { headers: { Authorization: `Bearer ${token}` } }
        const url = "http://127.0.0.1:8000/api/user"
        const req = async () => {
            const data = axios.get(url,config)
            const response = await data
            setUserData(response.data[0])
        } 
        req() 
        setfirstName(userData.first_name)
        setLastName(userData.last_name)
        setUserName(userData.username)

    }, [])

    return  userData 
    
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
