export class Negociacao {
    
    private _data: Date;
    public readonly quantidade: number;
    public readonly valor: number;

    constructor(data: Date, quantidade: number, valor: number){
        this._data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    };

    /* constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number
    ){}; */

    get getData(): Date{
        const data = new Date(this._data.getTime());
        return data;
    };

    get getQuantidade(): number{
        return this.quantidade;
    };

    get getValor(): number{
        return this.valor; 
    };

    get getVolume(): number{
        return this.quantidade * this.valor;
    }
};