function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');

    if(listaAmigos.textContent == ''){
        listaAmigos.textContent = nomeAmigo.value;
    }else{
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
    }
}

function sortear(){

}

function reiniciar(){

}