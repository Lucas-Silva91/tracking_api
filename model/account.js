const db = require ('../config/connectionDB');

const accountSchemma = new db.mongoose.Schema({


    accountEcommerce:{
        type: String,
        required: true

    },

    accountCnpj:{
        type:String,
        required: true

    },

    accountEmail:{
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

module.exports = db.mongoose.model('Account', accountSchemma)