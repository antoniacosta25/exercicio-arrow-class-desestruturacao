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

// Exercício 3 - Não são só umas reticências?

// Rest: agrupa vários valores em uma única variável.
// Spread: espalha os elementos de um array ou objeto.
// Exercício 4 - A união faz a força

const equipeMarketing = ['Joana', 'Marcela', 'Bruna'];
const equipeComercial = ['Talita', 'Luisa', 'Vitória'];

const timeCompleto = [...equipeMarketing, ...equipeComercial];

realizaBrainstorm(timeCompleto);
// Exercício 5 - Pegando a propriedade na lata

const { email, nome, idade } = usuario;
