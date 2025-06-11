// // [JSIA-A03]  Crie um programa em JavaScript que combine o uso de while (true),
// //  for, e for...of para realizar operações iterativas. O programa deve solicitar entradas do usuário,
// //   processar os dados e exibir resultados em diferentes formatos.

// // Requisitos do Projeto:
// // * Coleta de Dados com while (true):
// //  - Solicite ao usuário uma sequência de nomes (ou qualquer outro tipo de dado) usando prompt().
// //  - O loop deve continuar até que o usuário insira uma palavra específica como "sair". Use break para encerrar o loop.

// // * Processamento com for:
// //  - Após coletar os dados, use um loop for para exibir os dados com índices. Exemplo: 1: Nome1

// // * Exibição com for...of: 
// //  - Use um loop for...of para exibir cada nome individualmente com uma mensagem personalizada,
// //   como "Bem-vindo(a), Nome!".


// let dados = [];

// while (true) {
//     let usuario = prompt("Informe o nome ou qualquer outro tipo de dado (Digite sair para ver o resultado): ");
//     if (usuario === "sair"){
//         break
//     }
//     else
//         dados.push(usuario);
//     }

// for (let i = 0; i < dados.length; i++){
// console.log(`${i+1} : ${dados[i]}`);
// }
    
// for (nomes of dados){
// console.log(`Bem-vindo(a), ${nomes}! `);
// }
    
let x = 5;
while (x > 0) {
console.log(x);
x--;
}