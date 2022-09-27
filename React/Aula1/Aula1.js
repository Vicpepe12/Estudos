import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Introdução a JSX
function escreveNome(nome){
    return nome.primeiroNome + '' + nome.ultimoNome;
}

const nome = 'Denis Jr.'
const element = <h1>Olá, {nome}!!</h1> //É possível colocar elementos de sintaxe de HTML dentro do javascript



const nomeDoDenis = {
    primeiroNome: 'Denis',
    ultimoNome: 'Jr.'
}

let element2 = <h1>Olá, {escreveNome(nomeDoDenis)}!</h1>

teste.innerHTML += "teste"

console.log('teste')

// comentário