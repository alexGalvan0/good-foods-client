import Link from 'next/link'
import Home from '../components/about/Home'

export default function Index() {
  return (
    <div>
      {/* <section className="jumbotron text-center">
        <div className="container">
          <h1 className='text-light'>GOOD MOVIES</h1>
          <p className="lead text-muted">Track films you’ve watched.</p>
          <p className="lead text-muted">Save those you want to see.</p>
          <p className="lead text-muted">Tell your friends what’s good.</p>
        
            <Link href='/register'><button className="btn btn-alert my-2">GET STARTED — IT‘S FREE!</button></Link>
            <Link href='/login'><button className="btn btn-primary my-2">Login</button></Link>
          
        </div>
      </section> */}
      <Home />

    </div>
  )
}
