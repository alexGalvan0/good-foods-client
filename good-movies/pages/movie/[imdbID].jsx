import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ButtonGroup from '../../components/movies/ButtonGroup';


function MovieProfile() {
    const API_KEY = "b29c9a1a"
    const router = useRouter();

    const [token, SetToken] = useState({})
    const [movieData, setMovieData] = useState({})
    const [userData, setUserData] = useState({})

    const { imdbID } = router.query;
 
    useEffect(() => {
        SetToken(localStorage.getItem('token'))
        const req = async () => {
            let url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`
            const data = axios.get(url)
            const response = await data
            setMovieData(response.data)
            
        }
        req()

    }, [])

    return (
        <div className="container rounded border bg-primary p-2 my-5">
            <div className="row">
                <div className="col">
                    <div className="media">
                        <img src={movieData.Poster} className="mr-3" alt="movie" />
                        <div className="media-body">
                            <h3 className="mt-0 text-light">{movieData.Title}</h3>
                            <p className='text-light'>Plot: {movieData.Plot}</p>
                            <p className='text-light'>Director: {movieData.Director}</p>
                            <p className='text-light'>Rated: {movieData.Rated}</p>
                            <p className='text-light'>Released: {movieData.Released}</p>
                        </div>
                    </div>
                    <ButtonGroup />
                </div>
            </div>
        </div>



    )
}

export default MovieProfile;

