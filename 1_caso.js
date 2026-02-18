/** 
 * Calcula la longitur de cada cadena del array
 * Parametro: string[] -> array de cadena de texto
 * retorna: number[] -> array con las longitud de cada cadena
 * 
 */


function logitudCadenasArray(nombres) {
    let resultado = [];

    for (let nombre of arr) {
         resultado.push(nombre.length);
    }

    return resultado;
}

console.log(longitudCadenasArray(['Carlos', 'Pedro', 'Elisenda']));