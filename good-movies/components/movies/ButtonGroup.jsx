function ButtonGroup({mData, user}) {


    const addMovieToDb = () => {
        console.log(mData)
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