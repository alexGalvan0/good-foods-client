import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function StarRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography sx={{fontWeight: 'bold'}} variant='h6'color='#FFFFFF' component="legend">Rate:</Typography>
      <Rating
        
        name="simple-controlled"
        value={value}
        size="large"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />

    </Box>
  );
}