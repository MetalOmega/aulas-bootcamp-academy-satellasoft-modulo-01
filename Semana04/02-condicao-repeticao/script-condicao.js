var numero = prompt('Digite um número de 1 a 7');

numero = parseInt(numero);

switch (numero) {
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sexta');
        break;
    case 6:
        console.log('Sábado');
        break;
    case 7:
        console.log('Domingo');
        break;
        default:
            console.log("Dia da semana inválido");
}


/*

var numero = prompt('Digite um número de 1 a 10');

console.log(typeof numero);


var numero = prompt('Digite um número');

if (numero == 1) {
    if (!confirm('algo')) {
        alert('Cancelado');
    }
}


debugger; //verifica o passo a passo do script
if (numero == 1 || numero == 5) {
    alert(numero);
}



if (numero >= 1 && numero <= 5) {
    console.log('Acertou');
}


if (numero == 1) {
    console.log('1');
} else if (numero <= 0) {
    console.log('Número negativo');
} else {
    console.log('Algum outro');
}
*/
