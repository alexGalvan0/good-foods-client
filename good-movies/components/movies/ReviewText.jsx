import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { Button } from "@mui/material";
import axios from "axios";
import useUser from "../../hooks/useUser";
import { useEffect } from "react";

export default function ReviewText({ movieTitle, mData }) {
  const [value, setValue] = useState("");
  const [movieid, setMovieid] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const user = useUser();
  const murl =
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
    await axios.post(murl, config).catch(function (err) {
      return;
    });
  };

  const getMovieId = async () => {
    try {
      await addMovieToDb();
    } catch {
      null;
    }
    // GET MOVIE ID
    const movieIdUrl = `https://8000-alexgalvan0-goodmoviesa-pjtmlhva1y5.ws-us78.gitpod.io/api/getMovieByImdbID/${mData.imdbID}/`;
    await axios.get(movieIdUrl).then((idResponse) => {
      const url =
      "https://8000-alexgalvan0-goodmoviesa-pjtmlhva1y5.ws-us78.gitpod.io/api/review/";
    let config = {
      user: user.id,
      review: value,
      movie: idResponse.data,
    };
    axios.post(url, config);
    });
  };


  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label={movieTitle}
          multiline
          maxRows={6}
          value={value}
          onChange={handleChange}
        />
        <Link href="/profile">
          <Button
            size="small"
            variant="contained"
            onClick={getMovieId}
            sx={{ bgcolor: "secondary" }}
          >
            ADD REVIEW
          </Button>
        </Link>
      </div>
    </Box>
  );
}
