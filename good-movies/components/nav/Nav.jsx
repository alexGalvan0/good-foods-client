import Link from 'next/link'

function Nav() {
    return (
<header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link href="/" className="nav-link px-2 text-secondary">Home</Link></li>
          <li><Link href="/" className="nav-link px-2 text-white">Features</Link></li>
          <li><Link href="/" className="nav-link px-2 text-white">Pricing</Link></li>
          <li><Link href="/" className="nav-link px-2 text-white">FAQs</Link></li>
          <li><Link href="/" className="nav-link px-2 text-white">About</Link></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
         <Link href='/login'><button type="button" className="btn btn-primary text-light me-2">Login</button></Link>
          <Link href='/register'><button type="button" className="btn btn-alert text-light">Sign-up</button></Link>
        </div>
      </div>
    </div>
  </header>
    )
}

export default Nav;