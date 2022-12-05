import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function FollowCard() {
  return (
    <Card sx={{ maxWidth: 175,bgcolor:'secondary.grey' }}>
      <CardContent>
        <Typography variant="h5" component="div"color='secondary.main'>
          @celine
        </Typography>
      </CardContent>
      <CardActions>
        <Button color='secondary' sx={{bgcolor:'primary.main'}} size="small">Visit</Button>
        <Button color='secondary' sx={{bgcolor:'primary.alert'}} size="small">Unfollow</Button>
      </CardActions>
    </Card>
  );
}