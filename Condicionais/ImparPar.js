const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares); 
const numerosImpares = numeros.filter(numero => numero % 2 !== 0);
console.log(numerosImpares);
function separarNumerosParesEImpares(numeros) {
    const numerosPares = numeros.filter(numero => numero % 2 === 0);
    const numerosImpares = numeros.filter(numero => numero % 2 !== 0);
    return { numerosPares, numerosImpares };
  }
  
  const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const resultado = separarNumerosParesEImpares(numeros);
  console.log(resultado);