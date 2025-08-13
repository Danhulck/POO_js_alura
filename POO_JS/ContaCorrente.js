export class ContaCorrente {
    agencia;
    // #saldo = 0 Ver sobre a sintaxe privada: https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

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
}
