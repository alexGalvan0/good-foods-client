import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Typography,Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

function FollowingProfile() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const [userData, setUserData] = useState([]);
  const { id } = router.query;
  const BASE_URL = `https://8000-alexgalvan0-goodmoviesa-b4acnd9aawy.ws-us77.gitpod.io/api/following/${id}/`;
  const url = `https://8000-alexgalvan0-goodmoviesa-b4acnd9aawy.ws-us77.gitpod.io/api/getUserLikedMovies/${id}/`;

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

    getUserData();
    getData();
  }, []);

  return (
    <Container>
      <Box sx={{paddingBottom:3}}>
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
      <Typography variant="h6" color="secondary">
        MOVIES WATCHED:
      </Typography>
    </Container>
  );
}
export default FollowingProfile;
