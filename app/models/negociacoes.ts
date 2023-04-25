import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = []; //Array<Negociacao> == Negociacao[]

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    };

    lista(): ReadonlyArray<Negociacao>{ //apenas leitura 'ReadonlyArray
        return this.negociacoes;       //ReadonlyArray<Negociacao == readonly Negociacao[]>
    };
};

const negociacoes = new Negociacoes();
