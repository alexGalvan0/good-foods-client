import useUser from "../hooks/useUser"


function Profile() {
    const user = useUser()
    return (
        <>
            <h1 className="text-light">
                Hello, {user.first_name} !
            </h1>
        </>
    )
}
export default Profile
