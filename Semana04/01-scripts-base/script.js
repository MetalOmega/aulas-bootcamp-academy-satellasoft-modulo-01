'use strict'

var idade = prompt('Qual a sua idade?');

if(idade >= 18){
    let resposta = confirm('Você deseja comprar o ingresso?');
    
    if(resposta)
    alert('Okay, você pode acessar');
    else
    alert('Okay, você saiu:\'(');
    
}else{
    alert('Você não pode acessar');
}


/*
var idade = prompt('Qual a sua idade?');

if(idade >= 18){
    alert('Você pode acessar');
}else{
    alert('Você não pode acessar');
}

var obj = {
    nome: 'Metal Omega',
    idade: 33,
    trabalha: 'sim'
};

//console.log(obj);
console.table(obj);


//alert('Bem Vindo') -- Comentário


const idade = 33;
var nome = 'Metal Omega';
alert(idade);

if (1 + 1 == 2) {
    let nome = 'Metal Omega Service';
    alert(nome);
}
*/