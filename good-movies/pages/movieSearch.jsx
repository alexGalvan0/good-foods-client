import axios from "axios";
import { useState } from "react";
import Link from 'next/link'

import Image from 'next/image'
//http://img.omdbapi.com/?apikey=[yourkey]&


function MovieSearch() {
    const API_KEY = "b29c9a1a"

    const [data, setData] = useState([]);
    const [movie, setMovie] = useState('')
    let title = movie.replaceAll(' ', '+')
    let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`

    const getMovies = async () => {
        let req = axios.get(url)
        let resp = await req
        setData([resp.data.Search])
    }
    const getSerach = (e) => {
        setMovie(e.target.value)
    }


    let tenData = data.slice(0, 11)
    let movies = tenData[0]



    return (
        <div className="container">
            <div className="row pb-5">
                <div className="col-4">
                    <h2 className="text-light">Search Movie</h2>
                    <input type="search" onChange={getSerach} value={movie} className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
                    <button onClick={getMovies} className="btn btn-primary">Search</button>
                </div>
            </div>



            <div className="row">
                <div className="col">
                    <h2 className="text-light">Movies: </h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {data.length > 0 ? movies.map((d) => (
                        <Link href={`/movie/${d.imdbID}`}><Image key={d.imdbID} src={d.Poster} alt={d.Title} width={200} height={400} /></Link>
                    )) : <></>}
                </div>
            </div>



        </div>
    )
}

export default MovieSearch;