import axios from 'axios'
const {VITE_OMDB_KEY}= import.meta.env


export const searchMovies = async({search})=>{
    if (search === "") return null
    try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${VITE_OMDB_KEY}&s=${search}`)
        const movies = response.data.Search

        return movies?.map(movie=>({
            nombre : movie.Title,
            id : movie.imdbID,
            url : movie.Poster,
            year : movie.Year
        }))
    
    }catch(e){
        throw new Error('Error searching movies')
    }

}