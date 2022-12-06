import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router'

import useUser from '../../hooks/useUser';



export default function FollowCard({userName, userId}) {
const route = useRouter()
  const BASE_URL = 'https://8000-alexgalvan0-goodmoviesa-b4acnd9aawy.ws-us77.gitpod.io/api/'
  const user = useUser()

  const unFollowFriend = async () => {
    let req = axios.delete(`${BASE_URL}follow/${user.id}/${userName}/`)
    let resp = await req.data
}
const goToFriendProfile = () =>{
  route.push(`user/${userId}`)
}

  return (
    <Card sx={{ maxWidth: 175,bgcolor:'secondary.grey' }}>
      <CardContent>
        <Typography variant="h5" component="div"color='secondary.main'>
          @{userName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={goToFriendProfile} color='secondary' sx={{bgcolor:'primary.main'}} size="small">Visit</Button>
        <Button onClick={unFollowFriend} color='secondary' sx={{bgcolor:'primary.alert'}} size="small">Unfollow</Button>
      </CardActions>
    </Card>
  );
}