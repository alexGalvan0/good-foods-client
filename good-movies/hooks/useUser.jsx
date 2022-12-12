import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router'

const useUser = () => {
    const router = useRouter();
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const token = localStorage.getItem('token')

        const config = { headers: { Authorization: `Bearer ${token}` } }
        const url = "https://good-movies-371412.ue.r.appspot.com/api/user"
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





