import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function FollowCard({userName}) {
  return (
    <Card sx={{ maxWidth: 175,bgcolor:'secondary.grey' }}>
      <CardContent>
        <Typography variant="h5" component="div"color='secondary.main'>
          @{userName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color='secondary' sx={{bgcolor:'primary.main'}} size="small">Visit</Button>
        <Button color='secondary' sx={{bgcolor:'primary.alert'}} size="small">Unfollow</Button>
      </CardActions>
    </Card>
  );
}