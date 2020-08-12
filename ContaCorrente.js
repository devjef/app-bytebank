import { Cliente } from './Cliente.js'

export class ContaCorrente {

    constructor(nome, cpf, agencia, saldo) {
        this._agencia = agencia;
        this._saldo = saldo;
        this._cliente = new Cliente(nome, cpf);
        ContaCorrente.numeroDeContas++

        console.log(`\nNova conta criada: Nome: ${this._cliente.nome}, CPF: ${this._cliente.cpf}, Agencia: ${agencia}, Saldo: ${saldo}, `);
    };

    static numeroDeContas = 0;

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
    }

    get nome() {
        return this._cliente.nome;
    }

    get cpf() {
        return this._cliente.cpf;
    }

    depositar(valor) {
        if (valor <= 0) return console.log('\nErro ao realizar operação.');

        this._saldo += valor;
        console.log(`\n${this._cliente.nome}, foi depositado: R$${valor} na sua conta :D seu saldo atual é R$${this._saldo}`);
    };

    sacar(valor) {

        if (valor > this._saldo) return console.log('\nSaldo insuficente para realizar operação.');

        this._saldo -= valor;
        console.log(`\n${this._cliente.nome}, você sacou: R$${valor}, seu saldo atual é R$${this._saldo}`);
    };

    transferir(valor, conta) {
        if (valor > this._saldo) return console.log('\nSaldo insuficente para realizar operação.');

        this.sacar(valor);
        conta.depositar(valor);

        console.log(`\n${this._cliente.nome}, você transferiu R$${valor} para ${conta._cliente.nome}, seu saldo atual é R$${this._saldo}`);
    };
};