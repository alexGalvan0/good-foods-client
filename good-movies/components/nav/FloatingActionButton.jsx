import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router'


export default function FloatingActionButtons() {
    const router = useRouter();
    const goToSearchMovie = (e) => {
        e.preventDefault();
        router.push('/movie/search');
    }
  return (
    <div className='text-end floating-search'>
    <Box sx={{ '& > :not(style)': { mr: 3 } }}>
      <Fab onClick={goToSearchMovie} color="primary" aria-label="add">
        <SearchIcon />
      </Fab>
    </Box>
    </div>
  );
}