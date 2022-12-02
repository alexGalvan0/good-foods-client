import { useEffect, useState } from "react"
function GoogleLogin() {

    const [user, setUser] = useState({})
    useEffect(() => {
        /* global google*/
        const handleCallbackResponse = (response) => {
            localStorage.setItem('token',response.credential)
            let userObject = jwt_decode(response.credential);
            SpeechSynthesisUtterance(userObject)

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