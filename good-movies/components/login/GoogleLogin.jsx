import { useEffect, useState } from "react"
import jwt_decode from "jwt-decode";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useRouter } from 'next/router'
function GoogleLogin() {
    const route = useRouter()
    const [user, setUser] = useState({})
    const [firstName, setFirstName] = useLocalStorage('firstName', 'Friend')
    useEffect(() => {
        /* global google*/
        const handleCallbackResponse = (response) => {
            localStorage.setItem('token', response.credential)
            let userObject = jwt_decode(response.credential);
            setUser(userObject)
            console.log(user)
            setFirstName(user.given_name)

            route.push('/profile')

        }

        google.accounts.id.initialize({
            client_id: "483637557491-jql4fnuhlja8av3gqih2j5iof8eov6fq.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        )
    }, [])


    return (
        <div id="signInDiv"></div>
    )
}

export default GoogleLogin;