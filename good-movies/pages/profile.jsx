import useUser from "../hooks/useUser";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import FollowCard from "../components/follows/FollowCard";
import { Container, Typography } from "@mui/material";

function Profile() {
  let user = useUser();
  const url = `https://8000-alexgalvan0-goodmoviesa-pjtmlhva1y5.ws-us78.gitpod.io/api/getUserLikedMovies/${user.id}/`;
  const following = `https://8000-alexgalvan0-goodmoviesa-pjtmlhva1y5.ws-us78.gitpod.io/api/follow/${user.id}/${user.username}/`;
  const watchUrl = `https://8000-alexgalvan0-goodmoviesa-pjtmlhva1y5.ws-us78.gitpod.io/api/getUserWatchedMovies/${user.id}/`;

  const [data, setData] = useState([]);
  const [followData, setFollowData] = useState([]);
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };

    const getData = async () => {
      const request = await axios.get(url, config);
      const response = request.data;
      setData(response);
    };
    const getFollowing = async () => {
      const request = await axios.get(following, config);
      const response = request.data;
      setFollowData(response);
    };

    const getWatched = async () => {
      const request = await axios.get(watchUrl, config);
      const response = request.data;
      setWatched(response);
    };

    const getAllUserData = () => {
      getData();
      getFollowing();
      getWatched();
    };
    user.id != undefined ? getAllUserData() : null;
  }, [user]);

  const deleteLikedMovie = async (imdbId) => {
    await axios.delete(
      `https://8000-alexgalvan0-goodmoviesa-pjtmlhva1y5.ws-us78.gitpod.io/api/addLikedList/${user.id}/${imdbId}/`
    );
    const request = await axios.get(url);
    const response = request;
    setData(response.data);
  };

  const deleteWatchedMovie = async (imdbId) => {
    await axios.delete(
      `https://8000-alexgalvan0-goodmoviesa-pjtmlhva1y5.ws-us78.gitpod.io/api/addWatchedList/${user.id}/${imdbId}/`
    );
    const request = await axios.get(watchUrl);
    const response = request;
    setWatched(response.data);
  };
  const deletedFriend = async (userName) => {
    await axios.delete();
    const request = await axios.get(`https://8000-alexgalvan0-goodmoviesa-pjtmlhva1y5.ws-us78.gitpod.io/api/follow/${user.id}/${user.username}/`);
    const response = request;
    setFollowData(response.data);
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <div className=" mb-3 bg-primary rounded-3">
            <div className="container-fluid py-3">
              <h1 className="display-5 fw-bold text-light">
                @{user.username ? user.username : null}
              </h1>
              <div className="d-flex flex-md-column gap-2">
                <h6 className="text-light">
                  {" "}
                   Liked: <strong>{data.length}</strong>
                </h6>
                <h6 className="text-light">
                  {" "}
                   Watched: <strong>{watched.length}</strong>
                </h6>
                <h6 className="text-light">
                  {" "}
                   Following: <strong>{followData.length}</strong>
                </h6>
              </div>
              <Link href="movie/search">
                <Button sx={{ bgcolor: "primary.main" }} color="secondary">
                  Search Movies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <Container sx={{ bgcolor: "secondary.grey" }}>
          <Typography color="secondary.main" variant={"h5"}>
            Liked Movies:{" "}
          </Typography>
        </Container>
        <Container
          className=" d-flex gap-3  mb-3 py-2 "
          sx={{ bgcolor: "secondary.grey" }}
          style={{
            maxHeight: "40rem",
            overflow: "hidden",
            overflow: "auto",
          }}
        >
          {Array.isArray(data) &&
            data.map((m) => (
              <div key={m.imdbId} className="col d-flex flex-column">
                <div>
                  <Button
                    sx={{
                      marginBottom: -4.5,
                      paddingLeft: 17.5,
                      paddingRight: 0,
                    }}
                    varient="text"
                    color="alert"
                    size="large"
                    onClick={() => {
                      deleteLikedMovie(m.imdbId);
                    }}
                    className="btn-alert"
                  >
                    x
                  </Button>
                  <Link
                    style={{ textDecoration: "none" }}
                    href={`/movie/${m.imdbId}`}
                    key={m.imdbId + "m"}
                  >
                    <div className="d-flex text-center">
                      <Image
                        key={m.imdbId + "i"}
                        src={m.poster}
                        alt=""
                        height={200}
                        width={150}
                      />
                      <div className="d-flex  flex-column align-items-center"></div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </Container>

        <Container sx={{ bgcolor: "secondary.grey" }}>
          <Typography color="secondary.main" variant={"h5"}>
            Watched Movies:{" "}
          </Typography>
        </Container>
        <Container
          className=" d-flex gap-3  mb-3 py-2 "
          sx={{ bgcolor: "secondary.grey" }}
          style={{
            maxHeight: "40rem",
            overflow: "hidden",
            overflow: "auto",
          }}
        >
          {Array.isArray(watched) &&
            watched.map((m) => (
              <div key={m.imdbId} className="col d-flex flex-column">
                <div>
                  <Button
                    sx={{
                      marginBottom: -4.5,
                      paddingLeft: 17.5,
                      paddingRight: 0,
                    }}
                    varient="text"
                    color="alert"
                    size="large"
                    onClick={() => {
                      deleteWatchedMovie(m.imdbId);
                    }}
                    className="btn-alert"
                    
                  >
                    x
                  </Button>
                  <Link
                    style={{ textDecoration: "none" }}
                    href={`/movie/${m.imdbId}`}
                    key={m.imdbId + "m"}
                  >
                    <div className="d-flex text-center">
                      <Image
                        key={m.imdbId + "i"}
                        src={m.poster}
                        alt=""
                        height={200}
                        width={150}
                      />
                      <div className="d-flex  flex-column align-items-center"></div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </Container>
      </div>
      <div className="row pb-5 mb-5">
        <div className="col px-xl-5  d-flex flex-column justify-content-center">
          <Container sx={{ bgcolor: "secondary.grey" }} className="rounded">
            <Typography color="secondary.main" variant={"h5"}>
              Following:{" "}
            </Typography>
          </Container>

          <div className="col mt-2 px-xl-5 d-flex flex-wrap gap-3">
            {followData.map((f) => (
              <div key={f.id} className="col">
                <FollowCard onClick={() => {deletedFriend(f.username)}} userName={f.username} userId={f.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
