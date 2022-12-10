import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Typography, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

function FollowingProfile() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [watched, setWatched] = useState([]);
  const [userData, setUserData] = useState([]);
  const [followData, setFollowData] = useState([]);

  const { id } = router.query;
  const BASE_URL = `https://8000-alexgalvan0-goodmoviesa-pjtmlhva1y5.ws-us78.gitpod.io/api/following/${id}/`;
  const url = `https://8000-alexgalvan0-goodmoviesa-pjtmlhva1y5.ws-us78.gitpod.io/api/getUserLikedMovies/${id}/`;
  const watchUrl = `https://8000-alexgalvan0-goodmoviesa-pjtmlhva1y5.ws-us78.gitpod.io/api/getUserWatchedMovies/${id}/`;
  const following = `https://8000-alexgalvan0-goodmoviesa-pjtmlhva1y5.ws-us78.gitpod.io/api/follow/${id}/agalvan/`;


  useEffect(() => {
    const getData = async () => {
      const request = await axios.get(url);
      const response = request.data;
      setData(response);
    };
    const getUserData = async () => {
      const request = await axios.get(BASE_URL);
      const response = request.data;
      setUserData(response);
    };
    const getWatchedData = async () => {
      const request = await axios.get(watchUrl);
      const response = request.data;
      setWatched(response);
    };
    const getFollowing = async () => {
      const request = await axios.get(following);
      const response = request.data;
      setFollowData(response);
    };

    getUserData();
    getData();
    getWatchedData();
    getFollowing()
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
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
      <Box sx={{ paddingBottom: 3 }}>
        <Typography variant="h2" color="secondary">
          @{userData.username}
        </Typography>
        <Typography variant="h6" color="secondary">
          MOVIES LIKED:{" "}
        </Typography>
        {data.map((d) => (
          <Link href={`/movie/${d.imdbId}`} key={d.id + "l"}>
            <Image
              src={d.poster}
              key={d.id}
              alt={d.title}
              height={200}
              width={150}
            />
          </Link>
        ))}
      </Box>

      <Box sx={{ paddingBottom: 3 }}>
        <Typography variant="h6" color="secondary">
          WATCHED
        </Typography>
        {watched.map((w) => (
          <Link href={`/movie/${w.imdbId}`} key={w.id + "w"}>
            <Image
              src={w.poster}
              key={w.id}
              alt={w.title}
              height={200}
              width={150}
            />
          </Link>
        ))}
      </Box>
    </Container>
  );
}
export default FollowingProfile;
