require('dotenv').config();


const BodyParser = require('body-parser');
const Database = require('./database');
const Express = require('express');
const Cors = require('cors');


let app = Express();
let database = new Database();


app.use(Cors())
app.use(BodyParser.json())


app.get('/', async (_, res) => {
    res.status(200).jsonp({
        status: 200,
        content: 'API v1.0'
    })
});

app.get('/movimento', async (_, res) => {
    res.status(200).jsonp({
        status: 200,
        content: database.getData()
    });
});

app.post('/movimento/add', async (req, res) => {
    let body = req.body;

    if (!body.valor || !body.date || !body.descricao || !body.tipo || isNaN(body.valor) || isNaN(body.date) || (body.tipo !== 'ENTRADA' && body.tipo !== 'SAIDA') || typeof body.descricao !== 'string')
        return res.status(400).jsonp({
            status: 400,
            content: 'Invalid input'
        });

    database.addData({
        descricao: body.descricao,
        timestamp: body.date + 86400000,
        valor: body.valor,
        tipo: body.tipo
    });

    res.status(200).jsonp({
        status: 200,
        content: database.getData()
    });
});

app.all('*', async req => {
    req.socket.destroy();
});

app.listen(8000);