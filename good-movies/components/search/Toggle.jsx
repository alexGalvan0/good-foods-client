import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';

import { Container } from '@mui/material';

export default function Toggle() {
  const [alignment, setAlignment] = React.useState('user');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
  };

  return (
    <Container>
      <ToggleButtonGroup
        sx={{ bgcolor: 'primary.main',marginBottom:2 }}
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