function Professor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome; 

    this.nomeCompleto = function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

module.exports = Professor;