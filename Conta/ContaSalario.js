import { Conta } from './Conta.js';

export class ContaSalario extends Conta {

    constructor(cliente) {
        super(0, cliente, 1003);
        console.log(`\nNova Conta Salário criada em nome de ${this._cliente.nome}`)
    };

    sacar(valor) {
        const taxa = 1.01;
        super._sacar(valor, taxa);
        console.log(`\n${this._cliente.nome}, você sacou: R$${valor} da sua Conta Salário. Seu saldo atual é R$${this._saldo}`);
    }; 

    depositar(valor) {
        super.depositar(valor);
        console.log(`\n${this._cliente.nome}, foi depositado: R$${valor} na sua Conta Poupança. Seu saldo atual é R$${this._saldo}`);
    };
    
    transferir(valor, conta){
        super.transferir(valor, conta);
        console.log(`\n${this._cliente.nome}, você transferiu R$${valor} da sua Conta Poupança para ${conta._cliente.nome}, seu saldo atual é R$${this._saldo}`);
    };
};