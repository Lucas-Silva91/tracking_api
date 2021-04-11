require ('dotenv').config()
const mongoose = require ('mongoose');


function connetionToDatabase(){
    mongoose.connect(process.env.DATABASE_STRING, { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true});

} 

function DBSetting(){
    const db = mongoose.connection
    db.on('error', (err)=> console.log(err));
    db.once('open', ()=>console.log('Database Connected'));
}

module.exports = {
    mongoose,
    connetionToDatabase,
    DBSetting,
    
}

