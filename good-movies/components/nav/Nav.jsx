import Link from 'next/link'
import { useState, useEffect } from 'react';

function Nav() {

  const [user, setUser] = useState('')
  useEffect(() => {setUser(localStorage.getItem('token'))})

  // let user;
  // if (typeof window !== "undefined") {
  //   user = localStorage.getItem('token')
  //   }
  let logout = () => {
    localStorage.clear('token')
  }

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link href="/" className="nav-link px-2 text-secondary">Home</Link></li>
            <li><Link href="/movieSearch" className="nav-link px-2 text-light">Search</Link></li>
            <li><Link href="/" className="nav-link px-2 text-white">FAQs</Link></li>
            <li><Link href="/" className="nav-link px-2 text-white">About</Link></li>
          </ul>

          <div className="text-end">

            {user ? <Link href='/profile'><button type="button" className="btn btn-alert text-light me-2">Profile</button></Link> :
              <Link href='/register'><button type="button" className="btn btn-alert text-light">Sign-up</button></Link>}

            {user ? <Link href='/'><button onClick={logout} type="button" className="btn btn-primary text-light me-2">Logout</button></Link> :
              <Link href='/login'><button type="button" className="btn btn-primary text-light me-2">Login</button></Link>}


          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav;