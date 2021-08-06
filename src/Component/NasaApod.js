import React,{useState , useEffect} from "react";
import axios from "axios";

function NasaApodo(){

    const [nasa,setNasa] = useState([])

    console.log(nasa)

    useEffect(() =>{

        axios.get("https://api.nasa.gov/planetary/apod?api_key=jtfYOHO8r0xMoLUabN7HDa1Sa0zdqLOYRww1iVeq")
        .then((res) =>{
            setNasa(res.data)
        })
        .catch((error) => console.log(error))
        } , [])
    return (
        <div>
                    <h1>{nasa.title}</h1>
                    <p>{nasa.date}</p>
                    <img src={nasa.url} alt="img"/>
                    <p>{nasa.explanation}</p>
                    <p>{nasa.copyright}</p>

        </div>
    );
};

export default NasaApodo;