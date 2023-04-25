export class Negociacoes {
    constructor() {
        this.negociacoes = []; //Array<Negociacao> == Negociacao[]
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    ;
    lista() {
        return this.negociacoes; //ReadonlyArray<Negociacao == readonly Negociacao[]>
    }
    ;
}
;
const negociacoes = new Negociacoes();
