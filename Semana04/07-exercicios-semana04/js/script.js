'use strict'

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('frmCadastro').addEventListener('submit', (event) => {

        let data = pegarValores();

        if (!validar(data))
            event.preventDefault();
    });

});

function pegarValores() {
    return {
        nome: [getValue('txtNome'), 'txtNome'],
        email: [getValue('txtEmail'), 'txtEmail'],
        senha: [getValue('txtSenha'), 'txtSenha'],
        senha2: [getValue('txtConfirmSenha'), 'txtConfirmSenha'],
        genero: [getValue('txGenero'), 'txGenero'],
        nascimento: [getValue('txData'), 'txData'],
        assunto: [getValue('txtAssunto'), 'txtAssunto']
    };

}

function validar(data) {
    let msg = [];

    if (data.nome[0].length < 2 || data.nome[0].length > 50) {
        setClass(data.nome[1], 'errado');
        msg.push('Nome inválido. Min. 2 e máx. 50 caracteres.');
    } else {
        setClass(data.nome[1], 'valido');
    }

    if (data.email[0].length < 5 || data.email[0].indexOf('@') <= 0) {
        setClass(data.email[1], 'errado');
        msg.push('E-mail inválido. insira seuemail@email.com');
    } else {
        setClass(data.email[1], 'valido');
    }

    if (data.senha[0].length < 6 || data.senha[0].length > 50 || data.senha[0] != data.senha2[0]) {
        setClass(data.senha[1], 'errado');
        setClass(data.senha2[1], 'errado');
        msg.push('Informe uma senha váliada. Min. 6 e máx. 50 caracteres.');
    } else {
        setClass(data.senha[1], 'valido');
        setClass(data.senha2[1], 'valido');
    }

    if (data.genero[0] == 'M' || data.genero[0] == 'F') {
        setClass(data.genero[1], 'errado');
        msg.push('Gênero inválido. Selecione M ou F.');
    } else {
        setClass(data.genero[1], 'valido');
    }

    let date = data.nascimento[0].split('-');
    var currentYear = new Date().getFullYear('');

    if ((date[0] < 1910 || date[0] > currentYear) || (date[1] <= 0 || date[1] > 12) || (date[2] <= 0 || date[2] > 31)) {
        setClass(data.nascimento[1], 'errado');
        msg.push('Informe uma data válida.');
    } else {
        setClass(data.nascimento[1], 'valido');
    }

    if (data.assunto[0].length < 10 || data.assunto[0].length > 300) {
        setClass(data.assunto[1], 'errado');
        msg.push('Assunto inválido. Min. 10 e máx. 300 caracteres.');
    } else {
        setClass(data.assunto[1], 'valido');
    }


    exibirMensagem(msg);

    return msg.length == 0;

    /*
    if (msg.length == 0) {
        return true;
    } else {
        return false;
    }
    */
}


function exibirMensagem(msg) {
    let mensagem = document.getElementById('dvMensagem');
    mensagem.innerHTML = '';

    var ul = document.createElement('ul');

    for (let i = 0; i < msg.length; i++) {
        var li = document.createElement('li');
        li.innerText = msg[i];

        ul.appendChild(li);

    }

    mensagem.appendChild(ul);

}

function setClass(id, classe) {
    document.getElementById(id).className = classe;
}

function getValue(id) {
    return document.getElementById(id).value;
}
