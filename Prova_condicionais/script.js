let usuario = Number(prompt("Informe sua idade: "))
let status = prompt("Informe se você é registrado (sim ou não): ")

let classificar_idade = (usuario >= 18) ? "Maior de idade" : "Menor de idade"

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