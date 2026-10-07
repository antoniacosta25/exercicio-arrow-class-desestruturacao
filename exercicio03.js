// Exercício 3 - Rest e Spread

// Rest (...) reúne vários valores em uma única variável.
function soma(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}

console.log(soma(10, 20, 30));

// Spread (...) espalha os valores de um array.
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

const todosNumeros = [...numeros1, ...numeros2];

console.log(todosNumeros);
