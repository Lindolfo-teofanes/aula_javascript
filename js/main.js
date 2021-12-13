/*var nome =  "Lindolfo Teófanes";
alert("Seja Bem vindo "+ nome + "!!");*/

/*var idade = prompt("Qual a sua idade?");

if(idade >= 18){
    alert("maior de idade");
} else{
    alert("menor de idade");
};*/

function clicou(){
    document.getElementById("agra").innerHTML = "Obrigado!!";

}
function red(){
    window.open("https://www.geap.com.br/");
    //window.location.href = "https://www.geap.com.br/"
}

function trocar(elemento){
    //alert("trocar texto");
    //document.getElementById("over").innerHTML = "Obrigado maluco";
    elemento.innerHTML = "Obrigado maluco";
}
function voltar(elemento){
    //document.getElementById("over").innerHTML = "passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";
}
function load(){
    alert("pagina carregada");
}

function FuncChange(elemento){
    console.log(elemento.value);
}