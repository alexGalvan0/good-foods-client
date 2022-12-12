import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useState } from "react";

import useUser from "../../hooks/useUser";

export default function FollowCard({ userName, userId, setFollowData }) {
  const [friends, setFriends] = useState('')
  const route = useRouter();
  const BASE_URL = "https://good-movies-371412.ue.r.appspot.com/api/";
  const user = useUser();

  const unFollowFriend = async () => {
    let req = axios.delete(`${BASE_URL}follow/${user.id}/${userName}/`);
    //setFriends(await req.data)
    window.location.reload()
  };
  const goToFriendProfile = () => {
    route.push(`user/${userId}`);
  };

  return (
    <Card sx={{ maxWidth: 175, bgcolor: "secondary.grey" }}>
      <CardContent>
        <Typography variant="h5" component="div" color="secondary.main">
          @{userName}
        </Typography>
      </CardContent>
      <CardActions className="d-flex justify-content-around">
        <Button
          onClick={goToFriendProfile}
          color="secondary"
          sx={{ bgcolor: "primary.main" }}
          size="small"
        >
          Visit
        </Button>
        <Button
          onClick={unFollowFriend}
          color="alert"
          sx={{ bgcolor: "primary.main" }}
          size="small"
          style={{ backgroundColor: "transparent" }}
        >
          X
        </Button>
        {/* <Typography onClick={unFollowFriend} color='primary.alert'>X</Typography>
        <a className='border border-danger text-danger background-dark py-1 px-2 pe-auto rounded' onClick={unFollowFriend}>X</a> */}
      </CardActions>
    </Card>
  );
}
