var infos = require('./pizzariaInfos.JS')

var cat = infos.categorias
var produtos = infos.produtosJSON
var user = infos.usuarioJSON


const mostrarPizza = (idProduto) => {
    const arrayPizza = produtos.pizzas
    const arrayComentarios = arrayPizza[0].comentarios

    let arrayC = []
    let arrayCo = []
    let status = false
   
    arrayPizza.forEach(function(produto){
        if(produto.id == idProduto){
            let jsonPizza = {}

            jsonPizza.foto = produto.foto
            jsonPizza.nome = produto.nome
            jsonPizza.favorito = produto.favorito
            jsonPizza.valor = produto.preco
            jsonPizza.descricao = produto.descricao
            jsonPizza.avl = produto.avaliacao
            
            arrayComentarios.forEach(function(comen){
                const fotoUsuario = comen.usuario.foto_usuario
                const nomeUsuario = comen.usuario.nome
                let jsonC = {}
    
               jsonC.fotoU = fotoUsuario
               jsonC.nomeU = nomeUsuario
               jsonC.data = comen.data
               jsonC.avlComentario = comen.avl_comen
               jsonC.titulo = comen.titulo
               jsonC.comentario = comen.coment_inteiro
    
               arrayCo.push(jsonC)
            })
    
            jsonPizza.comentario = arrayCo
            
            arrayC.push(jsonPizza)
    
            status = true
        }
        })
    
        let jsonT = {arrayC}
        if(status)
        return jsonT
        else
        return false   
}

const getFavoritos = () => {
    const arrayPizza = produtos.pizzas
    let arrayC = []
    let status = false
    arrayPizza.forEach(function(produto){
        if(produto.favorito == true){
            let jsonPizza = {}
            jsonPizza.foto = produto.foto
            jsonPizza.nome = produto.nome
            jsonPizza.valor = produto.preco
            arrayC.push(jsonPizza)
            status = true
        }
        })
        let jsonT = {arrayC}
        if(status)
        return jsonT
        else
        return false   
}

const getCategoriasPizzas = (idCategoria) => {
    const arrayPizza = produtos.pizzas
    let arrayC = []
    let status = false

    arrayPizza.forEach(function (produto) {
        produto.categoria.forEach(function (cate) {
            if (cate.idCat === idCategoria) {
                let jsonPizza = {
                    foto: produto.foto,
                    nome: produto.nome,
                    valor: produto.preco,
                }
                arrayC.push(jsonPizza)
                status = true
            }
        })
    })

    if (status) {
        return {arrayC}
    } else {
        return false;
    }
}

const mostrarBebida = (idProduto) => {
    const arrayBebida = produtos.bebidas

    let arrayC = []
    let status = false
   
    arrayBebida.forEach(function(produto){
        if(produto.id == idProduto){
            let jsonPizza = {}

            jsonPizza.foto = produto.foto
            jsonPizza.nome = produto.nome
            jsonPizza.favorito = produto.favorito
            jsonPizza.valor = produto.preco
            jsonPizza.descricao = produto.descricao
            jsonPizza.avl = produto.avaliacao
                        
            arrayC.push(jsonPizza)
    
            status = true
        }
        })
    
        let jsonT = {arrayC}
        if(status)
        return jsonT
        else
        return false   
}

const mostrarBebidas = () => {
    const arrayBebida = produtos.bebidas

    let arrayC = []
    let status = false
   
    arrayBebida.forEach(function(produto){
            let jsonPizza = {}

            jsonPizza.foto = produto.foto
            jsonPizza.nome = produto.nome
            jsonPizza.favorito = produto.favorito
            jsonPizza.valor = produto.preco
            jsonPizza.descricao = produto.descricao
            jsonPizza.avl = produto.avaliacao
                        
            arrayC.push(jsonPizza)
    
            status = true
        })
    
        let jsonT = {arrayC}
        if(status)
        return jsonT
        else
        return false   
}

const mostrarDoce = (idProdutos) => {
    const arrayBebida = produtos.doces

    let arrayC = []
    let status = false
   
    arrayBebida.forEach(function(produto){
           if(produto.id == idProdutos){
            let jsonPizza = {}

            jsonPizza.foto = produto.foto
            jsonPizza.nome = produto.nome
            jsonPizza.favorito = produto.favorito
            jsonPizza.valor = produto.preco
            jsonPizza.descricao = produto.descricao
            jsonPizza.avl = produto.avaliacao
                        
            arrayC.push(jsonPizza)
    
            status = true
           }
        })
    
        let jsonT = {arrayC}
        if(status)
        return jsonT
        else
        return false   
}

const mostrarDoces = () => {
    const arrayBebida = produtos.doces

    let arrayC = []
    let status = false
   
    arrayBebida.forEach(function(produto){
            let jsonPizza = {}

            jsonPizza.foto = produto.foto
            jsonPizza.nome = produto.nome
            jsonPizza.favorito = produto.favorito
            jsonPizza.valor = produto.preco
            jsonPizza.descricao = produto.descricao
            jsonPizza.avl = produto.avaliacao
                        
            arrayC.push(jsonPizza)
    
            status = true
        })
    
        let jsonT = {arrayC}
        if(status)
        return jsonT
        else
        return false   
}

const getUsuario = (id) => {
    const arrayUsuario = user.usuario
    let arrayC = []
    let status = false

    arrayUsuario.forEach(function(u){
        let jsonUser = {}
        let i = 0
        if(u.id == id){
            jsonUser.foto = u.foto
            jsonUser.nome = u.nome
            jsonUser.cidade = u.localizacao[i].cidade
            jsonUser.telefone = u.telefone
            jsonUser.email = u.email
            jsonUser.localizacao = u.localizacao
            arrayC.push(jsonUser)
            status = true
        }
        i = i + 1
    })
    if(status)
    return {arrayC}
    else
    return false  
}

console.log(getUsuario(3))

module.exports={
    mostrarPizza,
    getFavoritos,
    getCategoriasPizzas,
    mostrarBebida,
    mostrarBebidas,
    mostrarDoce,
    mostrarDoces,
    getUsuario
}

// input:focus{
//     outline-style: none;
// }