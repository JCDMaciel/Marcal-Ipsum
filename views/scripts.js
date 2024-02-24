function gerarFrases(quantidade) {
    const fraseContainer = document.getElementById('frase-container');
    fraseContainer.innerHTML = '';

    const frasesGeradas = new Set();

    for (let i = 0; i < quantidade; i++) {
        let fraseAleatoria;

        do {
            fraseAleatoria = MarcalController.gerarFraseAleatoria();
        } while (frasesGeradas.has(fraseAleatoria.id));

        frasesGeradas.add(fraseAleatoria.id);

        const p = document.createElement('p');
        p.innerHTML = `${fraseAleatoria.conteudo}`;
        fraseContainer.appendChild(p);
    }
}

function copiarFrases() {
    const fraseContainer = document.getElementById('frase-container');
    const textToCopy = Array.from(fraseContainer.getElementsByTagName('p')).map(p => p.innerText).join('\n');

    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

gerarFrases(1);
