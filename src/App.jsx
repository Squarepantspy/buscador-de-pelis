import React, {useEffect, useRef, useState, useCallback} from 'react'
import './App.css'
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
import Movies from './components/Movies';
import debounce from "just-debounce-it"
function App() {
  const [sort, setSort]= useState(false) 
  const firstInput = useRef(true)
  const {search, setSearch,error}= useSearch()
  const {movies, getMovies, loading} = useMovies({search, sort}) // el sort le pasamos a useMovies

  //esta funcion necesita el use callback de manera a que la funcion no se cree cada vez que se renderiza, de esa manera puede contar cuantas veces se llama a la misma funcion
  const debouncedGetMovies = useCallback(debounce(search=>{
    console.log('search',search)
    getMovies({search})
  },300),[])

// sabemos que la funcion getmovies se rendiza cada vez que cambia el search, ojo se renderiza pero no se ejecuta
  /* useEffect(()=>{
    console.log("se renderiza la funcion getmovies")
  },[getMovies]) */ 

  const handleSubmit =(e)=>{
    e.preventDefault()
    getMovies({search})
  }

  const handleSort = ()=>{
    setSort(!sort) //para activar desactivar un true false
  } 

  const handleChange = (e)=>{
    const newSearch = e.target.value;
    if (newSearch.startsWith(' ')) return
    firstInput.current = false
    setSearch(e.target.value)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='page'>
      <h2>Buscador de peliculas pruebas tecnicas</h2>
      <header>
        <form onSubmit={handleSubmit}>
          <label className='form-label' htmlFor='inputsearch'>Busca tu pelicula favorita</label>
          <input  type="text" placeholder='Avengers, Avatar, Batman,.. etc' name="busqueda" id="inputsearch" onChange={handleChange} value={search}/>
          <input type='checkbox' onChange={handleSort} checked={sort}/>
          <input type="submit" value="Buscar" />
        </form>
        {error && <p style={{color : 'red'}}>{error}</p> //se ejecuta cuando error no es falsy
        }
      </header>
      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} firstInput={firstInput}/>
        }
      </main>
    </div>
  )
}

export default App
