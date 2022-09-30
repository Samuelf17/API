const express = require('express')
const bd = require('./bd')
const app = express()

app.use(express.json())

app.get('/', async (req, res)=>{
    const clientes = await bd.visualizarItens()
    res.send(clientes)
    console.log(clientes)
})

app.post('/', async (req, res)=>{
    if(req.body.acao == 'inserir'){
        bd.inserirDados(req.body)
        res.end("Finalizou")
    } else if(req.body.acao == 'atualizar'){
        bd.atualizarDados(req.body)
        res.end("Finalizou")
    } else if(req.body.acao == 'deletar'){
        bd.deletarDados(req.body)
        res.end("Finalizou")
    }
})
app.listen(8080, ()=>{
    console.log('Api Rodando: https://localhost:8080/')
})