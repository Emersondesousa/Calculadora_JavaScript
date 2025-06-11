// [JSIA-A02] Crie um sistema em JavaScript que utilize os conceitos de operadores ternários, 
// estruturas switch e operadores lógicos para classificar e exibir mensagens baseadas na idade e no status do usuário.

// Requisitos do Projeto:

// * Solicite ao usuário a idade e o status de registro (registrado ou não registrado) utilizando prompt().

// * Use um operador ternário para determinar se o usuário é maior de idade ou menor de idade.

// * Utilize uma estrutura switch para exibir uma mensagem personalizada com base no status do usuário:

// - "registrado": Exibir mensagem de boas-vindas.
// - "não registrado": Exibir mensagem para completar o registro.
// - Qualquer outro valor: Exibir "Status desconhecido."
// - Adicione uma lógica com operadores lógicos para verificar:
// - Se o usuário é maior de idade e registrado, exiba uma mensagem de acesso completo.
// - Se o usuário é menor de idade ou não registrado, exiba uma mensagem de acesso limitado.


let usuario = Number(prompt("Informe sua idade: "))
let status = prompt("Informe se você é registrado (sim ou não): ")

let  = (usuario >= 18) ? "Maior de idade" : "Menor de idade"

if (usuario < 1 || usuario > 120){
    alert("Informe uma idade válida.")
}

else if (usuario >= 18 && status == "sim" ){
        alert("Seja bem-vindo ! Acesso completo !")
}

else if (usuario < 18 && status == "não"){
    alert("Não registrado, favor completar o cadastro.")
}

else if (usuario < 18 && status == "sim"){
    alert("Acesso limitado, você é junim...")
}


else{
    alert("Erro.")
}

switch (status){

     case "sim":
         alert("Seja bem vindo !");
         break;

     case "não":
         alert("Complete o registro.");
         break;

    default:
        alert("Status deconhecido.");
        break;
        
 }