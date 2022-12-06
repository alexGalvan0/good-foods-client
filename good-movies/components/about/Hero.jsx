import Link from "next/link";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

function Hero() {

  return (
    <div className="jumbotron  p-md-5 text-white rounded d-flex justify-content-center">
      <div className="col-md-6 pb-0 text-center">
      <img src='https://freesvg.org/img/Movie-Clapperboard.png' width={200} height={200} alt='movie'></img>

        <Typography variant='h2' sx={{ fontWeight: 'bold' }}>GOOD MOVIES</Typography>
        <div className="container">
          <Typography>Track films you’ve watched.</Typography>
          <Typography>Save those you want to see.</Typography>
          <Typography>Tell your friends what’s good.</Typography>
        </div>
        <div className="col pb-3 pt-3">
          <Stack spacing={2} direction="column">
            <Link style={{ textDecoration: 'none' }} href='/register'><Button color="success" variant="contained">GET STARTED — ITS FREE!</Button></Link>
            <Link style={{ textDecoration: 'none' }} href="/login"><Button variant="contained">Login</Button></Link>
          </Stack>
        </div>

        <div className="col-md-6"></div>
      </div>
    </div>

  );
}
export default Hero;
