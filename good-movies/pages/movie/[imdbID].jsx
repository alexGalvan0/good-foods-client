import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';


function MovieProfile() {
    const API_KEY = "b29c9a1a"
    const router = useRouter();
    const [movieData, setMovieData] = useState({})
    const { imdbID } = router.query;
    let url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`

    useEffect(() => {
        const req = async () => {
            const data = axios.get(url)
            const response = await data
            setMovieData(response.data)
        }
        req()

    }, [])


    return (
        <h1 className='text-light'>{movieData.Title}</h1>
    )
}

export default MovieProfile;

