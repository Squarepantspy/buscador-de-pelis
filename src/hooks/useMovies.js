import React, {useMemo, useRef, useState, useCallback} from 'react';
import { searchMovies } from '../services/movies';


export function useMovies ({search, sort}){ //custom hook //cada vez que cambia el search se ejecuta el cuerpo de la funcion

   const [movies, setMovies]=useState([])
   const [loading, setLoading]=useState(false)
   const [error, setError]=useState(null)
   const previousSearch = useRef(search)
    //useCallback es lo mismo que useMemo solo que esta diseñado para funciones es decir utiliza por detras al useMemo es para azucar sintactica 
    const getMovies = useCallback(async ({search})=>{ //cuando le pasamos por parametro se renderiza solamente una vez
        console.log("se ejecuta get movies")
        if (search === previousSearch.current) return //no hace la busqueda si igual a la anterior
        try{
        setLoading(true)
        setError(null)
        previousSearch.current = search; //siempre esto para referirse a cambio del la variable actual a la que hace referencia useRef
        const newMovies= await searchMovies({search})
        setMovies(newMovies)
        }catch(e){
            setError(e.message)
        }finally{ //semanticamente tiene mas sentido utilizar esto
            //despues del try y despues del catch
            setLoading(false)
        }   
    },[])
    //este calculo queremos memorizar y queremos que solo lo haga cuando cambia cierta informacion, no solo funciona con computaciones sino tambien con funciones 
    const sortedMovies = useMemo(()=>{
        console.log("memoSortedMovies")
        return sort 
        ? [...movies].sort((a,b)=> a.nombre.localeCompare(b.nombre))
        : movies},[sort,movies] )

    return {movies: sortedMovies, getMovies, loading}
}