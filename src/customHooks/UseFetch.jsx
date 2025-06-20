import axios from "axios"
import { useEffect, useState } from "react"

export const UseFetch = (apiPath,queryTerm="") => {
    const [data, setData] = useState([])
    const key = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`;
    
    useEffect(() => {
        async function fetchApi() {
            const res = await axios.get(url)
            try {
                setData(res.data.results)
            }
            catch (error){
                console.log("Api Error:", error);
            }}
        fetchApi()
    },[url])
    return {data};
}