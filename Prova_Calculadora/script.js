let opcao = prompt("Informe a operação de deseja fazer (+, - ,x ,/ , %)");
let num1 = Number(prompt("Informe o primeiro número: "));
let num2 = Number(prompt("Informe o segundo número: "));
let resultado = num1;

switch (opcao){
    case "+":
        resultado += num2;
        console.log(`${num1} + ${num2} = ${resultado}`);
        break
    case "-":
        resultado -= num2;
        console.log(`${num1} - ${num2} = ${resultado}`);
        break
    case "x":
        resultado *= num2;
        console.log(`${num1} x ${num2} = ${num1 * num2}`)
        break
    case "/":
            if (num2 == 0){
                console.log("Não é possivel fazer divisão por 0.");}
            else {
                console.log(`${num1} / ${num2} = ${num1 / num2}`);}
            break
    case "%":
        resultado %= num2;
        console.log(`${num1} % ${num2} = ${resultado}`);
        break
    default:
        console.log("Operação inválida.");
        break
    }
        
