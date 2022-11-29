import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';


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
        <div className="container rounded border bg-secondary p-2">
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

                </div>
            </div>
        </div>



    )
}

export default MovieProfile;

