import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;    
    _cliente;
    _saldo = 0; // #saldo = 0 Ver sobre a sintaxe privada: https://github.com/tc39/proposal-class-fields#private-fields


    
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo
    }
    
    constructor(cliente, agencia){
        theis.agencia = agencia;
        this.cliente = cliente;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor // Valor do troco
        }
    }

    depositar(valor){
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
