import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

function FollowingProfile() {
    const router = useRouter()
    const [userData, setUserData] = useState([])
    const { id } = router.query;
    const BASE_URL = 'https://8000-alexgalvan0-goodmoviesa-b4acnd9aawy.ws-us77.gitpod.io/api/'

    useEffect(() =>{
        const getData = async () => {
            const req = axios.get(`${BASE_URL}users/${id}`)
            const resp = await req
            setUserData(resp.data)

        }
        getData()
    },[])

    return(
        <Typography variant='h1' color='secondary'>{userData.first_name}</Typography>
    )
}
export default FollowingProfile