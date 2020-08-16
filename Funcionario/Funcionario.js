import { Diretor } from './Diretor.js';

export class Funcionario {

    constructor(nome, salario, cpf) {
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._senha;

        let tipoFuncionario;
        
        if(this.constructor == Diretor) {
            tipoFuncionario = 'Diretor';
        } else {
            tipoFuncionario = 'Gerente';
        };

        console.log(`\nNovo funcionário cadastrado de nível ${tipoFuncionario}: ${this._nome}, CPF: ${this._cpf}, Salário: ${this._salario}`);
    };

    autenticar(senha) {
        return senha == this._senha;
    };

    cadastraSenha(senha) {
        this._senha = senha;
    };
};