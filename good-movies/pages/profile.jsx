import useUser from "../hooks/useUser";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import Box from "@mui/material";
import FollowCard from '../components/follows/FollowCard'
import { Container, Typography } from "@mui/material";

function Profile() {
  let user = useUser();
  const url = `http://127.0.0.1:8000/api/getUserLikedMovies/${user.id}`;

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const request = await axios.get(url);
      const response = request;
      setData(response.data);
    };
    user.id != undefined ? getData() : null

  }, [user]);

  const deleteLikedMovie = async (imdbId) => {
    await axios.delete(`http://127.0.0.1:8000/api/addLikedList/${user.id}/${imdbId}/`);
    const request = await axios.get(url);
    const response = request;
    setData(response.data);
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <div className=" mb-3 bg-primary rounded-3">
            <div className="container-fluid py-3">
              <h1 className="display-5 fw-bold text-light">
                @{user.username ? user.username : null}
              </h1>
              <h6 className="text-light"> Movies Liked: {data.length}</h6>

              <Link href="movie/search">
                <Button
                sx={{bgcolor:'primary.main'}}
                color='secondary'
                >
                  Search Movies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <Container sx={{ bgcolor: 'secondary.grey' }}>

          <Typography color='secondary.main' variant={'h5'}>Liked Movies: </Typography>

        </Container>
        <Container
          className=" d-flex gap-3  mb-3 py-2 "
          sx={{ bgcolor: 'secondary.grey' }}
          style={{
            maxHeight: "40rem",
            overflow: "hidden",
            overflow: "auto",
        
          }}
        >
          {Array.isArray(data) &&
            data.map((m) => (
              <div className="col d-flex flex-column gap-2">
                <Link style={{ textDecoration: 'none' }} href={`/movie/${m.imdbId}`}><div className="d-flex text-center">
                  <Image key={m.imdbId} src={m.poster} alt="" height={200} width={150} />
                  <div
                    className="d-flex  flex-column align-items-center"
                  >

                  </div>
                </div>
                </Link>
                <div>
                  <Button
                    varient="text"
                    color='alert'
                    size="large"
                    onClick={() => { deleteLikedMovie(m.imdbId) }}
                    className="btn-alert"
                  >
                    x
                  </Button>
                </div>

              </div>
            ))}
        </Container>
      </div>
      <div className="row">
        <div className="col d-flex flex-column">
          <Container sx={{ bgcolor: 'secondary.grey' }} className='rounded'>
            <Typography color='secondary.main' variant={'h5'}>Following: </Typography>
          </Container>

          <div className="col mt-2 px-xl-5">
            <FollowCard />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
