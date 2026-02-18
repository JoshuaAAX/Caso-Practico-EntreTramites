/** 
 * Calcula la longitur de cada cadena del array
 * Parámetros: string[] -> array de cadena de texto
 * retorna: number[] -> array con las longitud de cada cadena
 * 
 */


function logitudCadenasArray(nombres) {
    let resultado = [];

    for (let nombre of nombres) {
         resultado.push(nombre.length);
    }

    return resultado;
}

console.log(longitudCadenasArray(['Carlos', 'Pedro', 'Elisenda']));