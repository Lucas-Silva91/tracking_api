const express = require ('express');
const router = express.Router();
const Orders = require ('../model/order');

router.get('/', async (req, res, next)=>{

    try {
        const order = await Orders.find();
        res.json(order);
    } catch (error) {
        
        res.status(500).json({message: error.message})
    }
    
});

router.post('/', async (req, res, next)=>{
     const order = new Orders({
         nome: req.body.nome,
         cpf: req.body.cpf,
         email: req.body.email,
         tracking: req.body.tracking
     });

     try {
         const newOrder = await order.save();
         res.status(201).json(newOrder);
     } catch (error) {
         res.status(400).json({message: error.message})
     }
});

module.exports = router