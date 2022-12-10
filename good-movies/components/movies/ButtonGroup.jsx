import axios from "axios";
import Link from "next/link";
import useUser from "../../hooks/useUser";
import { Button } from "@mui/material";
import { useEffect } from "react";
import ReviewModal from "./ReviewModal";

function ButtonGroup({ mData, movieTitle }) {
  let token = "";
  useEffect(() => {
    token = localStorage.getItem("token");
  }, []);

  const user = useUser();
  const url =
    "https://8000-alexgalvan0-goodmoviesa-pjtmlhva1y5.ws-us78.gitpod.io/api/movies/";

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
    const headers = { Authorization: `Bearer ${token}` };
    await axios.post(url, config, headers).catch(function (err) {
      return;
    });
  };
  const likeMovie = async () => {
    await addMovieToDb();
    let request = axios.post(
      `https://8000-alexgalvan0-goodmoviesa-pjtmlhva1y5.ws-us78.gitpod.io/api/addLikedList/${user.id}/${mData.imdbID}/`
    );
  };
  const watchedMovie = async () => {
    await addMovieToDb();
    let request = axios.post(
      `https://8000-alexgalvan0-goodmoviesa-pjtmlhva1y5.ws-us78.gitpod.io/api/addWatchedList/${user.id}/${mData.imdbID}/`
    );
  };

  return (
    <div
      className="btn-group bg-dark mb-5"
      role="group"
      aria-label="Basic example"
    >
      <div className="d-flex flex-row gap-1">
        <Link href="/profile">
          <Button
            size="small"
            variant="contained"
            onClick={likeMovie}
            sx={{ bgcolor: "secondary" }}
          >
            LIKE
          </Button>
        </Link>
        <Link href="/profile">
          <Button
            size="small"
            variant="contained"
            onClick={watchedMovie}
            sx={{ bgcolor: "secondary" }}
          >
            WATCHED
          </Button>
        </Link>

        <ReviewModal movieTitle={movieTitle} buttonText="REVIEW" />
      </div>
    </div>
  );
}

export default ButtonGroup;
