import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="jumbotron text-center">
        <div className="container">
          <h1>GOOD MOVIES</h1>
          <p className="lead text-muted">Track films you’ve watched.</p>
          <p className="lead text-muted">Save those you want to see.</p>
          <p className="lead text-muted">Tell your friends what’s good.</p>
          <p>
            <Link href='/register'><button className="btn btn-primary my-2">Register</button></Link>
            <Link href='/login'><button className="btn btn-secondary my-2">Login</button></Link>
          </p>
        </div>
      </section>

    </div>
  )
}
