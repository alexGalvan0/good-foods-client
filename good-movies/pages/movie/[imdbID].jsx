import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


import useUser from "../../hooks/useUser"
import ButtonGroup from '../../components/movies/ButtonGroup';
import axios from 'axios';


function MovieProfile({mData, uData}) {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY

    const router = useRouter();

    const [movieData, setMovieData] = useState({})


    const { imdbID } = router.query;
 
    useEffect(() => {
        const req = async () => {
            let url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`
            const data = axios.get(url)
            const response = await data
            setMovieData(response.data)
        }
        req()

    }, [])


    mData = movieData
    uData = useUser()
    return (
        <div className="container rounded bg-primary my-5 text-center text-lg-start pt-5 mb-5 pb-5 p-md-5">
            <div className="row">
                <div className="col">
                    <div className="media">
                        <img src={movieData.Poster} className="mr-3" alt="movie" />
                        <div className="media-body">
                            <h3 className="bold mt-2 text-light">{movieData.Title}</h3>
                            <p className='text-light'>Plot: {movieData.Plot}</p>
                            <p className='text-light'>Director: {movieData.Director}</p>
                            <p className='text-light'>Rated: {movieData.Rated}</p>
                            <p className='text-light'>Released: {movieData.Released}</p>
                            <p className='text-light'>Runtime: {movieData.Runtime}</p>
                        </div>
                    </div>
                    <ButtonGroup mData={mData} uData={uData} />
                </div>
            </div>
        </div>



    )
}

export default MovieProfile;

