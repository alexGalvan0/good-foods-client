import useUser from "../hooks/useUser";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  let user = useUser();
  const url = `http://127.0.0.1:8000/api/getUserLikedMovies/${user.id}`;

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const request = await axios.get(url);
      const response = request;
      setData(response.data);
    };
    user.id != undefined ? getData(): null

  }, [user]);

  return (
    <div className="container mt-5 mb-5 pb-5">
      <div className="row">
        <div className="col">
          <div className="p-5 mb-4 bg-primary rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold text-light">
                @ {user.username? user.username: localStorage.getItem('firstName')} 
              </h1>
              <h6 className="text-light"> Movies Liked: {data.length}</h6>

              <Link href="movie/search"> 
                <button
                  className="btn btn-alert btn-lg text-light"
                  type="button"
                >
                  Search Movies
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <h3 className="text-light bg-dark rounded">Liked Movies: </h3>
        <div
          className=" border rounded mb-5 bg-dark py-2 "
          style={{
            maxHeight: "40rem",
            overflow: "hidden",
            overflow: "auto",
            width: "30rem",
          }}
        >
          {data.length > 0?
          data.map((m) => (
            <>
              <div className="d-flex text-center">
                <Image src={m.poster} alt="" height={200} width={150} />
                <div
                  className="d-flex  row  align-items-center"
                  style={{ width: "20rem" }}
                >
                  <h5 className="text-light">Title: {m.title}</h5>
                  <p className="text-light">Director: {m.director}</p>
                  <p className="text-light">Year: {m.year}</p>
                </div>
              </div>
              <div className="">
                <button
                  onClick={async () => {
                    let request =  axios.delete(`http://127.0.0.1:8000/api/addLikedList/${user.id}/${m.imdbId}/`);
                    let response = await request
                    setData(response.data);
                  }}
                  className="btn btn-lg btn-alert text-light bold"
                >
                  x
                </button>
              </div>
              <hr className="text-light" />
            </>
          )):null}
        </div>
      </div>
    </div>
  );
}
export default Profile;
