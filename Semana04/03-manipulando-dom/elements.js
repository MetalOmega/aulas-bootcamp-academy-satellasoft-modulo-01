'use strict'

var app = document.getElementById('app');

var ul = document.createElement('ul');

for (let i = 0; i < 15; i++) {
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


    /*
    let span = document.createElement('span');
    span.innerText = (i + 1) < 10 ? '0' + (i + 1) : (i + 1);

    if (i + 1 < 10) {
        teste
    } else {
        noteste
    }

    li.appendChild(span);

    ul.appendChild(li);
    */
}

//ul.innerHTML = '<li>Teste</li><li>Teste</li><li>Teste</li><li>Teste</li><li>Teste</li>'
//console.log(parseInt('3') + 1);

app.appendChild(ul);