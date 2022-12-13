import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


import { Container } from '@mui/material';

export default function Toggle({setSearchType}) {
  const [alignment, setAlignment] = useState('movie');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
    setSearchType(newAlignment)
  };

  return (
    <Container sx={{paddingLeft:-2}}>
      <ToggleButtonGroup
        sx={{ bgcolor:'primary.main',marginBottom:2,  marginRight:0 }}
        color="secondary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton sx={{bgcolor:'secondary.main'}} value="user">User</ToggleButton>
        <ToggleButton sx={{bgcolor:'secondary.main'}} value="movie">Movie</ToggleButton>
      </ToggleButtonGroup>
    </Container>
  );
}