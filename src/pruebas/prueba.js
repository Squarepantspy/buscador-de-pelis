const error = "s";

const value = error && "Esto se ejecuta cuando no es falsy el valor"
console.log(value,error)

//recurso https://dmitripavlutin.com/javascript-and-or-logical-operators/
//chequea por operandos falsy de izquierda a derecha y si ninguno es falsy retorna el final
//los falsys son
//Falsy values in JavaScript are only false, 0, '', null, undefined and NaN.
console.log(Boolean(null))
console.log(true && 1 && { name: 'John' })