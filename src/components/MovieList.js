import React,{ useState,useEffect } from 'react'
import Movieitem from './Movieitem'
import axios from "axios"

const MovieList = ()=> {

    const [items,setitems]=useState([]);

    useEffect(() => {

        const key = "38f99cc0181fc7786eafec4c9193e97f";

        const getMoviedata = async()=>{
            const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
            // console.log(res.data.results);
            setitems(res.data.results)
        };
    
    
        getMoviedata();

    }, [])


    return (
        <div>
            <div className="container">
                <div className="row">

                    {items.map((item)=>(
                        <Movieitem key={item.id} item={item}/>
                    ))}
                    
                </div>
            </div>

        </div>
    )
}

export default MovieList
