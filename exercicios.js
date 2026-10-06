// Exercício 1 - Hora de usar as setas

let carrinho = [
    { nome: 'abacaxi', preco: '2.00' },
    { nome: 'detergente', preco: '2.50' },
    { nome: 'bolacha', preco: '3.80' }
];

const imprimeProduto = (nome, preco) => {
    console.log(Produto: ${nome} | Preço: ${preco});
};

carrinho.forEach((produto) => {
    imprimeProduto(produto.nome, produto.preco);
});
// Exercício 2 - Vou lavar sua boca com sabão!

let palavroes = [
    "Inconstitucionalíssimo",
    "Otorrinolaringologista",
    "Pneumoultramicroscopicossilicovulcanoconiose",
    "Oftalmotorrinolaringologista"
];

let tamanhos = palavroes.map(palavrao => palavrao.length);

console.log(tamanhos);
