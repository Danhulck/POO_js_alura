import { Cliente } from "./Cliente.js"; // https://dev.to/devaugusto/como-solucionar-o-erro-execucao-de-scripts-desabilitada-neste-sistema-execution-scripts-is-disabled-on-this-system-error-25ch?signin=true 
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);
