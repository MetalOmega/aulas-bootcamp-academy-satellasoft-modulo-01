'use strict'

var numero = prompt('Digite um número');

var i = 0;

var nomes = [
    'Metal Omega',
    'Metal Omega Service',
    'Mirage Sakura',
    'Carros',
    'Motos',
    'Tecnologia',
];

console.log(nomes);

while (i < nomes.length) {
    console.log(nomes[i]);
    i++;
}

/*
var nomes = [
    'Metal Omega',
    'Metal Omega Service',
    'Mirage Sakura',
];

console.log(nomes);

while (i < numero) {
    console.log(i);
    //i = i + 1;
    i++;
}

while (i < 10) {
    console.log(i);
    //i = i + 1;
    i++;
}

for (var i = 1; i <= 10; i++){
    let result = numero + ' * ' + i + ' = ' + (numero * i) + '<br>';
    document.write(result);
}


alert('Teste');
*/