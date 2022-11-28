import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image  from 'next/image';


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
            console.log(movieData)
        }
        req()

    }, [])


    return (
        
            <div className="media">
                <img src={movieData.Poster} className="mr-3" alt="movie" />
                <div className="media-body text-light">
                    <h5 className="mt-0 text-light">{movieData.Title}</h5>
                    <p>{movieData.Plot}</p>
                </div>
            </div>
        
    )
}

export default MovieProfile;

