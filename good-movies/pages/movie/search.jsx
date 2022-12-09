import axios from "axios";
import { useState } from "react";
import Toggle from "../../components/search/Toggle";
import Link from "next/link";
import Button from "@mui/material/Button";
import useUser from "../../hooks/useUser";
import { Container } from "@mui/system";
import { useRouter } from "next/router";

function MovieSearch() {
  const route = useRouter();
  const user = useUser();
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const OMDB_URL = "https://www.omdbapi.com/";
  const BASE_URL =
    "https://8000-alexgalvan0-goodmoviesa-pjtmlhva1y5.ws-us78.gitpod.io/api/";

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [searchType, setSearchType] = useState("movie");
  const [movieResults, setMovieResults] = useState(false);
  const [userResults, setUserResults] = useState(false);
  let title = search.replaceAll(" ", "+");

  const getMovies = async () => {
    let req = axios.get(
      `${OMDB_URL}?apikey=${API_KEY}&s=${title}&type=movie&page=1`
    );
    let resp = await req;
    setData(resp.data.Search);
  };
  const getSearch = (e) => {
    setSearch(e.target.value);
  };
  const results = () => {
    setMovieResults(true);
  };

  const getFriends = async () => {
    try {
      let lowerSearch = search.toLowerCase();
      let req = axios.get(`${BASE_URL}getUserByUsername/${lowerSearch}`);
      let resp = await req;
      setData(resp.data);
    } catch {
      setData("no user found");
    }
  };

  const displayResult = (e) => {
    e.preventDefault()
    if (searchType === "movie" && search != "") {
      try {
        getMovies();
        results();
      } catch {
        alert("Movie Not Found");
      }
    }
    if (searchType === "user") {
      getFriends();
    }
  };

  const followFriend = async () => {
    let username = data.username;
    let req = axios.post(`${BASE_URL}follow/${user.id}/${username}/`);
    let resp = await req;
    route.push("../profile");
  };

  return (
    <form>
    <div className="container bg-dark mt-3 pt-3">
      <div className="row pb-3">
        <div className="col col-lg-4">
          <Toggle setSearchType={setSearchType} />
          <input
            type="search"
            onChange={getSearch}
            value={search}
            className="form-control form-control-dark text-bg-light mb-3"
            placeholder="Search..."
            aria-label="Search"
          />
          <Button
            type='submit'
            sx={{ bgcolor: "primary.main" }}
            color="secondary"
            onClick={displayResult}
          >
            Search
          </Button>
        </div>
      </div>
      {searchType == "movie" && movieResults ? (
        <div>
          <div className="row">
            <div className="col">
              <h2 className="text-light">Movies: </h2>
            </div>
          </div>
          <div className="row mb-5 pb-5">
            <Container
              sx={{ bgcolor: "secondary.grey" }}
              className=" mb-5 d-flex gap-5 p-3 rounded"
              style={{
                maxWidth: "100vw",
                overflow: "hidden",
                overflow: "auto",
              }}
            >
              {Array.isArray(data) &&
              data != undefined &&
              data.splice(0, 5).length > 0 ? (
                data.map((d) => (
                  <Link
                    className="rounded"
                    key={d.imdbID}
                    href={`/movie/${d.imdbID}`}
                  >
                    <img
                      key={d.imdbID}
                      src={d.Poster}
                      alt={d.Title}
                      width={250}
                      height={400}
                    />
                  </Link>
                ))
              ) : (
                <></>
              )}
            </Container>
          </div>
        </div>
      ) : null}

      {searchType == "user" && data != undefined ? (
        <div className="col-lg-3">
          <div className="row">
            <div className="col">
              <h2 className="text-light">Users: </h2>
            </div>
          </div>
          <div className="row mb-5 pb-5">
            <div
              className=" mb-5  bg-dark rounded "
              style={{
                maxWidth: "100vw",
                overflow: "hidden",
                overflow: "auto",
              }}
            >
              <h2 className="text-light">@{data.username}</h2>
              <div className="col-4 d-flex flex-column pb-2">
                <d className="col-3 d-flex gap-1">
                  <p className="text-light">{data.first_name}</p>
                  <p className="text-light">{data.last_name}</p>
                </d>
                <Button
                  onClick={followFriend}
                  sx={{ bgcolor: "primary.main" }}
                  color="secondary"
                >
                  Follow
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
    </form>
  );
}

export default MovieSearch;
