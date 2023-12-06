/**
 * objetivo: criação de uma API para manipular os dados de uma pizzaria
 * data: 22/10/23
 * autora: Nathalia Kawakami
 * Versão: 1.0
 */

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//criando um objeto para manipular as requisições da API
const app = express()

//Função para manipular as retrições da API
app.use((request, response, next) =>{
    //Permite especificar quem poderá acessar a API ('*' = liberar acesso público, 'IP' = liberar acesso apenas ao IP digitado)
    response.header('Access-Control-Allow-Origin', '*')
    //Permite especificar como a API será requisitada ('GET', 'POST', 'PUT', 'DELETE')
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    //Continuar processando outras coisas de dentro da API.
    next()
})

//EndPoints: pontos de paradas (como nossa API escuta os métodos)

//Configurar a forma que o endpoint será acionado. Assinatura do EndPoint
//Retorna a listade todos os estados.
app.get('/produto/pizza', cors(), async function(request, response, next){
    let idProduto = request.query.idProduto
    let controlePizzaria = require('./module/funcoes.js')
    let produtoPizza = controlePizzaria.mostrarPizza(idProduto)

    if(produtoPizza){
        response.json(produtoPizza)
        response.status(200)
    }else{
        response.status(404)
    }
})

app.listen('8080', function(){
    console.log('roda')
})

// mostrarpizza
// getfavoritos
// getcategoriaspizzas
// mostrarbebida
// mostrarbebida
// mostrardoce
// mostratdoces
// getusuario