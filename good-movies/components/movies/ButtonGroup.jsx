import axios from "axios";
import { useState } from "react";
import useUser from "../../hooks/useUser";

function ButtonGroup({mData}) {
    const user = useUser()
    const url = 'http://127.0.0.1:8000/api/movies/'

    const [movieData, setMovieData] = useState([])


    const config = {
        title: mData.Title,
        plot: mData.Plot,
        cast: mData.Actors,
        poster: mData.Poster,
        rated: mData.Rated,
        director: mData.Director,
        date_released: mData.Released,
        imdbId: mData.imdbID,
        year: mData.Year,
        //roten_score:mData.Ratings.toString(),
        run_time: mData.Runtime

    }

    const addMovieToDb = async () => {
        try{
        await axios.post(url, config)
        } catch {
            return
        }
        
    }
    const likeMovie = async () => {
        await addMovieToDb()
        let request = axios.post(`http://127.0.0.1:8000/api/addLikedList/${user.id}/${mData.imdbID}/`)
        let response = await request
    }



return (
    <div className="btn-group gap-1 bg-dark" role="group" aria-label="Basic example">
        <button type="button" onClick={likeMovie} className="btn btn-alert text-light">Like</button>
        <button type="button" className="btn btn-alert text-light">Add Watch List</button>
        <button type="button" className="btn btn-alert text-light">Review</button>
    </div>
)
}

export default ButtonGroup;





// title = models.CharField(max_length=255)
// plot = models.TextField(max_length=1000)
// cast = models.CharField(max_length=255)
// poster = models.URLField()
// rated = models.CharField(max_length=10)
// director = models.CharField(max_length=255)
// date_released = models.DateField()
// roten_score = models.IntegerField()

// #added
// run_time = models.IntegerField()
// imdbId = models.CharField(max_length=255, unique=True)
// year = models.IntegerField()