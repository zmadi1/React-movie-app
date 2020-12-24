import React from 'react'
import "./Movieitem.css"

export default function Movieitem({item}) {

    const baseUrl = "https://image.tmdb.org/t/p/w500/";

    return (
        <div className="card col-lg-3 moviecard">
            <img src = {`${baseUrl}${item.poster_path}`} className="img-fluid" alt="img"/>
           <div className="card-body">
                <h3>Rating:{item.vote_average}</h3>
           </div>
        </div>
    )
}
