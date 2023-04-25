export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    ;
    /* constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number
    ){}; */
    get getData() {
        const data = new Date(this._data.getTime());
        return data;
    }
    ;
    get getQuantidade() {
        return this.quantidade;
    }
    ;
    get getValor() {
        return this.valor;
    }
    ;
    get getVolume() {
        return this.quantidade * this.valor;
    }
}
;
