import Link from "next/link";

function Hero() {
  return (
    <div className="jumbotron p-4 p-md-5 text-white rounded bg-wild">
      <div className="col-md-6 px-0 text-center">
        <h1 style={{fontSize:'4rem'}}>GOOD MOVIES</h1>
        <div className="container">
          <p>Track films you’ve watched.</p>
          <p>Save those you want to see.</p>
          <p>Tell your friends what’s good.</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Link href="/register">
              <button className="btn btn-alert my-2 text-light">
                GET STARTED — ITS FREE!
              </button>
            </Link>

            <p>
              <Link
                className="btn btn-lg btn-primary text-light"
                href="/movie/search"
                role="button"
              >
                SEARCH MOVIES »
              </Link>
            </p>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
