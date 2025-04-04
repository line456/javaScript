let valorTitulo = document.getElementById("TituloPrincipal").innerText;
console.log(valorTitulo);//
// FUNÇÃO QUE ALTERA O CONTEUDO DO TITULO 
function AlterarTitulo(){
    document.getElementById("TituloPrincipal").innerHTML = "Titulo alterado com sucesso";
    window.alert("Titulo alterado com sucesso");
}

function desfazerAlteracao(){
    document.getElementById("TituloPrincipal").innerHTML = valorTitulo;
}