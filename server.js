require ('dotenv').config();

const http = require ('http');
const port = process.env.PORT || 3000;
const app = require ('./app')

const server = http.createServer(app);

server.listen(port, (req, res)=>console.log(`Server running on http://localhost:${port}`))
