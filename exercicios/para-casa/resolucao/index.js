//exercicios feitos pela profa aqui
import { Bank } from './beatriz-locatelli/classes/Bank.js';
import { Client } from './beatriz-locatelli/classes/Client.js'
import { BankAccount } from './beatriz-locatelli/classes/BanksAccount.js';

console.log(Bank.createdBanks); // [ ]

const bank1 = new Bank(100, 'LuaBank', 0.01); // Instanciação de um objeto Bank.
console.log(bank1); // { bankCode: 100, bankName: 'LuaBank' }
// Agora a propriedade estática createdBanks é uma
// array que contém 1 objeto, que corresponde ao banco criado.
// O objeto possui o código do banco e a quantidade de clientes (que inicialmente é 0):
console.log(Bank.createdBanks); // [ { bankCode: 100, qtdClients: 0 } ]

console.log(bank1.transferTax); // 0.01
bank1.transferTax = 0.02
console.log(bank1.transferTax); // 0.02

const bank2 = new Bank(200, 'BiaBank', 0.05); 
console.log(bank2); 
console.log(Bank.createdBanks); 


const client1 = new Client('Maria', 123); // Instanciação de um objeto Client.
console.log(client1); // { name: 'Maria', banks: [] }
console.log(client1.cpf); // 12345678900

// Adicionando um banco a um cliente
client1.addBank(bank1); // Banco 100 adicionado à cliente Maria
console.log(client1);// { name: 'Maria', banks: [ Bank { bankCode: 100, bankName: 'LuaBank' } ] }

// Removendo um banco de um cliente
client1.removeBank(bank1); // Banco 100 removido da cliente Maria
console.log(client1); // { name: 'Maria', banks: [] }

const client2 = new Client('Bia', 321); 
console.log(client2); 
console.log(client2.cpf); 

// Adicionando um banco a um cliente
client2.addBank(bank2); 
console.log(client2);

// Removendo um banco de um cliente
client2.removeBank(bank2);
console.log(client2); 


const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222); // Instanciação de um objeto BankAccount.
console.log(bankAccount1);
// { 
//   client: Client { name: 'Maria', banks: [ [Bank] ] },
//   bank: Bank { bankCode: 100, bankName: 'LuaBank' },
//   accountNumber: 1111,
//   agencyNumber: 2222,
// }

console.log(bankAccount1.balance); // 0

const bankAccount2 = new BankAccount(client2, bank2, 5555, 6666); // Instanciação de um objeto BankAccount.
console.log(bankAccount2);

// Creditando dinheiro na conta
bankAccount1.credit(1000); // O novo saldo da conta é: R$ 1000

// Debitando dinheiro da conta
bankAccount1.debit(300); // O novo saldo da conta é: R$ 700

// Transferindo de uma conta para outra
bankAccount1.transferTo(bankAccount2, 200);
// O saldo atual da conta de origem é de R$ 500
