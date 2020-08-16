import { Conta } from './Conta.js'

export class ContaPoupanca extends Conta {

    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);

        console.log(`\nNova Conta Poupança criada com sucesso. Nome: ${this._cliente.nome}, CPF: ${this._cliente.cpf}, Agência: ${this._agencia}, Saldo: ${this._saldo}`);
    };

    //sobrescrevendo o metodo sacar da classe pai
    sacar(valor) {
        const taxa = 1.02;
        super._sacar(valor, taxa);
        console.log(`\n${this._cliente.nome}, você sacou: R$${valor} da sua Conta Poupança. Seu saldo atual é R$${this._saldo}`);
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