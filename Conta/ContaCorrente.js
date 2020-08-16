import { Conta } from './Conta.js'

export class ContaCorrente extends Conta {

    constructor(cliente, agencia) {
        super(0, cliente, agencia);

        ContaCorrente.numeroDeContas++;
        console.log(`\nNova Conta Corrente criada com sucesso. Nome: ${this._cliente.nome}, CPF: ${this._cliente.cpf}, Agência: ${this._agencia}`);
    };

    static numeroDeContas = 0;
    
    //sobrescrevendo o metodo sacar da classe pai
    sacar(valor) {
        const taxa = 1.1;
        super._sacar(valor, taxa);
        console.log(`\n${this._cliente.nome}, você sacou: R$${valor} da sua Conta Corrente(${taxa}% de taxa). Seu saldo atual é R$${this._saldo}`);
    };

    depositar(valor) {
        super.depositar(valor);
        console.log(`\n${this._cliente.nome}, foi depositado: R$${valor} na sua Conta Corrente. Seu saldo atual é R$${this._saldo}`);
    };

    transferir(valor, conta){
        super.transferir(valor, conta);
        console.log(`\n${this._cliente.nome}, você transferiu R$${valor} da sua Conta Corrente para ${conta._cliente.nome}, seu saldo atual é R$${this._saldo}`);
    };
};