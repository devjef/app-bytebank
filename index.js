import { ContaCorrente } from './ContaCorrente.js';
import { Cliente } from './Cliente.js';

//Criando novas Contas
const contaCliente1 = new ContaCorrente('Jeferson', 12345678910, 1001, 10000);
const contaCliente2 = new ContaCorrente('Karen', 10789456123, 1002, 25000);;

//Depositando e sacando das contas
contaCliente1.depositar(7000);
contaCliente2.depositar(9000);

contaCliente1.sacar(2000);
contaCliente2.sacar(5000);

//Transferindo de Conta para Conta
contaCliente1.transferir(2000, contaCliente2);

console.log(`\nO saldo de ${contaCliente1.nome} é R$${contaCliente1._saldo}`);
console.log(`\nO saldo de ${contaCliente2.nome} é R$${contaCliente2._saldo}`);

//alterando os dados cadastrados do cliente
console.log('\n', contaCliente1);
contaCliente1.alteraDadosCliente = new Cliente('Jeferson Oliveira Lopes', 258741963);
console.log('\n', contaCliente1);

//verificando o número de contas criadas através do atributo estático de ContaCorrente
console.log('\nContas criadas:', ContaCorrente.numeroDeContas);