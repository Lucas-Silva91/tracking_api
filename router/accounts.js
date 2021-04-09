const express = require ('express');
const router = express.Router();
const Account = require ('../model/account');

router.get('/', async (req, res, next)=>{

    try {
        const account = await Account.find();
        res.json(account);
    } catch (error) {
        
        res.status(500).json({message: error.message})
    }
    
});

router.get('/:id', (req, res, next)=>{

});

router.post('/', async (req, res, next)=>{
     const account = new Account({
         accountEcommerce: req.body.accountEcommerce,
         accountCnpj: req.body.accountCnpj,
         accountEmail: req.body.accountEmail
     });

     try {
         const newAccount = await account.save();
         res.status(201).json(newAccount);
     } catch (error) {
         res.status(400).json({message: error.message})
     }
});

router.patch('/:id', (req, res, next)=>{

});

router.delete('/:id', (req, res, next)=>{

});


module.exports = router