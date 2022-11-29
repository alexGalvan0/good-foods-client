import Link from 'next/link'
import styles from './Home.module.scss'
function Home() {
    return (
        <div className={styles.jumbotron}>

        <main className="text-light text-center" role="main">

            <div className='jumbotron' >
                <div className='container'>
                    <h1 className="display-3">GOOD MOVIES</h1>
                    <p>Track films you’ve watched.</p>
                    <p>Save those you want to see.</p>
                    <p>Tell your friends what’s good.</p>
                </div>
            </div>

            <div className="container pb-5">

                <div className="row">
                    <div className="col-md-6">
                        <Link href='/register'><button className="btn btn-primary my-2">GET STARTED — IT‘S FREE!</button></Link>

                        <p><Link className="btn btn-lg btn-light" href="/movie/search" role="button">SEARCH MOVIES »</Link></p>
                    </div>
                    <div className="col-md-6">
                    </div>
                </div>

                <hr />

            </div>

        </main>
        </div>
    )
}

export default Home;