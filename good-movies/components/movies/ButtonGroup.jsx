import axios from "axios";
import Link from "next/link";
import useUser from "../../hooks/useUser";
import { Button } from "@mui/material";

function ButtonGroup({ mData }) {

  const user = useUser();
  const url = "https://8000-alexgalvan0-goodmoviesa-b4acnd9aawy.ws-us77.gitpod.io/api/movies/";
  const token = localStorage.getItem('token')
  const config = {
    title: mData.Title,
    plot: mData.Plot,
    cast: mData.Actors,
    poster: mData.Poster,
    rated: mData.Rated,
    director: mData.Director,
    date_released: mData.Released,
    imdbId: mData.imdbID,
    year: mData.Year,
    //roten_score:mData.Ratings.toString(),
    run_time: mData.Runtime,
  };
  const headers = { Authorization: `Bearer ${token}` } 

  const addMovieToDb = async () => {
    await axios.post(url, config, { headers: { Authorization: `Bearer ${token}` } })
    .catch(function (err){return});
  };
  const likeMovie = async () => {
    await addMovieToDb();
    let request = axios.post(
      `https://8000-alexgalvan0-goodmoviesa-b4acnd9aawy.ws-us77.gitpod.io/api/addLikedList/${user.id}/${mData.imdbID}/`
    );

  };
  const  watchedMovie = async () => {
    await addMovieToDb();
    let request = axios.post(
      `https://8000-alexgalvan0-goodmoviesa-b4acnd9aawy.ws-us77.gitpod.io/api/addWatchedList/${user.id}/${mData.imdbID}/`
    );

  }

  return (
    <div
      className="btn-group gap-1 bg-dark mb-5"
      role="group"
      aria-label="Basic example"
    >
      <Link href="/profile">
        <Button size='small' variant='contained' onClick={likeMovie} sx={{bgcolor:'secondary'}} >
          Like
        </Button>
        <Button size='small' variant='contained' onClick={watchedMovie} sx={{bgcolor:'secondary'}} >
          Watched
        </Button>
      </Link>
    </div>
  );
}

export default ButtonGroup;
