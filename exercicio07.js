class VideoGame {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

class PlayStation extends VideoGame {
    constructor(marca, modelo, nEntradasUSB, voltagem, adicionais) {
        super(marca, modelo);
        this.nEntradasUSB = nEntradasUSB;
        this.voltagem = voltagem;
        this.adicionais = adicionais;
    }
}

const playStation = new PlayStation(
    'Sony',
    'PlayStation 5',
    3,
    110,
    ['Controle sem fio', 'Volante']
);

console.log(playStation);
