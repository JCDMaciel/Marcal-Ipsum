const MarcalController = {
    gerarFraseAleatoria: function() {
        const randomIndex = Math.floor(Math.random() * Marcal.Frases.length);
        return Marcal.Frases[randomIndex];
    },
};