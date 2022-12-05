import Link from "next/link";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import useUser from '../../hooks/useUser'

function Hero() {

  return (
    <div className="jumbotron p-4 p-md-5 text-white rounded d-flex justify-content-center">
      <div className="col-md-6 px-0 text-center">
      <img src='https://freesvg.org/img/Movie-Clapperboard.png' width={200} height={200} alt='movie'></img>

        <h1 style={{ fontSize: '4rem' }}>GOOD MOVIES</h1>
        <div className="container">
          <p>Track films you’ve watched.</p>
          <p>Save those you want to see.</p>
          <p>Tell your friends what’s good.</p>
        </div>
        <div className="row pb-3">
          <Stack spacing={2} direction="column">
            <Link style={{ textDecoration: 'none' }} href='/register'><Button color="success" variant="contained">GET STARTED — ITS FREE!</Button></Link>
            <Link style={{ textDecoration: 'none' }} href="/login"><Button variant="contained">Login</Button></Link>
          </Stack>
          {/* <Link href="/register">
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
            </p> */}
        </div>

        <div className="col-md-6"></div>
      </div>
    </div>

  );
}
export default Hero;
