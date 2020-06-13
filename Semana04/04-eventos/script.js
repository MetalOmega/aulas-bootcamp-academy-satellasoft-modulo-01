'use strict'

var maxLength = 150;

document.addEventListener('DOMContentLoaded', function () {
    //var el = document.getElementById('frmCadastro');
    //console.log(el);
    document.getElementById('frmCadastro').addEventListener('submit', function () {
        alert('Aeeeeeeeee');
    });
})


function contaCaracteres() {
    let text = document.getElementById('txtMensagem');
    let contador = maxLength - text.value.length;

    document.getElementById('caracteres');
    caracteres.innerText = contador;

    if (contador < 0) {
        caracteres.style.color = 'red';
        text.style.border = '3px solid red';
    } else
        //caracteres.cassName = 'casseCSS';
        caracteres.style.color = 'green';
    text.style.border = '3px solid green';
}

function enviaForm() {
    alert('Enviado');
}