function Frase(id, conteudo) {
    this.id = id;
    this.conteudo = conteudo;
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Frase;
} else {
    window.Frase = Frase;
}
