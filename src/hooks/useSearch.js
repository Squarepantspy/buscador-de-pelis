import React, {useState, useEffect,useRef} from "react"
//useRef : es un hook que te permite crear una referencia mutable que persiste durante todo el periodo de vida del componente y que cada vez que cambia no vuelve a renderizar el componente 
//Nos permite crear un valor que persiste en el renderizado, puede cambiar su valor y no vuelve a renderizar tambien sirve para elemento del DOM
//useRef no dispara el renderizado como si lo hace el useState
export function useSearch (){
    const firstInput = useRef(true)
    const [search, setSearch]= useState("")
    const [error, setError]=useState("")
    useEffect(()=>{
      if (firstInput.current){
        firstInput.current = search === ""
        return //el return sin nada retorna undefined
      }
  
      if (search === "" ){
        setError("El campo de busqueda no puede estar vacio")
        return
      }
      if (search.length < 3 ){
        setError("La longitud de busqueda debe ser mayor a 3")
        return
      }
  
      setError(null)
    },[search])
  
    return {search, setSearch, error}
  }