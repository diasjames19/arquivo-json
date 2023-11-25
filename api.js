const botao = document.getElementById('btUsuario');
const dadosContainer = document.getElementById('dados-container');
const halperUsuario = document.getElementById('helper-usuario');
function gerarUsuario(){
    halperUsuario.innerText = "Carregando...."
  fetch('https://random-data-api.com/api/v2/users')
    .then((res)=>res.json())
    .then((data)=>{
        //console.log("Retorno do Data=>",data)
        const usuario = document.createElement('div')
        usuario.innerHTML = `
            <img src="${data.avatar}" />
            <span><strong>Username:</strong>${data.username}</span>
        
        `
        usuario.classList.add('usuario');
        dadosContainer.appendChild(usuario);
        halperUsuario.innerText = ''
        console.log(data);
    })
    .catch((error)=>{
        alert("Erro ao carregar usuario");
        console.log(error);
    })
}
const postContainer = document.getElementById('post-container');
const btnPost = document.getElementById('btn-post');
const postMsg = document.getElementById('post-msg');
const postTitulo = document.getElementById('post-titulo');
function gerarPostUsuario(evento){
    evento.preventDefault()

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify({
            "Titulo":postTitulo.value,
            "Mensagem":postMsg.value
        })
        
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((error)=>{
        alert("Erro ao Inserir Postagem");
        console.log(error);
    })
}
const postProduto = document.getElementById('post-container');
const btnCad = document.getElementById('btn-post');
const postTituloProduto = document.getElementById('titulo-produto');
const postValorProduto = document.getElementById('valor-produto');
const postDescProduto = document.getElementById('desc-produto');

function cadastroProduto(evento){
    evento.preventDefault()

    fetch('https://httpbin.org/post',{
        method:"POST",
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify({
            "P":postTitulo.value,
            "Mensagem":postMsg.value
        })
        
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((error)=>{
        alert("Erro ao Inserir Postagem");
        console.log(error);
    })
}

botao.addEventListener("click", gerarUsuario);
btnPost.addEventListener("click", (evento)=>gerarPostUsuario(evento));
btnCad.addEventListener("click", (evento)=>cadastroProduto(evento));

