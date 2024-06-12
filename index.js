// 1) USANDO O OBJETO STYLE PARA ACESSAR E ALTERAR PROPRIEDADES CSS

function alterarCorFundoPrimeiroPost() {

    // 1.1) Armazenando na variável "posts" os dois <articles> com classe de "post"

    let posts = document.getElementsByClassName("post");
    console.log(posts);

    // 1.2) Armazenando na variável "primeiroPost" o índice 0 do array de posts - primeiro post

    let primeiroPost = posts[0];
    console.log("primeiro post", primeiroPost);

    // 1.3) Selecionado o elemento, podemos usar o objeto "style" para acessar e alterar QUALQUER propriedade do CSS

    primeiroPost.style.backgroundColor = "red";
}

// 2) ADICIONANDO E MODIFICANDO CLASSES COM classList e método "add"

function aumentarFonteSegundoPost() {

    let textoPosts = document.getElementsByClassName("texto-post");
    console.log(textoPosts);

    console.log(textoPosts[1].classList); // "classList" dá acesso a todas classes do elemento
    textoPosts[1].classList.add("fonte-grande"); // método "add" nos permite adicionar classes a elementos
    console.log(textoPosts[1].classList); // console.log para verificar a classe nova
}

// 3) MODIFICANDO ATRIBUTOS

function marcarRadio(genre){

    console.log(genre); // genero = "F" ou "M" - parâmetro passado via HTML

    let radioMasculino = document.getElementById("genero-masculino");
    let radioFeminino = document.getElementById("genero-feminino");

    // Condição simples para marcar botão de radio (permite apenas uma opção marcada)

    if(genre === "M"){
        radioMasculino.checked = true; // Cria e altera atributo checked para "true"
    }
    else if(genre === "F"){ 
        radioFeminino.checked = true;
    }

}