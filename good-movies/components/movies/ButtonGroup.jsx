import axios from "axios";
import { useState } from "react";

function ButtonGroup({mData, uData}) {

    const [movieData, setMovieData] = useState(null)


    const addMovieToDb = async () => {
        const url = 'http://127.0.0.1:8000/api/movies'
        const config =''
        const data = axios.get(url)
        const response = await data
        setMovieData(response)
        console.log(movieData)
    }

    return (
        <div className="btn-group gap-1 bg-dark" role="group" aria-label="Basic example">
            <button type="button" onClick={addMovieToDb} className="btn btn-alert text-light">Like</button>
            <button type="button" className="btn btn-alert text-light">Add Watch List</button>
            <button type="button" className="btn btn-alert text-light">Review</button>
        </div>
    )
}

export default ButtonGroup;