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



export default function FollowCard({userName, userId,setFollowData}) {
const route = useRouter()
  const BASE_URL = 'https://8000-alexgalvan0-goodmoviesa-b4acnd9aawy.ws-us78.gitpod.io/api/'
  const user = useUser()

  const unFollowFriend = async () => {
    let req = axios.delete(`${BASE_URL}follow/${user.id}/${userName}/`)

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
      <CardActions className='d-flex justify-content-around'>
        <Button onClick={goToFriendProfile} color='secondary' sx={{bgcolor:'primary.main'}} size="small">Visit</Button>
        <Typography onClick={unFollowFriend} color='primary.alert'>X</Typography>
      </CardActions>
    </Card>
  );
}