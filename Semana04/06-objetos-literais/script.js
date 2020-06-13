'use strict'

var game = {
    cor: 'Preto',
    tamanho: '8cmx8cmx2.5cm',
    modelo: 'SP',
    estado: 'Funcionando',
    jogos: [
        {
            nome: 'Pokemon TGC',
            preco: 'R$ 100',
            descricao: 'Jogo de dominação de bichos',
            modelo: 'Game Boy Color'
        },
        {
            nome: 'Harvest Moon Back to Nature',
            preco: 'R$ 120',
            descricao: 'Jogo de fazendeiro',
            modelo: 'PSP'
        },
    ]
};

//console.log(JSON.stringify(game));

var json = '{"cor":"Preto","tamanho":"8cmx8cmx2.5cm","modelo":"SP","estado":"Funcionando","jogos":[{"nome":"Pokemon TGC","preco":"R$ 100","descricao":"Jogo de dominação de bichos","modelo":"Game Boy Color"},{"nome":"Harvest Moon Back to Nature","preco":"R$ 120","descricao":"Jogo de fazendeiro","modelo":"PSP"}]}';
console.log(typeof json);

json = JSON.parse(json);
console.log(typeof json);
console.log(json.tamanho);

setHTML('spCor', game.cor);
setHTML('spTamanho', game.tamanho);
setHTML('spModelo', game.modelo);
setHTML('spEstado', game.estado);

createTable(game.jogos);

function createTable(obj) {
    var tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    console.log(obj);

    for (let i = 0; i < obj.length; i++) {
        let data = obj[i];
        tbody.innerHTML += '<tr>' +
            '<td>' + data.nome + '</td>' +
            '<td>' + data.preco + '</td>' +
            '<td>' + data.descricao + '</td>' +
            '<td>' + data.modelo + '</td>' +
            '</tr>';
    }
}

function setHTML(el, value) {
    document.getElementById(el).innerHTML;
}





/*
createTable(game.jogos);

function createTable(obj) {
    var tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    console.log(obj);
}

function setHTML(el, value) {
    document.getElementById(el).innerHTML;
}
*/


//console.log(Array.isArray(game.modelo));
//console.log(Array.isArray(game.jogos));
//console.log(game.jogos[0]);
//console.log(game.jogos);
//console.log(game.modelo);
//console.log(JSON.stringify(game));
//console.log(game);

/*
var game = {
    cor: 'Preto',
    tamanho: '9cmx9xm',
    modelo: 'sp',
    estado: 'funciona',
    jogos: [
        'Pokemon TGC',
        'Harvest Moon Back to Nature',
    ]
};
*/