//CONEXÃO COM O BANCO DE DADOS
//--------------------------------------------------------
const connection = require('../database/connection');

//Utilizar um método para gerar caracteres aleatórios
const crypto = require('crypto'); 

module.exports = {
    // LISTAR ONGS  
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },
    // CADASTRAR NOVA ONG
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        await connection('ongs').insert({  //await = faz com que este código seje executado e somente depois
            id,                            //ele continue a executar o return.
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({id});
    }
}