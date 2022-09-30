
const conectar = async ()=>{
    if(global.conexao && global.conexao.state != 'disconected'){
        return global.conexao
    }
    const mysql = require('mysql2/promise')
    const conexao = mysql.createConnection("mysql://root@localhost:3306/teste")
    console.log("Banco conectado")
    global.conexao = conexao
    return conexao
}

const visualizarItens = async()=>{
    const conexao=await conectar()
    const [itens] = await conexao.query('SELECT * FROM cliente')
    return await itens
}

const inserirDados = async(cliente)=>{
    const conexao=await conectar()
    const insere = await conexao.query('INSERT INTO cliente VALUES(?,?)', [cliente.id, cliente.nome])
    console.log("Cliente cadastrado")
}

const atualizarDados = async(cliente)=>{
    const conexao=await conectar()
    const insere = await conexao.query('UPDATE cliente SET s_nome_cliente=? where i_id_cliente=?', [cliente.nome, cliente.id])
    console.log("Cliente atualizado")
}
const deletarDados = async(cliente)=>{
    const conexao=await conectar()
    const insere = await conexao.query('DELETE from cliente WHERE i_id_cliente=?', [cliente.id])
    console.log("Cliente deletado")
}


module.exports = {visualizarItens, inserirDados, atualizarDados, deletarDados}