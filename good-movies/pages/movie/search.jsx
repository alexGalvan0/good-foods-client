import axios from "axios";
import { useState } from "react"
import Toggle from "../../components/search/Toggle";
import Link from 'next/link'
import Button from '@mui/material/Button';





function MovieSearch({ typeOfSearch }) {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const OMDB_URL = "https://www.omdbapi.com/"
    const BASE_URL = "http://127.0.0.1:8000/api/"

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('')

    const [searchType, setSearchType] = useState('movie')
    const [movieResults, setMovieResults] = useState(false)
    const [userResults, setUserResults] = useState(false)
    let title = search.replaceAll(' ', '+')


    const getMovies = async () => {
        let req = axios.get(`${OMDB_URL}?apikey=${API_KEY}&s=${title}&type=movie`)
        let resp = await req
        setData(resp.data.Search)
    }
    const getSerach = (e) => {
        setSearch(e.target.value)
    }
    const results = () => {
        setMovieResults(true)
    }

    const getFriends = async () => {
        let req = axios.get(`${BASE_URL}getUserByUsername/${search}`)
        let resp = await req
        setData(resp.data)
        console.log(resp.data)
    }

    const displayResult = () => {
       if(searchType === 'movie'){
        getMovies()
        results()
       } 
       if(searchType === 'user'){
        getFriends()
       }
    }



    return (
        <div className="container mt-5 pt-5">
            <div className="row pb-5">
                <div className="col col-lg-4">
                    <Toggle setSearchType={setSearchType} />
                    <input type="search" onChange={getSerach} value={search} className="form-control form-control-dark text-bg-light mb-2" placeholder="Search..." aria-label="Search" />
                    <Button sx={{ bgcolor: 'primary.main' }} color='secondary' onClick={displayResult}>Search</Button>
                </div>
            </div>
            {searchType == 'movie' &&
                movieResults ?
                <div>
                    <div className="row">
                        <div className="col">
                            <h2 className="text-light">Movies: </h2>
                        </div>
                    </div>
                    <div className="row mb-5 pb-5">
                        <div className=" mb-5 d-flex gap-5 p-3 rounded bg-black" style={{ maxWidth: '100vw', overflow: 'hidden', overflow: 'auto' }}>
                            {data.splice(0, 5).length > 0 ? data.map((d) => (
                                <Link className="rounded" href={`/movie/${d.imdbID}`}><img key={d.imdbID} src={d.Poster} alt={d.Title} width={250} height={400} /></Link>
                            )) : <></>}
                        </div>
                    </div>
                </div>
                : null}

            {searchType == 'user' &&
                userResults ?
                <div>
                    <div className="row">
                        <div className="col">
                            <h2 className="text-light">Users: </h2>
                        </div>
                    </div>
                    <div className="row mb-5 pb-5">
                        <div className=" mb-5 d-flex gap-5 p-3 rounded bg-black" style={{ maxWidth: '100vw', overflow: 'hidden', overflow: 'auto' }}>
                            {/* {data.splice(0, 5).length > 0 ? data.map((d) => (
                                // <Link className="rounded" href={`/movie/${d.imdbID}`}><img key={d.imdbID} src={d.Poster} alt={d.Title} width={250} height={400} /></Link>
                            )) : <></>} */}
                        </div>
                    </div>
                </div>
                : null}

        </div>
    )
}

export default MovieSearch;