const db = require ('../config/connectionDB');

const ordersSchemma = new db.mongoose.Schema({


    nome:{
        type: String,
        required: true

    },

    cpf:{
        type:String,
        required: true

    },

    email:{
        type:String,
        required: true

    },

    tracking:{
        type:String,
        required: true

    },

    accountDate:{
        type:Date,
        required: true,
        default: Date.now
    },

    isActive:{
        type:String,
        default: true
    }

});

module.exports = db.mongoose.model('Orders', ordersSchemma)