function GoogleLogin() {
    

    const onSignIn = (googleUser) => {
        let profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
    const signOut = () => {
        let auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }
    return (<>
        <div className="g-signin2 rounded" data-onsuccess={onSignIn}></div>
        <a href="#" onClick={signOut}>Sign out</a>
    </>

    )
}

export default GoogleLogin;