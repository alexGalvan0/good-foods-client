import axios from "axios";
import Link from "next/link";
import useUser from "../../hooks/useUser";
import { Button } from "@mui/material";

function ButtonGroup({ mData }) {
  const user = useUser();
  const url = "http://127.0.0.1:8000/api/movies/";

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

  const addMovieToDb = async () => {
    try {
      await axios.post(url, config);
    } catch {
      return;
    }
  };
  const likeMovie = async () => {
    await addMovieToDb();
    let request = axios.post(
      `http://127.0.0.1:8000/api/addLikedList/${user.id}/${mData.imdbID}/`
    );
    let response = await request;
  };

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
      </Link>
    </div>
  );
}

export default ButtonGroup;
