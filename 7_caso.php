<?php
/**
 * Genera un array de los n primero números primos
 * Parámetros: int -> cantidad de números primos a generar
 * Retorna: array -> array de n numeros primos
 */

function arrayPrimos(int $cuantos_primos): array {
    $primos = [];
    $candidato = 2;

    while (count($primos) < $cuantos_primos) {
        $esPrimo = true;
        
        for ($numero_divisor = 2; $numero_divisor <= sqrt($candidato); $numero_divisor++) {
            if ($candidato % $numero_divisor === 0) {
                $esPrimo = false;
                break;
            }
        }
        if ($esPrimo) {
            $primos[] = $candidato;
        }
        $candidato++;
    }

    return $primos;
}

print_r(arrayPrimos(10)); // → [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
?>