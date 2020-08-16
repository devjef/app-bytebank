import { ContaSalario } from './Conta/ContaSalario.js';
import { ContaCorrente } from './Conta/ContaCorrente.js';
import { ContaPoupanca } from './Conta/ContaPoupanca.js';
import { Cliente } from './Cliente.js';
import { Diretor } from './Funcionario/Diretor.js';
import { Gerente } from './Funcionario/Gerente.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

// Criando novas Contas
const ContaCorrente1 = new ContaCorrente(new Cliente('Jeferson', 12345678910), 1001);
const ContaCorrente2 = new ContaCorrente(new Cliente('Karen', 10789456123), 1002);

// Depositando e sacando das contas
ContaCorrente1.depositar(7000);
ContaCorrente2.depositar(9000);

ContaCorrente1.sacar(2000);
ContaCorrente2.sacar(5000);

// Transferindo de Conta para Conta
ContaCorrente1.transferir(2000, ContaCorrente2);

console.log(`\nO saldo de ${ContaCorrente1.nome} é R$${ContaCorrente1._saldo}`);
console.log(`\nO saldo de ${ContaCorrente2.nome} é R$${ContaCorrente2._saldo}`);

// Alterando os dados cadastrados do cliente
console.log('\n', ContaCorrente1);
ContaCorrente1.alteraDadosCliente = new Cliente('Jeferson Oliveira Lopes', 258741963);
console.log('\n', ContaCorrente1);

// Verificando o número de contas criadas através do atributo estático de ContaCorrente
console.log('\nContas criadas:', ContaCorrente.numeroDeContas);

// Criando uma conta poupança
const contaPoupanca1 = new ContaPoupanca(2300, new Cliente('Jeferson', 12345678910), 1001);

contaPoupanca1.sacar(500)
contaPoupanca1.depositar(7000)
contaPoupanca1.transferir(300, ContaCorrente1);

// Criando uma conta salário
const contaSalario = new ContaSalario(new Cliente('Jeferson Lopes', 12345678910));
console.log(contaSalario);
contaSalario.depositar(1000);
contaSalario.sacar(300);

// Cadastro de funcionarios e clientes

const diretor = new Diretor('Jef Lopes', 60000, 12345678910);
const gerente = new Gerente ('Jeferson Junior', 30000, 12345678941);
const cliente1 = new Cliente('Lopes', 12345678915, '456');

// Cadastro de senha e login

diretor.cadastraSenha('589745212');
gerente.cadastraSenha('123');

const diretorEstaLogado = SistemaAutenticacao.login(diretor, '589745212');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123');
const clienteEstaLogado = SistemaAutenticacao.login(cliente1, '4567');

// Autenticação

console.log('\nDiretor está logado:', diretorEstaLogado);
console.log('\nGerente está logado:', gerenteEstaLogado);
console.log('\nCliente está logado:', clienteEstaLogado);