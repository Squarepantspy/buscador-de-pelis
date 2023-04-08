import React from 'react'

const Hasmovies = ({movies})=>{

    return (
        <ul className='movies'>{
            movies.map((movie)=><li className='movie' key={movie.id}>
                                    <h3>{movie.nombre}</h3>
                                    <p>{movie.year}</p>
                                    <img src={movie.url} alt={movie.nombre} />
                                </li>)
          }</ul>
    )
}

const Nomovies = ({firstInput})=>{
    return (<>
        {firstInput.current ? "" :
        <h2>No se han encontrado resultados para tu busqueda realizada</h2>
}</>)
}



const Movies = ({movies, firstInput}) => {
    const hasMovies = movies?.length > 0  //opcional chaining operator https://v8.dev/features/optional-chaining ES2020 verifica si es que existe y luego pregunta la longitud
    
  return (
    hasMovies ? <Hasmovies movies={movies}/> : <Nomovies firstInput={firstInput}/> //buenas practicas que en renderizados condicionales se rendericen componentes
  )
}

export default Movies