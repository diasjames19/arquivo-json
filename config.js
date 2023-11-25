const postProduto = document.getElementById('post-container');
const btnCad = document.getElementById('btn-cadastro');
const postTituloProduto = document.getElementById('titulo-produto');
const postValorProduto = document.getElementById('valor-produto');
const postDescProduto = document.getElementById('desc-produto');
const halperUsuario = document.getElementById('helper-usuario');

halperUsuario.innerText = ""
function gerarProduto(evento){
    halperUsuario.innerText = ""
    evento.preventDefault()

    fetch('https://httpbin.org/post',{
        method:"POST",
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify({
            'produto':postTituloProduto.value,
            'preco': postValorProduto.value,
            'descricao':postDescProduto.value
        })
        
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
       
    })
    .catch((error)=>{
        alert("Erro ao Inserir Postagem");
        halperUsuario.innerText = "Erro ao Cadastrar Produto! :("
        console.log(error);
    })
}


btnCad.addEventListener("click", (evento)=>gerarProduto(evento));

