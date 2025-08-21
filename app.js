//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos=[];

function adicionarAmigo() {
    nome=document.querySelector('input');

    if (nome.value=='') {
        alert('Por favor, ensira um nome');
    } else {
        amigos.push(nome)
        nome.value=''
    }
}

