import { Cliente } from '../Cliente.js';

// classe abstrata
export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error('Você não deveria estar instânciando a classe Conta!!!')
        };

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    };

    set alteraDadosCliente(cliente) {

        if(cliente instanceof Cliente) {
            this._cliente = cliente;
            console.log(`\nOs dados foram alterados: Nome ${this._cliente.nome} CPF ${this._cliente.cpf}`);
        } else {
            console.log('\nNão foi possível alterar os dados cadastrais!');
        };
    }

    get agencia() {
        return this._agencia;
    };

    get saldo() {
        return this._saldo;
    };

    get cliente() {
        return this._cliente;
    };

    get nome() {
        return this._cliente.nome;
    };

    get cpf() {
        return this._cliente.cpf;
    };

    // Método abstrato, sempre será sobrescrito pela classe filha
    sacar(valor) {
        throw new Error('O método sacar da conta é abstrato')
    };

    _sacar(valor, taxa) {
        const valorSacado = valor * taxa;
        if (valor > valorSacado) return console.log('\nSaldo insuficiente para realizar operação.');
        
        this._saldo -= valorSacado;
    }

    depositar(valor) {
        if (valor <= 0) return console.log('\nErro ao realizar operação.');
        this._saldo += valor; 
    };

    transferir(valor, conta) {
        if (valor > this._saldo) return console.log('\nSaldo insuficiente para realizar operação.');
        this.sacar(valor);
        conta.depositar(valor);
    };
}