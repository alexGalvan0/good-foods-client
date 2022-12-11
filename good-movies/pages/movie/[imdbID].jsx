import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import StarRating from "../../components/movies/StarRating";
import Reviews from "../../components/movies/Reviews";
import useUser from "../../hooks/useUser";
import ButtonGroup from "../../components/movies/ButtonGroup";
import axios from "axios";
import { Typography } from "@mui/material";

function MovieProfile({ mData, uData }) {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const router = useRouter();

  const [movieData, setMovieData] = useState({});
  const [reviewData, setReviewData] = useState([]);

  const { imdbID } = router.query;

  useEffect(() => {
    const req = async () => {
      let url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`;
      const data = axios.get(url);
      const response = await data;
      setMovieData(response.data);
    };

    const getReviews = async () => {
      let url = `https://8000-alexgalvan0-goodmoviesa-pjtmlhva1y5.ws-us78.gitpod.io/api/getReviewByMovieId/${3}/`;
      const data = axios.get(url);
      const response = await data;
      setReviewData(response.data);
    };

    req()
    getReviews()
  }, []);

  mData = movieData;
  uData = useUser();
  return (
    <div className="container rounded bg-primary my-5 text-center text-lg-start pt-5 mb-5 pb-5 p-md-5">
      <div className="row">
        <div className="col">
          <div className="media">
            <div className="d-md-flex  mb-3">
              <img src={movieData.Poster} alt="movie" className="mb-sm-3" />

              <div className="media-body m-md-4">
                <h3 className="bold mt-2 text-light">{movieData.Title}</h3>
                <p className="text-light">Plot: {movieData.Plot}</p>
                <p className="text-light">Director: {movieData.Director}</p>
                <p className="text-light">Rated: {movieData.Rated}</p>
                <p className="text-light">Released: {movieData.Released}</p>
                <p className="text-light">Runtime: {movieData.Runtime}</p>
              </div>
            </div>
            <ButtonGroup
              movieTitle={movieData.Title}
              mData={mData}
              uData={uData}
            />
            <hr className="text-light" />

            <StarRating />

            <div className="mt-5">
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h6"
                color="#FFFFFF"
                component="legend"
              >
                Reviews:
              </Typography>
              {reviewData.map((rev) => (
                <Reviews
                  reviewer={rev.user.username}
                  review={rev.review}
                  reviewId={rev.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieProfile;
