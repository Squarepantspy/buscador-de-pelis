## buscador de pelis utilizando React
### Tecnologias utilizadas
Requisitos
- Grid responsive
- Debounce al tipear, que detecte luego de un tiempo
- Que no se repita la busqueda si la anterior fue la misma useRef --> previusSearch
- Utilizacion de useMemo para que no hagan computaciones cada vez de cambio en un input, en el caso de sort
- Utilizacion de useCallback para funciones que no se vuelva a recrear la funcion en cada re-render para debounce
