const express = require ('express');
const app = express();

const db = require ('./config/connectionDB');
const routerAccount = require ('./router/accounts');
const routerOrder = require ('./router/orders');

db.connetionToDatabase()
db.DBSetting()


app.use(express.json())
app.use('/account', routerAccount);
app.use('/order', routerOrder)

module.exports = app