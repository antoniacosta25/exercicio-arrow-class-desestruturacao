const profissional = {
    titulo: 'Engenheiro de Software',
    departamento: 'Engenharia'
};

function isEngenheiro({ titulo, departamento }) {
    return titulo.indexOf("Engenheiro") > -1 && departamento === 'Engenharia';
}

console.log(isEngenheiro(profissional));

profissional.titulo = 'Marketing';

console.log(isEngenheiro(profissional));
