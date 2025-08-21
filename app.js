//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos=[];

function adicionarAmigo() {
    //Adiciona um amigo à lista de amigos

    nome=document.querySelector('input').value;

    if (nome=='') {
        alert('Por favor, ensira um nome');
    } else {
        amigos.push(nome);
        nome.value='';
        listaAmigos();
    }
}

function listaAmigos() {
    //lista os amigos da lista de amigos na tela

    lista=document.getElementById('listaAmigos');
    lista.innerHTML='';

    for (let amigo of amigos) {
        lista.innerHTML+=`<li>${amigo}<li>`;
    }
}

function sortearAmigo() {
    //sorteia um amigo

    tamanho=amigos.length;
    resultado=document.getElementById('resultado');

    if (tamanho<1) {
        alert('Adicione um amigo');
    } else {
        indice=Math.floor(Math.random()*tamanho);
        nome=amigos[indice];
        resultado.innerHTML=`<li>${nome}`
    }
}