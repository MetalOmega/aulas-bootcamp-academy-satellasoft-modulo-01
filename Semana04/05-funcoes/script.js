'use strict'

var acertos = 0;
var erros = 0;
var i = 0;
while (i < 10) {
    var meuNumero = prompt('Digite um número entre 1 e 10');
    let sort = Math.round(Math.random() * 10);
    console.log(sort);

    if (sort == meuNumero)
        acertos++;
    else
        erros++;


    i++;

}

document.write('<h1>Acertos: ' + acertos + ' erros: ' + erros + '</h1>')

/*
var acertos = 0;
var erros = 0;
var i = 0;
while (i < 10) {
    let sort = Math.random() * 10;
    console.log(sort);
    i++;

}
*/

/*
var meuNumero = prompt('Digite um número entre 1 e 10');
var acertos = 0;
var erros = 0;
var i = 0;
while(i < 10){
    let sort = Math.round(Math.random());
    console.log(sort);
    i++;

}
*/

/*
creatElement('app', 10);
creatElement('outro', 5);

function creatElement(elemento, limite) {
    var app = document.getElementById(elemento);

    var ul = document.createElement('ul');

    for (let i = 0; i < limite; i++) {
        let li = document.createElement('li');
        li.innerHTML = 'Número ';

        let span = document.createElement('span');
        let valor = (i + 1);

        span.innerText = valor < 10 ? '0' + valor : valor;
        span.style.fontWeight = 'bold';
        span.style.color = 'blue';
        //span.setAttribute('style', 'font-weight : bold;');

        li.appendChild(span);

        ul.appendChild(li);
    }

    app.appendChild(ul);

}
*/


//alert(minhaFuncao(1, 3));

/*var resultado = minhaFuncao(5, 5);

alert(resultado);

function minhaFuncao(p1, p2) {
    return p1 * p2;
}
*/