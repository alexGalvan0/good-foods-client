import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://media-exp1.licdn.com/dms/image/D5635AQEuPbuqHqr_XA/profile-framedphoto-shrink_100_100/0/1666986341338?e=1670598000&v=beta&t=uBsBJiruWf4D6PILIdi8qwavh4tHwt61ZNGGx2gcJF4" />
    </Stack>
  );
}