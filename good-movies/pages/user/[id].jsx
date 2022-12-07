import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

function FollowingProfile() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const [userData, setUserData] = useState([]);
  const { id } = router.query;
  const BASE_URL =
    "https://8000-alexgalvan0-goodmoviesa-b4acnd9aawy.ws-us77.gitpod.io/api/";
  const url = `https://8000-alexgalvan0-goodmoviesa-b4acnd9aawy.ws-us77.gitpod.io/api/getUserLikedMovies/${id}/`;

  useEffect(() => {
    const getData = async () => {
      const request = await axios.get(url);
      const response = request.data;
      setData(response);
    };
    getData();
  }, []);

  return (
    <Container>
      <Typography>Profile</Typography>
      {data.map((d) => (
        <Link href={`/movie/${d.imdbId}`}>
          <Image
            src={d.poster}
            key={d.id}
            alt={d.title}
            height={200}
            width={150}
          />
        </Link>
      ))}
    </Container>
  );
}
export default FollowingProfile;
