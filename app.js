//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos=[];

function adicionarAmigo() {
    nome=document.querySelector('input').value;

    if (nome=='') {
        alert('Por favor, ensira um nome');
    } else {
        amigos.push(nome);
        nome.value='';
        listaAmigos()
    }
}

function listaAmigos() {
    lista=document.getElementById('listaAmigos');
    lista.innerHTML='';

    for (let amigo of amigos) {
        lista.innerHTML+=`<li>${amigo}<li>`
    }
}
