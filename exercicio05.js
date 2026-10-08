// Exercício 5 - Desestruturação

const usuario = {
    email: "antonia@email.com",
    nome: "Antônia",
    idade: 33
};

const { email, nome, idade } = usuario;

console.log(email);
console.log(nome);
console.log(idade);
