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
// Exercício 6 - Cara-Crachá

const profissional = {
    titulo: 'Engenheiro de Software',
    departamento: 'Engenharia'
};

function isEngenheiro({ titulo, departamento }) {
    return titulo.indexOf("Engenheiro") > -1 && departamento === "Engenharia";
}

console.log(isEngenheiro(profissional)); // true

profissional.titulo = 'Marketing';

console.log(isEngenheiro(profissional)); // false
// Exercício 7 - O meu videogame é muito melhor que o seu

class VideoGame {
    constructor(nome, fabricante, ano) {
        this.nome = nome;
        this.fabricante = fabricante;
        this.ano = ano;
    }
}

class PlayStation extends VideoGame {
    constructor(nome, fabricante, ano, nEntradasUSB, voltagem, adicionais) {
        super(nome, fabricante, ano);
        this.nEntradasUSB = nEntradasUSB;
        this.voltagem = voltagem;
        this.adicionais = adicionais;
    }
}

const playstation = new PlayStation(
    'PlayStation 5',
    'Sony',
    2020,
    3,
    110,
    ['Controle sem fio', 'Headset']
);

console.log(playstation);
// Exercício 8 - Você cumpre as suas promessas?

function simulaPromise(sucesso) {
  return new Promise((resolve, reject) => {
    if (sucesso) {
      resolve("ok");
    } else {
      reject("not ok");
    }
  })
    .then((mensagem) => {
      console.log(mensagem);
    })function simulaPromise(valor, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (valor) {
        resolve("ok");
      } else {
        reject("not ok");
      }
    }, delay);
  });
}
function simulaPromise(valor, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (valor) {
        resolve("ok");
      } else {
        reject("not ok");
      }
    }, delay);
  });
}

simulaPromise(true, 2000)
  .then((data) => console.log(data))
  .catch((erro) => console.log(erro));

simulaPromise(false, 1000)
  .then((data) => console.log(data))
  .catch((erro) => console.log(erro));
promise
  .then((data) => {
    console.log(resultado positivo: ${data});
    return data;
  })
  .then((data) => {
    console.log(resultado positivo 2: ${data});
  })
  .catch((data) => {
    console.log(resultado negativo: ${data});
  });
