'use strict'
clicado();
function clicado() {
    //getById
    let nome = document.getElementById('txtNome');
    //console.log(nome.value);

    //getByClass
    let classes = document.getElementsByClassName('lista');
    //console.log(classes);

    for (var i = 0; i < classes.length; i++) {
        classes[i].innerHTML += ' *****';

        /*
            for (var i = 0; i < classes.length; i++) {
            console.log(classes[i]);
            let value = classes[i].innerHTML
            classes[i].innerHTML += ' *****';
    
            let i = 0;
    
            i += 2; // 2
            i += 5; // 7
        }
    
        for (var i = 0; i < classes.length; i++) {
            console.log(classes[i]);
            let value = classes[i].innerHTML
            classes[i].innerHTML = value + '*****';
        }
    
        for (var i = 0; i < classes.length; i++) {
            console.log(classes[i]);
            classes[i].innerHTML = '<b>item</b> 0001';
        }
    
            let classes = document.getElementsByClassName('lista');
        console.log(classes);
    
        for (var i = 0; i <= classes.length; i++) {
            console.log(i + 1);
            console.log(classes[i]);
        }
    
    
        let nomes = ['Metal', 'Omega'];
        nomes[0];
        */
    }

    //GetByTagName
    var a = document.getElementsByTagName('a');

    for (var i = 0; i < a.length; i++) {
        if (!a[i].hasAttribute('target')) {
            if (a[i].getAttribute('href').indexOf('metalomega') > 0) {
                a[i].setAttribute('target', '_blank');
                a[i].style.color = 'red';
                a[i].style.baclgroundColor = 'blue';
            }
        }


        /*
                if (!a[i].hasAttribute('target')) {
            a[i].setAttribute('target', '_blank');
        }

        console.log(a[i].getAttribute('href'));

                if (!a[i].hasAttribute('target')) {
            a[i].setAttribute('target', '_blank');
        }

        console.log(a[i].getAttribute('data-externo'));

        if (!a[i].hasAttribute('target')) {
            console.log('Não Tem o target');
        }
        */
    }

}

//document.title = "JS Metal Omega";

//document.location.href = "Teste"