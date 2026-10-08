// Exercício 10 - Promises

function simulaPromise(sucesso, delay) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sucesso) {
                resolve("ok");
            } else {
                reject("not ok");
            }
        }, delay);
    });

    return promise;
}

const promise = simulaPromise(true, 2000);

promise
    .then((resultado) => {
        console.log("resultado positivo: " + resultado);
        return resultado;
    })
    .then((resultado) => {
        console.log("resultado positivo 2: " + resultado);
    })
    .catch((erro) => {
        console.log("resultado negativo: " + erro);
    });

simulaPromise(false, 1000)
    .then((resultado) => {
        console.log("resultado positivo: " + resultado);
    })
    .catch((erro) => {
        console.log("resultado negativo: " + erro);
    });
