function simulaPromise(sucesso) {
    const promise = new Promise((resolve, reject) => {
        if (sucesso) {
            resolve('ok');
        } else {
            reject('not ok');
        }
    });

    promise
        .then((resultado) => console.log(resultado))
        .catch((erro) => console.log(erro));
}

simulaPromise(false);
simulaPromise(true);
